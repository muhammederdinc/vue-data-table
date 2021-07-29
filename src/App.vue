<script>
import { mapActions, mapGetters } from 'vuex';
import VDataTable from './components/VDataTable.vue';

export default {
  name: 'App',
  components: {
    VDataTable,
  },
  data() {
    return {
      headers: [
        {
          id: 0,
          text: '#',
          value: 'id',
        },
        {
          id: 1,
          text: 'Title',
          value: 'title',
        },
        {
          id: 2,
          text: 'Assignee',
          value: 'user',
        },
        {
          id: 3,
          text: 'Status',
          value: 'completed',
        },
        {
          id: 4,
          text: 'Actions',
          value: 'actions',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['tableItems']),
  },
  mounted() {
    this.fetchTodos();
    this.fetchUsers();
  },
  methods: {
    ...mapActions(['fetchTodos', 'fetchUsers', 'deleteTodo']),
  },
};
</script>

<template>
  <div id="app">
    <v-data-table
      :headers="headers"
      :items="tableItems"
    >
      <template slot="actions">
        <button class="button__edit">Edit</button>
        <button
          v-text="'Delete'"
          class="button__delete"
          @click="deleteTodo(1)"
        />
      </template>
    </v-data-table>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button {
  &__edit {
    background-color: #2196F3;
    color: #fff;
  }

  &__delete {
    background-color: #F44336;
    color: #fff;
  }
}
</style>
