<template>
  <select v-if="type === 'select'"
  @change="$emit('update:modelValue', $event.target.value)">
    <option v-for="item in data" :key="item.themeValue"
    :value="item.themeValue">{{item.themeName}}</option>
  </select>
  <input :type="type" :placeholder="placeholder" v-model="value"
  @input="$emit('update:modelValue', $event.target.value)" v-else>
</template>

<script>
export default {
  data() {
    return {
      value: this.presetValue || '',
    };
  },
  props: ['type', 'data', 'presetValue', 'placeholder', 'modelValue'],
  emits: ['update:modelValue'],
};
</script>
