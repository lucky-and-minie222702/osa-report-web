const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const app = express();

const frontend = (file) => {
	return path.join(__dirname, "frontend", file);
};

app.get("/", (req, res) => {
	res.sendFile(frontend("index.html"));
});

app.use(express.static("frontend"));

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
	console.log("SIGMA SKIBIDI");
});
