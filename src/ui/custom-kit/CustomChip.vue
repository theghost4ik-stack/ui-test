<template>
  <span class="custom-chip" :class="variant">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'CustomChip',
  props: {
    variant: { type: String, default: 'success' }
  }
};
</script>

<style lang="scss" scoped>
.custom-chip {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;

  &.success { 
    background-color: #dcfce7; color: #159a4a; 
  }
  &.warning { 
    background-color: #fef3c7; color: #e3c117; 
  }
  &.danger { 
    background-color: #fee2e2; color: #b91c1c;
  }
  &.info { 
    background-color: #dbeafe; color: #1d4ed8; 
  }
}
</style>