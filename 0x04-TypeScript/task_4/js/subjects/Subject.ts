namespace Subjects {
  // Class representing a subject that can have an assigned teacher
  export class Subject {
    // Property to store the assigned teacher for the subject
    teacher: Subjects.Teacher;
    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher; // Assign the provided teacher to the property
    }
  }
}
