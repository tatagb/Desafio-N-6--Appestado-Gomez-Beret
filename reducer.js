const initialState = {
    contador: 0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUMAR_CONTADOR':
        return { ...state, contador: state.contador + 1 };
      case 'RESTAR_CONTADOR':
        return { ...state, contador: state.contador - 1 };
      default:
        return state;
    }
  };
  
  export default reducer;
  