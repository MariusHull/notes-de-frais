# notes-de-frais
Exercice de montée en compétences DTY Spring 2019

***


## Choices of technologies
This web app will be developped using HTML5 and CSS3. The corresponding stack is the MEAN stack.

The frameworks chosen are respectively Angular JS and Bootstrap CSS for the front client.
For the back, I used Node.JS, as well as Express.JS and Mongoose with MongoDB for the database. The authentication is handled throught Passport.JS and a local strategy defined with mongoose, that protects the endpoints of the API.


## Application start-up : 
To run this app, once you've gotten all off the files : (be sure that mongoDB is running with the command "$mongod")
1. Go to the NDF/ folder with command : `cd notes-de-frais/NDF/`
2. Run the command `$ng serve --open`
3. Open another instance of terminal and go to the folder NDFback/ with command `cd notes-de-frais/NDFback/`
4. Run the command `$npm start`
5. Open your browser and navigate to the adress : [http://localhost:4200/home](http://localhost:4200/home)



