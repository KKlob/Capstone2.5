const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, './pi-client/build')));

app.get("/test", (req, res) => {
    res.json({ message: "Hello from the PI_Server" });
});

// Catch-all Route to deliver pi-client React App
app.get("*", (req, res) => {
    res.send();
});

app.listen(port, () => console.log(`PI_Server app listening on port ${port}`));