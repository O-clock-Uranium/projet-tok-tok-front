import advertsReducer from './adverts';
import messagerieReducer from './messagerie';
import userReducer from './user';

const reducer = {
  messagerie: messagerieReducer,
  user: userReducer,
  adverts: advertsReducer,
};

export default reducer;
