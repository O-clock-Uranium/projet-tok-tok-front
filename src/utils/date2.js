export default function formatDate(dateBDD) {
  const date = new Date(dateBDD);
  // Fonction pour ajouter un zéro devant un nombre si celui-ci est inférieur à 10
  const addZero = (num) => (num < 10 ? `0${num}` : num);

  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = addZero(date.getHours() + 2);
  const minutes = addZero(date.getMinutes());

  return `${day}-${month}-${year} à ${hours}h${minutes}min`;
}

// const originalDate = '2023-08-01T17:42:46.962Z';
// const formattedDate = formatDate(originalDate);

// console.log(formattedDate); // Output: "01-08-2023 17h42min"
