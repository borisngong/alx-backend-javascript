namespace Subjects {
  // Interface for Teacher with an optional property for Java teaching experience
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subjects.Subject {
    // Method to return requirements for the Java subject
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    // Method to determine the availability of a teacher based on their experience
    getAvailableTeacher(): string {
      // Check if a teacher is assigned and has teaching experience
      if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {
        return "No available teacher"; // Return if no teacher is available
      }
      return `Available Teacher: ${this.teacher.firstName}`; // Return teacher's first name if available
    }
  }
}
