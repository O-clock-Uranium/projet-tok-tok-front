/* eslint-disable import/prefer-default-export */
/*
  Une fonction qui prend en paramètre le state ou une portion de state
  et qui retourne une valeur (de tout type) calculée à partir de
  celui-ci est appelé un Sélecteur.
*/

/**
 * Retourne l'ID suivant à partir d'un tableau d'objets
 *
 * @param arr Un tableau d'objets
 * @returns un nouvel ID
 */
function getNextId(arr: { id: number }[]) {
  if (!arr.length) {
    // si je n'ai pas de message, je retourne 1
    return 1;
  }
  // je récupère l'id de tous mes objets
  const ids = arr.map((item) => item.id);
  // je récupère le plus grand
  const maxId = Math.max(...ids);

  // je retourne le plus + 1
  return maxId + 1;
}

export { getNextId };
