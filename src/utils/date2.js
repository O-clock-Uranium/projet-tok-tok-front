export default function formatDate(dateStr) {
  const date = new Date(dateStr);
  // Fonction pour ajouter un zéro devant un nombre si celui-ci est inférieur à 10
  const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

  const day = addLeadingZero(date.getDate());
  const month = addLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());

  return `${day}-${month}-${year} à ${hours}h${minutes}min`;
}

// const originalDate = '2023-08-01T17:42:46.962Z';
// const formattedDate = formatDate(originalDate);

// console.log(formattedDate); // Output: "01-08-2023 17h42min"
