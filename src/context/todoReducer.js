export const initialState = [];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, {id: Date.now(), text: action.payload, done: false}];
    }
    case "TOGGLE":
      return state.map((todo) =>
        action.payload != todo.id ? todo : { ...todo, done: !todo.done }
      );
  }
  return state;
};