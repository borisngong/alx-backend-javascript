interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

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
