# PERN-Project-Template
Template for PERN Project ( Postgres + Nodejs + Reactjs )
Using Vite
## Download the Github Zip file and extract it in your project folder
Now run this cmds to install all the dependencies!

```bash
cd server
npm install
nodemon index
```

```bash
cd client
npm install
npm run dev
```
```bash
For Database, change the db.js file(in server folder) with your database Credentials.
 ```
## Happy Coding !
## Happy Coding !
## Happy Coding !

## Also If You Want to manually Create then follow the below steps [optional]
### Server :
Create a folder "server" ,then open your terminal , and follow the steps below one by one.
```bash
cd server
npm init
```
And keep pressing 'enter' until it asks for 'yes' , then type 'yes' and press 'enter'.Now in the terminal,paste these one by one.
```bash
npm i express pg cors
npm i nodemon
touch index.js
write given copy and paste my code of that file, with a PORT number.
```
Now paste this `nodemon index` in terminal to start the server .


### Client :
```bash
npm create vite@latest client
cd client
npm install
npm run dev
```

###  To preview md Files by keyboard , press `"Ctrl + Shift + V"`
## To expose your localhost of client
```bash
npm run dev -- --host
```