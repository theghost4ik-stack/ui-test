<template>
  <div class="custom-dialog">
    <slot name="button"></slot>

    <div v-if="visible" class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-dialog {
  position: relative;
}

.dialog-content {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  z-index: 10;
  min-width: 100px;
  padding: 8px;
  color: #3c4b63;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transform: translateX(-50%);
  white-space: nowrap;
}
</style>