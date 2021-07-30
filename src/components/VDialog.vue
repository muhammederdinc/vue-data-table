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
      this.updateTodo(this.formData)
        .then(() => {
          this.$emit('close');
        });
    },
  },
};
</script>

<template>
  <div class="v-dialog">
    <div class="v-dialog-wrapper">
      <div class="v-dialog-container">
        <div class="v-dialog-header">
          <slot name="header">
            Edit Todo
          </slot>
        </div>

        <div class="v-dialog-body">
          <slot name="body">
            <div class="v-dialog-form">
              <input v-model="formData.title" class="input" type="text">

              <br />

              <input v-model="formData.completed" type="checkbox">
              <label>Completed</label>
            </div>
          </slot>
        </div>

        <div class="v-dialog-footer">
          <slot name="footer">
            <button
              v-text="'Close'"
              class="btn btn--error"
              @click="$emit('close')"
            />

            <button
              v-text="'Save'"
              class="btn btn--primary"
              @click="submit"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
