export default function getStudentsByLocation(borod, city) {
  if (borod instanceof Array) {
    return borod.filter((boro) => boro.location === city);
  }
  return [];
}
