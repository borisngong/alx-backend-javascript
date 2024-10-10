namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number; // Optional property for teacher's experience
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      // Check if a teacher is available and has experience
      if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
