const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const { mongoDbString } = require('./config/c');

const PORT = 3000;

const pageRoutes = require('./routes/pagesRoutes');
const ownersRoutes = require('./routes/ownersRoutes');
const blogRoutes = require('./routes/blogRoutes');
const apiRoutes = require('./routes/api/apiRoutes');

// mongoos prisijungimas
mongoose
  .connect(mongoDbString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('connected');
    app.listen(PORT);
  })
  .catch((err) => console.error(err.message));

// register view engine
app.set('view engine', 'ejs');
// nustatom render view home dir
app.set('views', 'src/views');

// for req.body to work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes use
app.use('/', pageRoutes);
app.use('/owners', ownersRoutes);
app.use('/blog', blogRoutes);

const staticPath = path.join(__dirname, 'static');
// statine direktorija, css, js, img ir kt statiniam failam
app.use(express.static(staticPath));

// isitraukti api routes ir panaudoti cia kad veiktu
app.use('/api/blog', apiRoutes);
// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));
