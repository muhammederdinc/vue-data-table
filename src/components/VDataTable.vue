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
            <slot :name="value">
             {{ item[value] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <button
      :disabled="page === 1"
      @click="page--"
    >
      Prev
    </button>

    <button
      v-for="item in itemsPerPage" :key="item"
      :style="page === item ? 'background-color: #1976D2' : ''"
      @click="page = item"
    >
      {{ item }}
    </button>

    <button
      :disabled="page === itemsPerPage"
      @click="page++"
    >
      Next
    </button>
  </div>
</template>

<style lang="scss" scoped>
$SiteBackgroundColor: #f8f8f8;
$TableHeaderColor: #3998b8;
$DefaultGrayColor: #b1b1b1;
$White: #fff;

$BreakWidth: 615px;

table {
  border-collapse: collapse;
  margin: 10px auto;
  width: 75%;
}

tr {
  align-items: center;
  background: $White;
  border-radius: 2px;
  box-shadow: 0 0 3px $DefaultGrayColor;
  display: flex;
  flex-direction: row;
  margin-bottom: 0px;
  th {
    background: $TableHeaderColor;
    color: $SiteBackgroundColor;
    font-weight: bold;
    white-space: nowrap;
  }
  td,
  th {
    display: table-cell;
    padding: 15px;
    text-align: center;
    vertical-align: middle;
    width: 100%;
  }
}

@media (max-width: $BreakWidth) {
  table {
    border-top: 3px solid $TableHeaderColor;
    width: 100%;
  }
  thead{
    display: none;
  }
  tr {
    flex-flow: row wrap;
    padding: 10px;
    td {
      font-size: 17px;
      padding: 5px;
      width: 30%;
    }
  }
}

button {
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
}
</style>
