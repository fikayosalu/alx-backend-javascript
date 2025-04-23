export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((sum, obj) => sum + obj.id, 0);
}
