const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/events", (req, res) => {
  res.json([
    { id: 1, name: "Tech Workshop", date: "20 Aug" },
    { id: 2, name: "Music Fest", date: "25 Aug" },
    { id: 3, name: "Startup Meetup", date: "30 Aug" }
  ]);
});

app.post("/register", (req, res) => {
  res.json({
    message: "Registered successfully",
    ticketId: "TICKET123"
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
