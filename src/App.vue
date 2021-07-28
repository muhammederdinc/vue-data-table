<script>
import VDataTable from './components/VDataTable.vue';

export default {
  name: 'App',
  data() {
    return {
      headers: [
        {
          id: 0,
          name: '#',
        },
        {
          id: 0,
          name: 'Başlık 1',
        },
        {
          id: 1,
          name: 'Başlık 2',
        },
      ],
      items: [
        {
          id: 0,
          name: 'Öğe 1',
          name2: 'Test',
        },
        {
          id: 1,
          name: 'Öğe 2',
          name2: 'Test',
        },
        {
          id: 2,
          name: 'Öğe 3',
          name2: 'Test',
        },
      ],
    };
  },
  components: {
    VDataTable,
  },
};
</script>

<template>
  <div id="app">
    <v-data-table
      :headers="headers"
      :items="items"
    />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
