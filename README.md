# Task-Surge

PROJECT STATUS : NOT FULLY COMPLETED
(First of all I need to inform that our final year exams And viva immediately announced to be held in next week monday(August 01st).
So I did the assignment within just two days.I complete what I able to do within these 2 days.
So when reviewing please consider about this situation also madam/sir.Because this is one of my big dream to get a working experience with Surge Global.

TECHNOLOGIES USED :
IDE:VS Code
FRONTEND : ReactJS,TailwindCSS
BACKEND  : NodeJS
DATABASE : MongoDB

METHOD :

STEP (01) 
      01) first I start to create backend by installing following npm dependencies which need to connect with database and so on.
         -mongoose,cors,express,bodyparser,dotenv,joi
     02)  Installrd mongodb successfully and got the MONGODB_URL 
     03) And after that create Server.js file to implement connection between backend and database
         Test backend using the command node server.js later used nodemon for ease(therefore no need to start server again and again)
     04)created .env file
     05)After that create model folder.Inside model folder create files including all attributes we need for the application in separate files.
     06)Next created Routes folder(files inside this created routes for frontend because this is the way we can call to backend)
      from frontend)Here Using routes through models we can access the database.
     07)import routes to server.js
     
STEP 02)Before creating the frontend we need to check whether routes are working properly on the port.
        Installed Postman and create a collection for the application and test routes using HTTP methods(POST,GET,PUT, etc)
        
STEP 03)Start to create frontend using reactjs and styling using tailwindCSS.Used following command to create react app
        (npx create-react-app frontend)
