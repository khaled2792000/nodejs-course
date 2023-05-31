const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create the Express app
const app = express();

// allow cross-origin requests from localhost:5500
app.use(
  cors({
    origin: "*",
  })
);
// subscribe middleware to parse the request body into JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory data store
const store = {};

// GET all store keys
app.get("/store", (req, res) => {
  res.json(Object.keys(store));
});

// GET endpoint to retrieve a value from the store
app.get("/store/:key", (req, res) => {
  const key = req.params.key;
  const value = store[key];
  if (value) {
    res.json({ key, value });
  } else {
    res.status(404).json({ error: "Key not found" });
  }
});

// POST endpoint to store a value in the store
app.post("/store", (req, res) => {
  console.log(req.body);
  const { key, value } = req.body;

  try {
    store[key] = json.parse(value);
  } catch (error) {
    store[key] = value;
  }

  res.json({ key, value });
});

// DELETE endpoint to remove a value from the store
app.delete("/store/:key", (req, res) => {
  const key = req.params.key;
  if (store[key]) {
    delete store[key];
    res.json({ message: "Key deleted successfully" });
  } else {
    res.status(404).json({ error: "Key not found" });
  }
});

// Start the server
app.listen(3100, () => {
  console.log("Server is running on port 3100");
});
