<template>
  <div>
    <a-menu mode="horizontal" v-model="current">
      <a-menu-item key="home">
        <router-link :to="{name:'home'}" active-class>
          <a-icon type="form" />Generate
        </router-link>
      </a-menu-item>
      <a-menu-item key="description">
        <router-link :to="{name:'description'}" active-class>
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
      current: [`${this.$route.name || window.location.pathname.slice(1)}`]
    };
  },
  computed: {
    getName() {
      return this.$router.currentRoute.name;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>