import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

const app = express();
const PORT = 3000;

// bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// serving static files
// app.use(express.static('public'))

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);