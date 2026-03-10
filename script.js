// Array of student objects
let students = [
{ name: "Ansh", marks: 85 },
{ name: "Yashu", marks: 90 }
];
// Function to display students
function displayStudents() {
let list = document.getElementById("studentList");
list.innerHTML = ""; // Clear old data
students.forEach(function(student) {
let li = document.createElement("li");
li.textContent = student.name + " - " + student.marks + "Marks";
list.appendChild(li);
});
}
// Function to add new student
function addStudent() {
let newStudent = { name: "New Student", marks: 75 };
students.push(newStudent);
displayStudents();
}
// Show data when page loads
displayStudents();