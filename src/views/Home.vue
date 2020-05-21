<template>
  <div class="container">
    <h1 class="title">Work description generator</h1>

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

      <textarea
        v-if="!getIsLoading"
        id="textarea"
        class="textarea"
        cols="50"
        rows="10"
        :value="getDescriptionArray(numberOfItems)"
        @click="copyText"
      ></textarea>
      <a-skeleton active v-else />
      <a-button @click="generateRandomDescription">Generate new description</a-button>
    </a-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selected: "qa",
      numberOfItems: 5
    };
  },
  methods: {
    generateRandomDescription() {
      localStorage.setItem("selected", this.selected);
      this.$store.dispatch("getDescriptions", this.selected);
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
    this.getSelectedItem();
    this.generateRandomDescription();
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
}
#textarea {
  margin-top: 0px;
  margin-bottom: 1rem;
  height: 130px;
  width: 100%;
  resize: vertical;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
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
.title {
  margin-top: 24px;
  margin-bottom: 60px;
}
</style>