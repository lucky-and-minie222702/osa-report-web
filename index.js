const express = require("express");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const app = express();

const frontend = (file) => {
	return path.join(__dirname, "frontend", file);
};

app.get("/", (req, res) => {
	res.sendFile(frontend("index.html"));
});

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		const filePath = path.join("uploads", file.originalname);

		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
		}

		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
	if (!req.file) {
		return res.status(400).send("No file uploaded.");
	}

	if (!req.pass != process.env.pass) {
		return res.status(400).send("Wrong password");
	}

	const filePath = `/uploads/${req.file.filename}`;
	res.send({ filePath });
});

app.use("/uploads", express.static("uploads"));

app.use(express.static("frontend"));

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
	console.log(`SIGMA SKIBIDI listening on port ${PORT}`);
});
