import express from "express";
import { hello } from "./src/hello";

const PORT = 3030;

const app = express();

//routes (or list of allowed requests)
app.get('/hello', (request,response)=>{
    response.send('Is it me you\'re looking for?');
});
app.get('/', (request, response) => {
    response.send("These are not the droids you're looking for.");
});
// below :person is a param that gets attached to the response
app.get('/hello:person', (request, response) => {
    const {person} = request.params; // here we extract person from the response
    response.send(`Hello ${person}`);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));

