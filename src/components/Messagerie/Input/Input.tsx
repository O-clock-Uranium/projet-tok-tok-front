import { useState } from 'react';

/*
  Composant dédié au contrôle des champs de formulaire
  Mes besoins :
  - gérer ce champ avec React → `useState`
    - stratégie de lecture → `value`
    - stratégie d'écriture → `onChange`
  - identifier mon champ, récupérer sa valeur
    → attribut `name`
  - tous les autres attributs de mon champ
  passés en _props_ [Optionnel]
*/

/*
  je type mes props :
  - name est OBLIGATOIRE
  - je peux recevoir d'autres props dont je connais pas le type de la valeur
    par contre je sais que le nom de ses props est une chaîne de caractères
*/
interface InputProps {
  name: string;
  [prop: string]: unknown; // je pourrais avoir string, number, object, boolean
}

/*
  dans l'objet,
  - je veux rendre OBLIGATOIRE `name` → je l'affecte
  - le reste est optionnel et je ne sais pas à quoi ça ressemble
    → j'utilise le REST operator : `...others`
    > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
*/
function Input({ name, ...props }: InputProps) {
  const [value, setValue] = useState('');

  return (
    <input
      // identification du champ
      name={name}
      // lecture de l'état
      value={value}
      // modification de l'état
      onChange={(event) => setValue(event.target.value)}
      // je passe toutes mes _props_ pour les transformer
      // en attributs HTML de mon input
      {...props}
    />
  );
}

export default Input;
