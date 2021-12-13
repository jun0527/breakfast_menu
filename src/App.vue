<template>
  <header class="bg-theme-primary">
    <nav class="nav container d-flex jc-between ai-center">
      <div class="d-flex ai-center">
        <h1><router-link class="text-theme-secondary fs-4 me-7" to="/">早餐店</router-link></h1>
        <router-link to="/" class="text-theme-secondary fs-5 me-3">菜單</router-link>
        <router-link to="/calculation" class="text-theme-secondary fs-5">價格試算</router-link>
      </div>
      <input-type type="select" :data="themeData" v-model="theme"></input-type>
    </nav>
  </header>
  <router-view/>
</template>

<script>
import inputType from '@/components/InputType.vue';

export default {
  data() {
    return {
      theme: 'darkTheme',
      themeData: [
        {
          themeValue: 'darkTheme',
          themeName: '黑色主題',
        },
        {
          themeValue: 'grayTheme',
          themeName: '灰色主題',
        },
        {
          themeValue: 'blueTheme',
          themeName: '藍色主題',
        },
        {
          themeValue: 'orangeTheme',
          themeName: '橘色主題',
        },
      ],
    };
  },
  components: {
    inputType,
  },
  watch: {
    theme() {
      const body = document.querySelector('body');
      body.dataset.theme = this.theme;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/all';
</style>
