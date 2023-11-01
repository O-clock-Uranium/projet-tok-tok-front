import advertsReducer from './adverts';
import messagerieReducer from './messagerie';
import profileReducer from './profile';
import publicationsReducer from './publications';
import userReducer from './user';

const reducer = {
  user: userReducer,
  publications: publicationsReducer,
  messagerie: messagerieReducer,
  adverts: advertsReducer,
  profile: profileReducer,
};

export default reducer;
