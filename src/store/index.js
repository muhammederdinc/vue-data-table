import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    users: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
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
  },
  getters: {
    tableItems(state) {
      return state.todos.map((todo) => ({
        ...todo,
        completed: todo.completed ? 'Done' : 'In Progress',
        user: state.users.length ? state.users.find((user) => user.id === todo.userId).name : '',
      }));
    },
  },
});
