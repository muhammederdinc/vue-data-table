<script>
export default {
  name: 'VDataTable',
  props: {
    headers: {
      type: Array,
      default: () => [],
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
            v-for="{ id, name } in headers"
            v-text="name"
            :key="id"
          />
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>

        <tr>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </table>
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
</style>
