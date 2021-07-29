export default {
  tableItems(state) {
    return state.todos.map((todo) => ({
      ...todo,
      completed: todo.completed ? 'Done' : 'In Progress',
      user: state.users.length ? state.users.find((user) => user.id === todo.userId).name : '',
    }));
  },
};
