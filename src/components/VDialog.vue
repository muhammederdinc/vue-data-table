<script>
import { mapActions } from 'vuex';

export default {
  name: 'VDialog',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formData: {},
    };
  },
  mounted() {
    const { completed, ...item } = this.item;

    this.formData = {
      ...item,
      completed: completed === 'Done',
    };
  },
  methods: {
    ...mapActions(['updateTodo']),
    submit() {
      const { completed, ...item } = this.formData;

      const params = {
        completed: completed ? 'Done' : 'In Progress',
        ...item,
      };

      this.updateTodo(params)
        .then(() => {
          this.$emit('close');
        });
    },
  },
};
</script>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            Edit Item
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <input v-model="formData.title" class="input" type="text">

            <br />

            <input v-model="formData.completed" type="checkbox">
            <label>Completed</label>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              v-text="'Save'"
              class="btn btn--primary modal-default-button"
              @click="submit"
            />

            <button
              v-text="'Close'"
              class="btn btn--error modal-default-button"
              @click="$emit('close')"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  padding-bottom: 26px;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
