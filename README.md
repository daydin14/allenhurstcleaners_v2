# Optio Blue

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Google Maps Badge](https://img.shields.io/badge/Google%20Maps-4285F4?logo=googlemaps&logoColor=fff&style=for-the-badge)
![Google Street View Badge](https://img.shields.io/badge/Google%20Street%20View-FEC111?logo=googlestreetview&logoColor=000&style=for-the-badge)

## Getting Started

To get started with the project, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of this repository to create a copy of the repository in your GitHub account.
2. **Clone the repository**: Clone the forked repository to your local machine using the following command:
   ```bash
   git clone https://github.com/<your-username>/allenhurstcleaners_v2.git
   ```
3. **Navigate to the project directory**: Change into the project directory:
   ```bash
   cd optio-blue
   ```
4. **Open with VS Code**: Using the terminal, after you've changed directory into the project:
   ```bash
   code .
   //Daves Side Note: '.' is similar to saying, code "current directory"
   ```
5. **Install dependencies**: Install the required dependencies using npm:
   ```bash
   npm install || npm i
   ```
6. **Start the development server**: Start the development server to run the application locally:
   ```bash
   npm start
   ```

## Features

- **Single-Page Application**: Built using React, providing a smooth and responsive user experience.
- **Google Maps Integration**: Utilizes the Google Maps API to display business information and location.
- **Material UI**: Styled using Material UI components for a modern and consistent design.

## Technologies Used

### IDEs/Editors

- **VS Code**: A powerful, lightweight code editor with built-in support for JavaScript, TypeScript, and Node.js.

### Languages

- **JavaScript (JS)**: The main programming language used for building the application.
- **HTML**: Used for structuring the web pages.
- **CSS**: Used for styling the web pages.
- **Markdown (MD)**: Used for writing documentation.

### Version Control

- **Git**: A distributed version control system for tracking changes in source code.
- **GitHub**: A web-based platform for version control and collaboration.

### Frameworks, Platforms, and Libraries

- **NPM**: A package manager for JavaScript, used to install dependencies.
- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Google Maps API**: Used to display maps and business information.
- **Material UI (MUI)**: A popular React UI framework for building responsive and visually appealing user interfaces.

## Google Maps API Integration

The application integrates with the Google Maps API to provide detailed information about the business location. This includes displaying the business address, phone number, hours of operation, and more. The Google Maps API is wrapped in Material UI components to ensure a seamless and visually appealing user experience.

For more information on the Google Maps API, visit the [Google Maps API documentation](https://developers.google.com/maps/documentation).

## Deployment on GitHub Pages

This project uses the gh-pages node package to deploy the application to GitHub Pages.
Follow these steps to deploy your application:

1. **Install gh-pages**: Install the gh-pages package as a development dependency:
   ```bash
   npm install gh-pages --save-dev
   ```
2. **Update package.json**: Add the following scripts to your package.json file:
   ```json
   "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build",
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject"
   }
   ```
3. **Add homepage field**: Add the homepage field to your package.json file with the URL of your GitHub Pages site:
   ```json
   "homepage": "https://<your-username>.github.io/allenhurstcleaners_v2"
   ```
4. **Deploy the application**: Run the deploy script to build and deploy the application to GitHub Pages:
   ```bash
   npm run deploy
   ```
