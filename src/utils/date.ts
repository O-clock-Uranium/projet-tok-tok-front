export default function calculateTimeSpent(createdAt: number) {
  const today = new Date();
  const date = new Date(createdAt);
  const timeDifference = today.getTime() - date.getTime();

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} jour${days > 1 ? 's' : ''}`;
  }
  if (hours > 0) {
    return `${hours} heure${hours > 1 ? 's' : ''}`;
  }
  return `${minutes} minute${minutes > 1 ? 's' : ''}`;
}
