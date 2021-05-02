import { AnyAction } from 'redux';

interface ITodos {
  todos: string[];
}

const initialState = {
  todos: [],
};

export const todosReducer = (
  state: ITodos = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    default:
      return state;
  }
};
