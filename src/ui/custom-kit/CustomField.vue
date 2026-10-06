<template>
  <label class="custom-field">
    <span class="custom-field__label">{{ label }}</span>

    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :aria-invalid="Boolean(error)"
      class="custom-field__input"
      :class="{ 'custom-field__input--error': error }"
      @input="$emit('input', $event.target.value)"
    >

    <span v-if="error" class="custom-field__error">
      {{ error }}
    </span>
  </label>
</template>

<script>
export default {
  name: 'CustomField',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    error: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.custom-field__label {
  color: #3c4b63;
  font-size: 14px;
  font-weight: 600;
}

.custom-field__input {
  width: 100%;
  height: 42px;
  padding: 0 12px;
  color: #334155;
  background: #fff;
  border: 1px solid #d8e0eb;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }

  &--error {
    border-color: #ef4444;

    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
    }
  }
}

.custom-field__error {
  color: #dc2626;
  font-size: 12px;
}
</style>