export default function getNextId(arr: { id: number }[]) {
  if (!arr.length) {
    return 1;
  }
  const ids = arr.map((item) => item.id);
  const maxId = Math.max(...ids);

  return maxId + 1;
}
