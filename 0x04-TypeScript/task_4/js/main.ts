// Create instances of the Subjects class for C++, Java, and React.
export const cpp: Subjects.Cpp = new Subjects.Cpp(); // Creating a new C++ subject instance
export const java: Subjects.Java = new Subjects.Java(); // Creating a new Java subject instance
export const react: Subjects.React = new Subjects.React(); // Creating a new React subject instance

// Define a teacher for the C subject
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis', // First name of the teacher
  lastName: 'Ritchie', // Last name of the teacher
  experienceTeachingC: 10, // Number of years of experience teaching C
};

// Log information about the C++ subject
console.log('C++');
cpp.setTeacher = cTeacher; // Set the teacher for the C++ subject
console.log(cpp.getRequirements()); // Retrieve and log the requirements for C++
console.log(cpp.getAvailableTeacher()); // Retrieve and log the available teacher for C++

// Log information about the Java subject
console.log('Java');
java.setTeacher = cTeacher; // Set the teacher for the Java subject
console.log(java.getRequirements()); // Retrieve and log the requirements for Java
console.log(java.getAvailableTeacher()); // Retrieve and log the available teacher for Java

// Log information about the React subject
console.log('React');
react.setTeacher = cTeacher; // Set the teacher for the React subject
console.log(react.getRequirements()); // Retrieve and log the requirements for React
console.log(react.getAvailableTeacher()); // Retrieve and log the available teacher for React

