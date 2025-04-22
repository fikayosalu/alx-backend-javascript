export default function getListStudentIds(studentarr) {
  if (!Array.isArray(studentarr)) {
    return [];
  }
  return studentarr.map((obj) => obj.id);
}
