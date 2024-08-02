let express = require("express");
let app = express();
const PORT = 3000;

//Endpoint 1:
function generateProfileUrl(username) {
  return "https://github.com/" + username;
}
app.get("/github-profile", (req, res) => {
  let username = req.query.username;
  res.send(generateProfileUrl(username));
});

//Endpoint 2:
function generateCertificate(firstName, lastName, courseName) {
  return (
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName
  );
}
app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});

//Endpoint 3:
function calculateGrade(math, science, english) {
  let gradeInPercentage = ((math + science + english) / 300) * 100;
  let roundedPercentage = Math.round(gradeInPercentage);
  console.log(gradeInPercentage);
  console.log(roundedPercentage);
  return "Your grade in percentage is " + roundedPercentage.toString() + "%";
}
app.get("/grade", (req, res) => {
  let math = parseFloat(req.query.maths);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);
  res.send(calculateGrade(math, science, english));
});

//Endpoint 4:
function splitBill(billAmount, numberOfFriends) {
  let splitAmount = Math.round(billAmount / numberOfFriends);
  return "Each friend owes Rs." + splitAmount + " against the bill";
}
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  res.send(splitBill(billAmount, numberOfFriends));
});

//Endpoint 5:
function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = totalHours * hourlyWage;
  return "Your monthly salary is ₹" + monthlySalary;
}
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseInt(req.query.hourlyWage);
  res.send(calculateSalary(totalHours, hourlyWage));
});

app.listen(PORT, () => {
  console.log("The server is running on hht://localhost:", PORT);
});
