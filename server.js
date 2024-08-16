const express = require("express");
const { exec } = require("child_process");
const next = require("next");
const path = require("path");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.use(express.json());

const getSettings = () => {
  const settingsPath = path.join(__dirname, "public", "settings.json");
  const settings = JSON.parse(fs.readFileSync(settingsPath, "utf8"));
  return settings;
};

const getCommand = (type, cmd) => {
  if (type == "exe") {
    return `${cmd}`;
  } else if (type == "URI") {
    return `start "" "${cmd}"`;
  } else if (type == "navigation") {
    return `start "" "${cmd}"`;
  } else if (type == "command") {
    return `${cmd}`;
  } else {
    console.error("Invalid type:", type);
    return "";
  }
};


server.post("/api/launch", (req, res) => {
  const { appName } = req.body;
  const settings = getSettings();
  const appSetting = settings.find((item) => item.name === appName);

  if (!appSetting) {
    return res.status(400).json({ message: "Unknown application" });
  }
  const command = getCommand(appSetting.type, appSetting.cmd);

  console.log(command)
  
  if (!command) {
    return res.status(400).json({ message: "Invalid command" });
  }

  console.log("Executing command:", command);

  exec(command, (err) => {
    if (err) {
      console.error("Error launching application:", err.message);
      return res.status(500).json({ message: "Error launching application" });
    }
    res.status(200).json({ message: `${appName} launched successfully` });
  });
});

server.post("/api/status", (req, res) => {
  const { appName } = req.body;
  const settings = getSettings();
  const appSetting = settings.find((item) => item.name === appName);

  if (!appSetting) {
    return res.status(400).json({ message: "Unknown application" });
  }

  const processName = appSetting.processName;
  exec(`tasklist /fi "ImageName eq ${processName}"`, (err, stdout) => {
    if (err) {
      return res.status(200).json({ message: "Not Running" });
    }
    const isRunning = stdout.toLowerCase().includes(processName.toLowerCase());
    res.status(200).json({ isRunning });
  });
});

server.post("/api/kill", (req, res) => {
  const { appName } = req.body;
  const settings = getSettings();
  const appSetting = settings.find((item) => item.name === appName);

  if (!appSetting) {
    return res.status(400).json({ message: "Unknown application" });
  }

  const processName = appSetting.processName;
  exec(`taskkill /IM ${processName} /F`, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ message: "Error killing process" });
    }
    res.status(200).json({ message: `${appName} terminated successfully` });
  });
});


app.prepare().then(() => {
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(5000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:5000");
  });
})