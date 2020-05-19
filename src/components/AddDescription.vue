<template>
  <div>
    <a-layout-content
      :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '80px' }"
    >
      <Modal></Modal>
    </a-layout-content>
    <a-layout-content
      :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight:'300px' }"
    >
      <DescriptionList></DescriptionList>
    </a-layout-content>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import DescriptionList from "./DescriptionList";
export default {
  components: { Modal, DescriptionList }
};
</script>

<style lang="scss" scoped>
</style>