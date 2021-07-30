<script>
export default {
  name: 'VDataTable',
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    dataPerPage() {
      const pageSize = 10;

      return [
        ...this.items.slice((this.page - 1) * pageSize, this.page * pageSize),
      ];
    },
    itemsPerPage() {
      return parseInt(this.items.length / 10, 10);
    },
  },
};
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th
            v-for="{ id, text } in headers"
            v-text="text"
            :key="id"
          />
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item) in dataPerPage" :key="item.id">
          <td v-for="{ value } in headers" :key="value">
            <slot
              :name="value"
              :props="{ item }"
            >
             {{ item[value] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <button
      :disabled="page === 1"
      class="btn"
      @click="page--"
    >
      Prev
    </button>

    <button
      v-for="item in itemsPerPage" :key="item"
      :class="page === item ? 'btn btn-primary' : 'btn'"
      @click="page = item"
    >
      {{ item }}
    </button>

    <button
      :disabled="page === itemsPerPage"
      class="btn"
      @click="page++"
    >
      Next
    </button>
  </div>
</template>
