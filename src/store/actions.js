export default {
  fetchTodos({ commit }) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((todos) => commit('setTodos', todos));
  },
  fetchUsers({ commit }) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => commit('setUsers', users));
  },
  deleteTodo({ commit }, id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (response.status === 200) {
          commit('deleteTodo', id);
        }
      });
  },
};
