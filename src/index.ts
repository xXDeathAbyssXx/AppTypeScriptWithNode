import express from 'express';
import dotenv from 'dotenv';
require("dotenv").config();

//Inits
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);


//Middlewares

//Static Files

//Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`);
});

////////////////////////////////////

/*
const user = process.env.USERDB;
    const pass = process.env.PASSWORDDB;
    mongoose.connect(
      `mongodb+srv://`+user+`:`+pass+
      `@cluster0.pmfuk.mongodb.net/Data?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => {
        console.log("\n");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
        console.log("[INFO]: Loading Mondodb....");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
        console.log("[INFO]: Ready MongoDB ✅");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
      }
    );
*/