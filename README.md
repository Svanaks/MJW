Chatoodle
=========

This is a small/mini project where I'm implementing a Shared Canvas where the connected clients can collaboratively draw.

This project is hosted on heroku on the following URL:
[The Live App] (http://chatndraw.herokuapp.com/)

The technologies used are: Node.js, Express, Socket.io, Jade on the server side and jQuery and paper.js on the client side

The project is licensed under The MIT License


Directory Structure:
--------------------
```
.
├── LICENSE.txt
├── Procfile
├── README.md
├── app.js
├── package.json
├── public
│   ├── css
│   │   └── canvas_style.css
│   ├── js
│   │   ├── canvas.js
│   │   └── draw.js
│   ├── libs
│   │   └── paper-full.min.js
│   ├── res
│   │   ├── colorChooser.gif
│   │   └── transChooser.gif
│   └── templates
│       ├── canvas.jade
│       └── login.jade
└── src
    ├── canvas_server.js
    └── users.js
```
The `public/` folder contains the files that will be used by the app running on the client side. The folder `public/css/` stores the stylesheets, `public/js/` stores the Javascript codes that will be executed on the client, `public/libs/` stores the external Javascript libraries used in the front-end app. `public/res/` stores the images and/or other resources. `public/templates/` stores the Jade templates. The `src/` folder stores the Javascript codes that are run on the server. `app.js` is the main server file that will be run by the Node interpreter. `Procfile` is used to tell Heroku which script the Node interpreter should run. `LICENSE.txt` states the license used by this project. `package.json` lists the packages which can be used by npm to install all the dependencies.

Installing and Using
--------------------
1. You need to install Node and Git, and add the directory of binaries to your path.
2. Type into the console `git clone https://github.com/tanayseven/Real-Time-Shared-Canvas.git`.
2. Run the command `npm install` which will install all the needed packages.
3. Run the command `node app.js` which will display a port number on the console.
4. Type into your browser `localhost:5000` replace 5000 with the post number displayed on the console.
5. Run it in multiple browser windows to see the action happening in real time.
