export const calculateTimeSpent = (createdAt: any) => {
  const today = new Date();

  const date = new Date(createdAt);

  const r = Date.parse(today.toISOString()) - Date.parse(createdAt);
  const res = r / 1000 / 60 / 60;
  return `${Math.round(res)}h`;
};
