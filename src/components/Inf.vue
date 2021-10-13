<template>
  <div style="margin-bottom: 200px; min-height: 100vh">
    <header>
      <!-- Hacker News header -->
    </header>

    <div v-for="(item, $index) in list" :key="$index">
      <!-- Hacker News item loop -->
      <div style="margin-bottom: 100px">{{ item.author }}</div>
    </div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// import api from "./inf.json";
const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";
import axios from "axios";
import InfiniteLoading from 'vue-infinite-loading';
console.log(api);

// const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";
import catalog from "./catalog.json";
export default {
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      data: catalog,
      page: 1,
      //   list: api,
      list: [],
    };
  },

  methods: {
    infiniteHandler($state) {
      // axios
      //   .get(api, {
      //     params: {
      //       page: this.page,
      //     },
      //   })
      //   .then(({ data }) => {
      //     console.log(data);
      //     if (data.hits.length) {
      //       this.page += 1;
      //       this.list.push(...data.hits);
      //       $state.loaded();
      //     } else {
      //       $state.complete();
      //     }
      //   });
    },
  },

};
</script>

<style>
</style>
