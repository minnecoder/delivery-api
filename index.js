const express = require("express");
const notes = require("./routes/notes");
const dashboard = require("./routes/dashboard");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/notes", notes);
app.use("/dashboard", dashboard);
app.use("/scanner", scanner);

app.listen(port, () => console.log(`Server is running on port ${port}`));
