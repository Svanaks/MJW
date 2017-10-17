MJW
=========

This is a school group project where I'm implementing a Shared Canvas where the connected clients can collaboratively draw.

The technologies used are: Node.js, Express, Socket.io Jade on the server side and jQuery, uikit and paper.js on the client side.

This project will grow and change and we will probably add technologies (mongodb, passportJs, mongoose...) and change directory structure (we will need to adapt to our db models and we need to clean the public folder, it's a mess).


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
The bowerrc file at the root is the bower configuration file, we set the folder in which we want to install bower components (here public folder).

The `public/` folder contains the files that will be used by the app running on the client side. The folder `public/css/` stores the stylesheets, `public/js/` stores the Javascript codes that will be executed on the client, `public/libs/` stores the external Javascript libraries used in the front-end app. `public/res/` stores the images and/or other resources. `public/templates/` stores the Jade templates and finaly `public/bower_components/` stores uikit, that will be installed with bower. The `src/` folder stores the Javascript codes that are run on the server. `app.js` is the main server file that will be run by the Node interpreter. `package.json` lists the packages which can be used by npm to install all the dependencies.

Installing and Using
--------------------
1. You need to install Node and Git, and add the directory of binaries to your path.
2. You also need to have bower installed.
3. Type into the console `git clone https://github.com/Svanaks/MJW.git`.
4. Run the command `npm install` which will install all the needed packages.
5. Run the command `bower install uikit` which will create a bower_components folder in the public folder with uikit files in it.
6. Run the command `node app.js` which will display a port number on the console.
7. Type into your browser `localhost:5000` replace 5000 with the post number displayed on the console.
8. Run it in multiple browser windows to see the action happening in real time.
