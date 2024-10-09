export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // firstly Filter by city
    .map((student) => {
      // secomdly Map over filtered students
      // thirdly the grade for the current student from newGrades
      const studentGrade = newGrades.find(
        (grade) => grade.studentId === student.id
      );

      // finally return the student object with the grade (if found) or 'N/A'
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : "N/A",
      };
    });
}
