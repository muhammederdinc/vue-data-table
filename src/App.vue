<script>
import VDataTable from './components/VDataTable.vue';

export default {
  name: 'App',
  data() {
    return {
      headers: [
        {
          id: 0,
          name: 'Başlık 1',
        },
        {
          id: 1,
          name: 'Başlık 2',
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
    <VDataTable
      :headers="headers"
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
