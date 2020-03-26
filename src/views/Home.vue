<template>
  <div class="container">
    <div class="title">
      <span class="md-display-1">Work description generator</span>
    </div>
    <md-field>
      <md-select class="select" v-model="selected" @md-selected="generateRandomDescription">
        <md-option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
        >{{option.text}}</md-option>
      </md-select>
    </md-field>
    <md-field>
      <label>Click to copy in clipboard</label>
      <md-textarea v-model="textarea" md-counter="500" id="textarea" @click="copyText"></md-textarea>
    </md-field>
    <md-button @click="generateRandomDescription">Generate new description</md-button>
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
      options: [
        { text: "QA", value: "qa" },
        { text: "Dev", value: "dev" }
      ]
    };
  },
  methods: {
    generateRandomDescription() {
      this.textarea = _.sampleSize(data[this.selected], 5).join("\n");
    },
    copyText() {
      let copyText = document.getElementById("textarea");

      /* Select the text field */
      copyText.select();

      /* Copy the text inside the text field */
      document.execCommand("copy");
      this.$toast.open({
        message: "Copied to clipboard",
        type: "success",
        position: "top-right"
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
  margin-bottom: 0px;
  height: 130px;
}
.title {
  padding-bottom: 30px;
}
</style>