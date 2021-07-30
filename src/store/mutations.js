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
  updateTodo(state, formData) {
    state.todos = state.todos.map((todo) => {
      if (todo.id === formData.id) return formData;

      return todo;
    });
  },
};
