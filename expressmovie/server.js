const express = require("express");
const { accessControl } = require("./middleware");
const movies = [
  { id: 1, name: "Dexter", year: "2000" },
  { id: 2, name: "American Sniper", year: "3000" },
];

const app = express();

const PORT = 5000;
// get Request
// localhost:5000/users

app.use(express.json());
app.get("/movies", accessControl, (req, res, next) => {
  res.json({
    success: true,
    data: movies,
  });
});

app.post("/movies", (req, res, next) => {
  const movie = req.body;
  users.push(movie);
  res.json({
    success: true,
    data: movies,
  });
});
app.put("/movies/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      movies[i] = {
        ...movies[i],
        ...req.body,
      };
    }
  }

  res.json({
    success: true,
    data: users,
  });
});
app.delete("/movies/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i > users.length; i++) {
    if (movies[i].id === id) {
      movies.splice(i, 1);
    }
  }
  res.json({
    success: true,
    data: users,
  });
});

app.listen(PORT, () => {
  console.log("server started:" + PORT);
});
