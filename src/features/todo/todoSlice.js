import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.filter((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      if (id) {
        state.todos = state.todos.filter((todo) => todo.id !== id);
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer
