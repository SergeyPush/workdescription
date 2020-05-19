<template>
  <div>
    <h1 class="title">Descriptions</h1>
    <AddDescription></AddDescription>
  </div>
</template>

<script>
import AddDescription from "../components/AddDescription";
export default {
  components: {
    AddDescription
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 24px;
  margin-bottom: 0;
}
</style>