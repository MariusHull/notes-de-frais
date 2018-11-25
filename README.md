# notes-de-frais
DTY Spring 2019 exercice for upgrading dev skills.
App language is french. Source code and documentation language is english.



## Choices of technologies
This web app will be developped using HTML5 and CSS3. The corresponding stack is the MEAN stack.

The frameworks chosen are respectively Angular JS and Bootstrap CSS for the front client.
For the back, I used Node.JS, as well as Express.JS and Mongoose with MongoDB for the database. The authentication is handled throught Passport.JS and a local strategy defined with mongoose, that protects the endpoints of the API.


## Application start-up : 
To run this app, once you've gotten all off the files : (be sure that mongoDB is running with the command "$mongod")
1. Open a terminal and go to the folder of the appliaction : `$cd notes-de-frais/`.
2. If it is the first time you run the application, you have to import the fisrt base of users implemented to tests needs. Everything is included in the file users.json, which is in the notes-de-frais folder. To install it, just run : `$mongoimport --db NDF --collection users --file users.json`
3. Go to the NDF/ folder with command : `$cd NDF/`
4. Run the command `$npm install`
5. Run the command `$ng serve --open`
6. Open another instance of terminal and go to the folder NDFback/ with command `$cd notes-de-frais/NDFback/`
7. Run the command `$npm start`
8. Open your browser and navigate to the adress : [http://localhost:4200/home](http://localhost:4200/home)
