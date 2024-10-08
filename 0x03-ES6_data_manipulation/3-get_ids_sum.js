export default function getStudentIdsSum(students) {
  return students.reduce((sum, current) => sum + current.id, 0);
}
