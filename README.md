![image](https://github.com/user-attachments/assets/366b27da-289f-43b8-a3d5-ea4124131bed)

# StreamDecky

StreamDecky is a web-based application that allows you to create and manage customizable buttons that launch applications and handle custom URI schemes. The application is built using Next.js for the frontend and Node.js (Express) for the backend, providing a seamless experience for managing and launching applications remotely.

## Features

- **Dynamic Button Generation**: Buttons are dynamically generated based on a `settings.json` configuration file.
- **Remote Application Launching**: Launch applications or handle custom URIs from the server-side, keeping the client-side light and secure.
- **Customizable Interface**: Easily add or modify buttons by updating the `settings.json` file.
- **Responsive Design**: The UI adjusts the grid layout based on the number of buttons, ensuring a consistent look across different screen sizes.

## Pending stuff

- Settings Page
- more shortcuts(change of volume and stuff)
- Saving application layout and opening bulk application

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/StreamDecky.git
cd StreamDecky
```
2. **Install the dependencies**
```bash
npm install
# or
yarn install
```
3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```
### Running the Server
Start the Node.js server:
```bash
node server.js
# The server will run on the same port as the Next.js application
```

### Usage
Configuration
settings.json: This file contains the configuration for the buttons. Each button has a name, path (for executable applications), uri (for custom URI schemes), and icon.

Example settings.json:

```json

[
    {
      "name": "Valorant",
      "cmd": "\"C:\\Riot Games\\Riot Client\\RiotClientServices.exe\" --launch-product=valorant --launch-patchline=live",      
      "type": "exe",
      "icon": "/icons/valorant.png",
      "processName": "VALORANT-Win64-Shipping.exe"
    },
    {
      "name": "Grand Theft Auto V",
      "cmd": "com.epicgames.launcher://apps/0584d2013f0149a791e7b9bad0eec102%3A6e563a2c0f5f46e3b4e88b5f4ed50cca%3A9d2d0eb64d5c44529cece33fe2a46482?action=launch&silent=true",
      "type": "URI",
      "icon": "/icons/gta5.png",
      "processName": "GTA5.exe"
    },
    {
      "name": "Tekken 8",
      "cmd": "\"D:\\Games\\TEKKEN 8\\Polaris\\Binaries\\Win64\\Polaris-Win64-Shipping.exe\"",
      "type": "exe",
      "icon": "https://img.playstationtrophies.org/images/2024/01/24/icon/10e1c115a12eb21755f86f0d7a64548d-l.png",
      "processName": "Polaris-Win64-Shipping.exe"
    },
    {
      "name": "Discord",
      "cmd": "\"C:\\Users\\BeastCodZ\\AppData\\Local\\Discord\\Update.exe\" --processStart Discord.exe",
      "type": "exe",
      "icon": "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg",
      "processName": "Discord.exe"
    },
    {
      "name": "Spotify",
      "cmd": "\"C:\\Users\\BeastCodZ\\AppData\\Roaming\\Spotify\\Spotify.exe\"",
      "type": "exe",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/800px-Spotify_App_Logo.svg.png",
      "processName": "Spotify.exe"
    },
    
    {
      "name": "Settings",
      "cmd": "",
      "type": "misc",
      "icon": "/settings.png",
      "processName": ""
    }
  ]
```
Running the Application
Once the server and development server are running, open your browser and navigate to http://localhost:3000. You will see the StreamDecky interface with buttons based on the settings.json configuration.

Settings Page
The settings page allows you to view and update the settings.json file live. Any changes made will automatically reflect in the StreamDecky interface.

# Screenshots

![image](https://github.com/user-attachments/assets/8af8d9db-68bf-4bc3-ae1a-58477dc4389c)


# License
This project is licensed under the MIT License
