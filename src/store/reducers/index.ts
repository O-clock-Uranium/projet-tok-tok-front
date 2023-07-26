import advertsReducer from './adverts';
import messagerieReducer from './messagerie';
import publicationReducer from './publication';
import userReducer from './user';

const reducer = {
  messagerie: messagerieReducer,
  user: userReducer,
  adverts: advertsReducer,
  publication: publicationReducer,
};

export default reducer;
