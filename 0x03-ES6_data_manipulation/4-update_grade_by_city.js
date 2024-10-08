export default function updateStudentGradeByCity(borod, city, newGrades) {
  return borod.filter((boro) => boro == city);
}
