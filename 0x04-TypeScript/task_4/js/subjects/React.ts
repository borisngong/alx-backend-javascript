namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number; // Optional property for React teaching experience
  }

  export class React extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React"; // Method to return React requirements
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
        return "No available teacher"; // Check for teacher availability
      }
      return `Available Teacher: ${this.teacher.firstName}`; // Return teacher's first name if available
    }
  }
}
