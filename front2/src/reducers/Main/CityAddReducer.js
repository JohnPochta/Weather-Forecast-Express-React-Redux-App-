const initialState = {
	cA : 0
};

export default function Info(state = initialState, action) {
  if (action.type === 'CityAdded'){
    return{
    	...state, cA : !(state.cA)
    };
  }
  return state;
};