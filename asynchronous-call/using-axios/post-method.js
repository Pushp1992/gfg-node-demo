const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 7000;

app.use(express.json());

// axios logic starts here

/** POST method will get sucess with warning about url */
app.get("/create-post", (req, res) => {
	axios.post("posts", {
		title: "Foo",
		body: "bar",
		userID: 1
	})
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

// axios logic ends here

app.listen(PORT, () => {
    console.log(`your axios POST server is running on PORT: ${PORT}`)
});
