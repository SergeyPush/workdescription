<template>
  <div style="width: 100%">
    <div class="bage">
      <a-badge
        :count="getDescription.length"
        :number-style="{ backgroundColor: '#52c41a' }"
        style="{textAlign:'center'}"
        class="counter"
      />
    </div>
    <a-tabs
      tab-position="left"
      @prevClick="callback"
      @nextClick="callback"
      @change="callback"
      size="large"
      defaultActiveKey="qa"
    >
      <a-tab-pane
        v-for="(option) in getOptions"
        :key="option.value"
        :tab="option.text"
        :style="{textAlign:'left', display:'flex', flexDirection:'row', 'flex-wrap':'wrap' }"
        class="pane"
      >
        <p v-if="getDescription.length===0">No descriptions yet. Add it in section above</p>
        <div class="wrapper" v-if="!getIsLoading">
          <Item
            v-for="(item) in getDescription"
            :key="item.id"
            :item="item"
            :active="active"
          >{{item.text}}</Item>
        </div>
        <a-skeleton active v-else />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Item from "./Item";
import { mapGetters } from "vuex";

export default {
  components: { Item },
  data() {
    return {
      active: "qa"
    };
  },
  methods: {
    callback(val) {
      this.active = val;
      this.$store.dispatch("getDescriptions", val);
    }
  },
  computed: mapGetters(["getOptions", "getDescription", "getIsLoading"]),
  mounted() {
    this.$store.dispatch("getDescriptions", this.active);
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
.bage {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  min-height: 20px;
}
.counter {
  margin-left: auto;
  margin-right: auto;
}
</style>