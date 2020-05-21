<template>
  <div class="item" id="item">
    <span>{{item.text}}</span>
    <a-button
      type="danger"
      icon="delete"
      @click="handleRemove"
      :loading="isLoading"
      class="button"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item", "active"],
  methods: {
    ...mapActions(["removeDescription"]),
    handleRemove() {
      this.isLoading = true;
      this.removeDescription({ id: this.item.id, selected: this.active });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  },
  data() {
    return {
      isLoading: false
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: block;
  padding: 10px 10px 10px 15px;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  transition: box-shadow 0.1s linear;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(52, 47, 51, 0.63);
  }
}

.item:hover .button {
  display: inline;
}
.button {
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  transition: all 0.5s ease-in;
}

.button:hover {
  background-color: red;
}
</style>