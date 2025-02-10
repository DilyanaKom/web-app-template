import express from 'express';
import handlebars from 'express-handlebars';
import homeController from './src/controllers/home-controller.js';

const app = express();

//Handlebars config
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
  runtimeOptions:{
        allowProtoPropertiesByDefault: true,
    },
    //TODO Add any needed helpers
    // helpers: {
    //     showRating: showRatingHelper,
    // }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');


//Express config
app.use('/static', express.static('src/public'));

app.use(homeController);


app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));