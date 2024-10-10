// Created Interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Array of students
const student1: Student = {
  firstName: "Boro",
  lastName: "Didier",
  age: 40,
  location: "Yde",
};

const student2: Student = {
  firstName: "Tim",
  lastName: "Antenne",
  age: 42,
  location: "Bda",
};

const studentsList: Student[] = [student1, student2];

// Render Table for Students
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
