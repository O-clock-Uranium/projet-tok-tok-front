import { RootState } from '..';

// eslint-disable-next-line import/prefer-default-export
export const getIsMine = (author: string) => (state: RootState) =>
  state.user.firstname === author;
