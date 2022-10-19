const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/test", (req, res) => {
    res.json({ message: "Hello from the PI_Server" });
})

app.listen(port, () => console.log(`PI_Server app listening on port ${port}`));