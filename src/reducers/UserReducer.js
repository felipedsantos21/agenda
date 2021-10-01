const initialState = {
  name: 'Felipe Duarte',
  orInfoUser: 0
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name }
      break;

    case 'SET_ORINFOUSUARIO':
      return { ...state, orInfoUser: action.payload.orInfoUser }
      break;

    default:
      break;
  }

  return state;
}

export default UserReducer;