# React Web Application Starter Kit

This is a starter kit for building web applications in React. The following features are configured:

- Redux for state management
- Linting using eslint for javascript and stylelint for css
- Webpack build process with a production build and local build with hot reloading using webpack-dev-server.
- Unit testing and code coverage with Jest
- Security vulnerability checking with Node Security Platform

## Get Started

1. **Install [Node 6](https://nodejs.org)**.
2. **Clone this repository.** - `git clone https://github.com/bschneier/react-starter-kit.git` or [download the zip](https://github.com/bschneier/react-starter-kit/archive/master.zip)
3. **Open a command prompt and navigate to the directory you just created.**
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start`<br/>
This will check all packages for any security vulnerabilities, lint all javscript and css files and run all unit tests before deploying a local instance of the application in webpack-dev-server with hot reloading.