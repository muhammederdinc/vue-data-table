<script>
import { mapActions, mapGetters } from 'vuex';
import VDataTable from './components/VDataTable.vue';
import VDialog from './components/VDialog.vue';

export default {
  name: 'App',
  components: {
    VDataTable,
    VDialog,
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
      isDialogVisible: false,
      selectedItem: {},
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
    editItem(selectedItem) {
      this.isDialogVisible = true;
      this.selectedItem = selectedItem;
    },
  },
};
</script>

<template>
  <div id="app">
    <v-data-table
      :headers="headers"
      :items="tableItems"
    >
      <template slot="item-actions" slot-scope="{ props }">
        <button
          v-text="'Edit'"
          class="btn btn--primary"
          @click="editItem(props.item)"
        />

        <button
          v-text="'Delete'"
          class="btn btn--error"
          @click="deleteTodo(props.item.id)"
        />
      </template>
    </v-data-table>

    <v-dialog
      v-if="isDialogVisible"
      :item="selectedItem"
      @close="isDialogVisible = false"
    >
    </v-dialog>
  </div>
</template>
