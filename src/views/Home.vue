<template>
  <div class="container">
    <a-page-header title="Work description generator" class="title" style="margin:auto" />

    <a-card :hoverable="false" class="card">
      <div class="selectors">
        <div class="column">
          <label class="label">Position</label>
          <a-select class="select" v-model="selected" @change="generateRandomDescription">
            <a-select-option
              v-for="(option, index) in getOptions"
              :key="index"
              :value="option.value"
            >{{option.text}}</a-select-option>
          </a-select>
        </div>
        <div class="column">
          <label class="label">Number of items</label>
          <a-input-number
            :min="1"
            :max="6"
            :defaultValue="5"
            @change="generateRandomDescription"
            v-model="numberOfItems"
          />
        </div>
      </div>

      <a-descriptions>
        <a-descriptions-item
          label="Info"
          class="info"
        >In order to copy description click on textarea below</a-descriptions-item>
      </a-descriptions>

      <a-textarea
        v-model="textarea"
        v-if="!getIsLoading"
        md-counter="500"
        id="textarea"
        @click="copyText"
        autoSize
      ></a-textarea>
      <a-skeleton active v-else />

      <a-button @click="generateRandomDescription">Generate new description</a-button>
    </a-card>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      textarea: "",
      selected: "qa",
      numberOfItems: 5
    };
  },
  methods: {
    generateRandomDescription() {
      // localStorage.setItem("selected", this.selected);

      this.$store.dispatch("getDescriptions", this.selected);
      setTimeout(() => {
        this.textarea = _.sampleSize(
          this.getDescriptionArray,
          this.numberOfItems
        ).join("\n");
      }, 300);
    },
    copyText() {
      let copyText = document.getElementById("textarea");
      copyText.select();
      document.execCommand("copy");
      this.$notification["info"]({
        message: "Copied to clipboard"
      });
    },
    getSelectedItem() {
      const selected = localStorage.getItem("selected");
      if (selected) {
        this.selected = selected;
      }
    }
  },
  computed: {
    ...mapGetters([
      "getOptions",
      "getDescriptionArray",
      "getDescription",
      "getIsLoading"
    ])
  },
  mounted() {
    this.generateRandomDescription();
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
}
#textarea {
  margin-top: 0px;
  margin-bottom: 1rem;
  height: 130px;
}
.column {
  width: 50%;
}
.select {
  width: 70%;
}
.selectors {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
.label {
  margin-right: 5px;
  font-weight: bold;
}
.card {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>