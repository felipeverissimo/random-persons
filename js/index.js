import loaderTest from "../test/loader_test.js";

new Vue({
  el: "#app",
  data: {
    page: 1,
    url: `https://randomuser.me/api/?page={{page}}&results=10&gender=female`,
    list: null,
    test: new loaderTest(),
  },
  methods: {},
  mounted() {
    this.getNextPage();
  },
});
