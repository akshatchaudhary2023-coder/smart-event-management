<!DOCTYPE html>
<html>
<head>
  <title>SEMS</title>
  <style>
    body {
      font-family: Arial;
      margin: 0;
      background: #f5f5f5;
    }

    .navbar {
      background: #2563EB;
      color: white;
      padding: 15px;
      font-size: 18px;
      text-align: center;
    }

    h2 {
      text-align: center;
      margin-top: 20px;
    }

    .container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .card {
      background: white;
      border-radius: 10px;
      padding: 15px;
      margin: 15px;
      width: 220px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    button {
      background: #2563EB;
      color: white;
      padding: 8px 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background: #1d4ed8;
    }
  </style>
</head>

<body>

<div class="navbar">
  Smart Event Management System
</div>

<h2>Upcoming Events</h2>

<div class="container" id="events"></div>

<script>
fetch("http://127.0.0.1:3000/events")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("events");
    data.forEach(event => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <button onclick="register()">Register</button>
      `;
      container.appendChild(div);
    });
  });

function register() {
  fetch("http://127.0.0.1:3000/register", {
    method: "POST"
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ " + data.message);
  });
}
</script>

</body>
</html>
