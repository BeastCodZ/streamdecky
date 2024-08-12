# StreamDecky

StreamDecky is a web-based application that allows you to create and manage customizable buttons that launch applications and handle custom URI schemes. The application is built using Next.js for the frontend and Node.js (Express) for the backend, providing a seamless experience for managing and launching applications remotely.

## Features

- **Dynamic Button Generation**: Buttons are dynamically generated based on a `settings.json` configuration file.
- **Remote Application Launching**: Launch applications or handle custom URIs from the server-side, keeping the client-side light and secure.
- **Customizable Interface**: Easily add or modify buttons by updating the `settings.json` file.
- **Responsive Design**: The UI adjusts the grid layout based on the number of buttons, ensuring a consistent look across different screen sizes.

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
      "path": "C:/Riot Games/Riot Client/RiotClientServices.exe",
      "args": "--launch-product=valorant --launch-patchline=live",
      "icon": "/icons/valorant.png",
      "processName": "VALORANT-Win64-Shipping.exe"
    },
    {
      "name": "Grand Theft Auto V",
      "path": "com.epicgames.launcher://apps/0584d2013f0149a791e7b9bad0eec102%3A6e563a2c0f5f46e3b4e88b5f4ed50cca%3A9d2d0eb64d5c44529cece33fe2a46482?action=launch&silent=true",
      "args": "",
      "icon": "/icons/gta5.png",
      "processName": "GTAV.exe"
    },
    {
      "name": "Settings",
      "path": "",
      "args": "",
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
