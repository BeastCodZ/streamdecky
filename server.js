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

const isCustomScheme = (str) => /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(str);

const getCommand = (path, args) => {
  if (isCustomScheme(path)) {
    return `start "" "${path}" ${args ? args : ""}`;
  } else if(path[0]="$") {
    return path.slice(1);
  } else {
    return `"${path}" ${args ? args : ""}`;
  }
};

server.post("/api/launch", (req, res) => {
  const { appName } = req.body;
  const settings = getSettings();
  const appSetting = settings.find((item) => item.name === appName);

  if (!appSetting) {
    return res.status(400).json({ message: "Unknown application" });
  }

  const command = getCommand(appSetting.path, appSetting.args);
  
  exec(command)
  console.log("Executed, ", command) 
})

app.prepare().then(() => {
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(5000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:5000");
  });
})