import createResource from 'redux-thunk-rest';

const userResource = createResource('user', {
  url: 'http://ribbiterapi.herokuapp.com/users',
});

// const reducer = combineReducers({
//   users: userResource.reducer,
// })

export default userResource;
