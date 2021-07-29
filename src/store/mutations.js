export default {
  setTodos(state, todos) {
    state.todos = todos;
  },
  setUsers(state, users) {
    state.users = users;
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};
