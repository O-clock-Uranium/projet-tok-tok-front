import { RootState } from '..';

// eslint-disable-next-line import/prefer-default-export
export const getIsMine = (authorId: number) => (state: RootState) =>
  state.user.id === authorId;
