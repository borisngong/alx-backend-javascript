// Interface defining methods for Director behavior
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Interface defining methods for Teacher behavior
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Class implementing Director behavior
export class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

// Class implementing Teacher behavior
export class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

// Function to create an employee based on salary
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher(); // Create a Teacher for low salary
  }
  return new Director(); // Create a Director otherwise
}

// Function to check if an employee is a Director
export function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

// Function to execute work tasks based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks(); // Execute director tasks
  }
  return (employee as Teacher).workTeacherTasks(); // Execute teacher tasks
}

// Type defining possible subjects
export type Subjects = "Math" | "History";

// Function to teach a class based on subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  if (todayClass === "History") {
    return "Teaching History";
  }
}
