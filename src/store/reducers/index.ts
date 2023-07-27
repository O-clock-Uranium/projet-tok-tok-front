import advertsReducer from './adverts';
import messagerieReducer from './messagerie';
import publicationsReducer from './publications';
import userReducer from './user';

const reducer = {
  messagerie: messagerieReducer,
  user: userReducer,
  adverts: advertsReducer,
  publications: publicationsReducer,
};

export default reducer;
