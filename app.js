const express = require('express');
const hello = require("./routes/hello");
const form = require("./routes/form");
const formdata = require("./routes/formdata");
const jsondata = require("./routes/jsondata");

const app = express();

const port = process.env.PORT || 3000;


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", hello);
app.use("/form", form);
app.use("/formdata", formdata);
app.use("/jsondata", jsondata);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
