const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// Static route for pi-client index.html
app.use(express.static(path.join(__dirname, './pi-client/build')));

// API ROUTES

app.get("/test", (req, res) => {
    res.json({ message: "Hello from the PI_Server" });
});

// Home route to deliver pi-client/build/index.html
app.get('/', (req, res) => {
    res.status(200).send();
})

// Catch-all Route to deliver pi-client React App
app.get('/:pageCalled', (req, res) => {
    res.redirect('/');
});

// Error Handling (TBW)

app.listen(port, () => console.log(`PI_Server app listening on port ${port}`));