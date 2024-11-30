export const initialState = [];

export const TODOACTIONS = {
  ADD: "ADD",
  TOGGLE_DONE: "TOGGLE",
  REMOVE: "REMOVE",
  INITIALIZE: "INITIALIZE",
  EDIT: "EDIT",
  DEFAULT: "",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TODOACTIONS.ADD: {
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    }
    case TODOACTIONS.TOGGLE_DONE: {
      return state.map((todo) =>
        action.payload != todo.id ? todo : { ...todo, done: !todo.done }
      );
    }
    case "REMOVE": {
      return state.filter((todo) => action.payload !== todo.id);
    }
    case TODOACTIONS.INITIALIZE: {
      return action.payload;
    }
    case TODOACTIONS.EDIT: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
        return todo;
      });
    }
    case TODOACTIONS.DEFAULT: {
      return state.map((todo) =>
        action.payload.id !== todo.id ? todo : action.payload
      );
    }
    default: {
      return state;
    }
  }
};
