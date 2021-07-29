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
};
