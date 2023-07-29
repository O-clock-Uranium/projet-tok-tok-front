
export const calculateTimeSpent = (createdAt: any) => {
   const today = new Date();
   console.log('today');
   console.log(today);

   console.log('createdAt');
   const date = new Date(createdAt)
   console.log(date);

   const r = Date.parse(today.toISOString()) - Date.parse(createdAt);
   const res = r / 1000 / 60 / 60;
   return `${Math.round(res)}h`
}



