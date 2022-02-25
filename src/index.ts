import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import dotenv from 'dotenv';
require("dotenv").config();

//Importing Routes
import IndexRoutes from './routes'

//Inits
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'layouts'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/block', IndexRoutes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

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