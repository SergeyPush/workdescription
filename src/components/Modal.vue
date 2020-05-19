<template>
  <div>
    <a-button type="primary" icon="plus-circle" size="large" @click="showModal">Add description</a-button>
    <a-modal v-model="visible" title="Add description" on-ok="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
      </template>
      <template>
        <a-select class="select" :default-value="getSelected" @change="select">
          <a-select-option
            v-for="(option, index) in getOptions"
            :key="index"
            :value="option.value"
          >{{option.text}}</a-select-option>
        </a-select>
        <a-descriptions>
          <a-descriptions-item
            label="Info"
            class="info"
          >Add one or several descriptions, divided by Enter</a-descriptions-item>
        </a-descriptions>
        <a-textarea v-model="textarea" md-counter="500" :rows="4" placeholder="Add description(s)"></a-textarea>
      </template>
    </a-modal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      visible: false,
      textarea: "",
      selected: "qa"
    };
  },
  methods: {
    ...mapMutations(["select"]),
    ...mapActions(["addDescription"]),
    showModal() {
      this.visible = true;
    },
    handleOk() {
      if (!this.textarea.trim()) {
        this.visible = false;
        return;
      }
      this.loading = true;
      this.addDescription({
        items: this.textarea.trim().split(/\r\n|\r|\n/),
        selected: this.getSelected
      });

      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 200);
      this.textarea = "";
    },
    handleCancel() {
      this.visible = false;
    }
  },
  computed: {
    ...mapGetters(["getSelected", "getOptions"])
  }
};
</script>

<style lang="scss" scoped>
.select {
  margin-bottom: 20px;
  min-width: 100px;
  width: 200px;
}
</style>