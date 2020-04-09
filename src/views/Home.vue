<template>
  <div class="container">
    <a-page-header title="Work description generator" class="title" style="margin:auto" />

    <a-card :hoverable="true">
      <div class="selectors">
        <div class="column">
          <label class="label">Position</label>
          <a-select class="select" v-model="selected" @change="generateRandomDescription">
            <a-select-option
              v-for="(option, index) in options"
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

      <a-tooltip title="Click on textarea to copy to clipboard" placement="bottomRight">
        <a-textarea v-model="textarea" md-counter="500" id="textarea" @click="copyText" autoSize></a-textarea>
      </a-tooltip>

      <a-button @click="generateRandomDescription">Generate new description</a-button>
    </a-card>
  </div>
</template>

<script>
import data from "../assets/db.json";
import _ from "lodash";
export default {
  data() {
    return {
      data,
      textarea: "",
      selected: "qa",
      numberOfItems: 5,
      options: [
        { text: "QA", value: "qa" },
        { text: "Dev", value: "dev" }
      ]
    };
  },
  methods: {
    generateRandomDescription() {
      this.textarea = _.sampleSize(
        data[this.selected],
        this.numberOfItems
      ).join("\n");
    },
    copyText() {
      let copyText = document.getElementById("textarea");

      /* Select the text field */
      copyText.select();

      /* Copy the text inside the text field */
      document.execCommand("copy");
      this.$notification["info"]({
        message: "Copied to clipboard"
        // type: "success",
        // position: "top-right"
        // all other options
      });
    }
  },
  mounted() {
    this.generateRandomDescription();
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 60%;
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
</style>