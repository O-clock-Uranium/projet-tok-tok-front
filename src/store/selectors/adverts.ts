/* eslint-disable import/prefer-default-export */
import { Advert } from '../../@types';

export function findAdvert(adverts: Advert[], searchedId: number) {
  const advert = adverts.find((testedAdvert) => {
    return testedAdvert.id === searchedId;
  });
  return advert;
}
