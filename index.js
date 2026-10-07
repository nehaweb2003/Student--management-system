const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/home', (req, res) => {
  res.render('home');
});
// create a route to handle the form submission
app.post("/students", async (req, res) => {
const newStudent = new Student({
  name: req.body.name,
  email: req.body.email,
  phone: req.body.phone,
  course: req.body.course
});
await newStudent.save();
res.send("Student added successfully");
});

//read students
app.get("/students",async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

//update student
app.put("/students/:id",async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id,res.body)
  res.send("Student updated successfully");

});

//delete student
app.delete("/students/:id",async (req, res) => {
  await Student.findByIdAndDelete(req.params.id)
  res.send("Student deleted successfully");
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
