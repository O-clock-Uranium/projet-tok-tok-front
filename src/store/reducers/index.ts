import advertsReducer from './adverts';
import messagerieReducer from './messagerie';
import profileReducer from './profile';
import publicationsReducer from './publications';
import userReducer from './user';

const reducer = {
  messagerie: messagerieReducer,
  user: userReducer,
  adverts: advertsReducer,
  publications: publicationsReducer,
  profile: profileReducer,
};

export default reducer;
