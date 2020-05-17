<template>
  <div>
    <a-menu mode="horizontal" v-model="current">
      <a-menu-item key="home">
        <router-link to="/" exact active-class>
          <a-icon type="form" />Generate
        </router-link>
      </a-menu-item>
      <a-menu-item key="descriptions">
        <router-link to="/description" exact active-class>
          <a-icon type="setting" />Descriptions
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["home"]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>