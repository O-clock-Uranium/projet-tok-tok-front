/* eslint-disable import/prefer-default-export */
import { Advert } from '../../@types';

export function findAdvert(adverts: Advert[], searchedSlug: string) {
  const advert = adverts.find((testedAdvert) => {
    return testedAdvert.slug === searchedSlug;
  });
  return advert;
}
