# vue-data-table
This project https://jsonplaceholder.typicode.com/ is a vue project that displays data from API endpoints in a table structure. VDataTable and VDialog components were created in the project. No ready-made UI library was used for the UI.

## Issues
* Sorting table data
* Making the VDialog component public currently functions to update the VDialog component to-do list.
* Adding loading to the table
* Displaying transaction successful or unsuccessful feedback to the user

## Components

### VDataTable
* The VDataTable component was created to list simple data.

### Props

| Name | Description |
| ---------- | -------- |
| items | The array of items to display |
| headers | Array of header items to display |

### Slots

| Name | Description |
| ---------- | -------- |
| header-{name} | Slot to customize a specific header column |
| item-{name} | Slot to customize a specific item columy |


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
