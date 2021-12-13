<template>
  <main>
    <h2 class="fs-2 text-center mb-6">價格試算</h2>
    <article class="container d-flex jc-center">
      <section class="menuSearch me-8">
        <div class="mb-4">
          <input-type class="mb-3" type="text" placeholder="請輸入餐點關鍵字" variable="keyword"
          v-model="keyword"></input-type>
          <div class="d-flex mb-3">
            <p>搜尋範圍：</p>
            <input-type type="radio" name="isSet" id="all" value="all"
            :presetValue="isSet" v-model="isSet"></input-type>
            <label for="all">全部</label>
            <input-type type="radio" name="isSet" id="set" value="set"
            :presetValue="isSet" v-model="isSet"></input-type>
            <label for="set">套餐</label>
            <input-type type="radio" name="isSet" id="only" value="only"
            :presetValue="isSet" v-model="isSet"></input-type>
            <label for="only">單點</label>
          </div>
          <button class="searchBtn btn-theme-primary" @click="searchData">搜尋</button>
        </div>
        <ul class="searchList">
          <li class="d-flex mb-3" v-for="item in filterData" :key="item.name">
            <input type="checkbox" :id="item.name" v-model="item.isAdd">
            <label class="d-flex jc-between flex-grow-1" :for="item.name">
              <p>{{item.name}}</p>
              <p>{{item.price}}</p>
            </label>
          </li>
        </ul>
      </section>
      <aside class="menuCalc bg-theme-secondary">
        <h3 class="fs-4 text-center mb-4">試算區域</h3>
        <ul class="mb-8">
          <li class="d-flex jc-between fs-5 mb-4" v-for="item in addData" :key="item.name">
            <p>{{item.name}}</p>
            <div class="d-flex ai-center">
              <p class="me-3">{{item.price}}元</p>
              <button type="button" class="btn-theme-primary"
              @click="deleteAddData(item.name)">刪除</button>
            </div>
          </li>
        </ul>
        <div class="totalArea d-flex jc-between fs-5">
          <p>總價</p>
          <p>{{total}}元</p>
        </div>
      </aside>
    </article>
  </main>
</template>

<script>
import inputType from '@/components/InputType.vue';

export default {
  data() {
    return {
      isSet: 'all',
      keyword: '',
      data: [],
      filterData: [],
    };
  },
  components: {
    inputType,
  },
  computed: {
    addData() {
      let addData = [];
      addData = this.data.filter((item) => item.isAdd);
      return addData;
    },
    total() {
      let total = 0;
      this.addData.forEach((item) => {
        total += item.price;
      });
      return total;
    },
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
    searchData() {
      switch (this.isSet) {
        case 'set':
          this.filterData = this.data.filter((item) => item.class === '套餐');
          break;
        case 'only':
          this.filterData = this.data.filter((item) => item.class !== '套餐');
          break;
        default:
          this.filterData = [...this.data];
          break;
      }
      this.filterData = this.filterData.filter((item) => item.name.includes(this.keyword));
    },
    deleteAddData(name) {
      this.data.forEach((item, index) => {
        if (item.name === name) {
          this.data[index].isAdd = false;
        }
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
