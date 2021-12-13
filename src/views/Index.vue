<template>
  <main>
    <section class="breakfastMenuArea container">
      <h2 class="fs-2 text-center mb-6">早餐店菜單</h2>
      <ul class="menuList bg-theme-secondary">
        <li class="d-flex jc-between fs-4 mb-4" v-for="item in data" :key="item.name">
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getData() {
      const url = 'https://mocki.io/v1/8132cccc-b4ea-4388-9f7c-1606ed44e5c8';
      this.$http.get(url)
        .then((res) => {
          this.data = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
