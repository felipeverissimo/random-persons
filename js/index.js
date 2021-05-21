import loaderTest from "../test/loader_test.js";

Vue.component("random-persons", {
  props: ["person_list_prop"],
  template: `<div class="container">
                <div class="card" v-for="item in person_list_prop ""
                          v-bind:key="item.id.value">
  
                            <img  v-bind:src="item.picture.large"  v-bind:alt="item.name.first" v-bind:title="item.name.first+' '+item.name.last">
  
                            <h2>{{item.name.first +' '+ item.name.last}}</h2>
                </div>
            </div>
          `,
});

new Vue({
  el: "#app",
  data: {
    page: 1,
    url: `https://randomuser.me/api/?page={{page}}&results=10&gender=female`,
    list: null,
    test: new loaderTest(),
  },
  methods: {
    getNextPage(next = null) {
      if (next) {
        this.startLoader();
        this.page = this.page++;
      }
      next = null;

      fetch(this.url)
        .then((resp) => {
          return resp.json();
        })
        .then((body) => {
          this.list = body.results;
        });
    },

    startLoader() {
      const loader = document.querySelector(".loader");
      const spinner = document.querySelector(".loader i");
      const body = document.querySelector("body");

      body.style.overflow = "hidden";
      loader.style.right = "0";
      loader.classList.add("active");
      spinner.style.left = "50%";

      setTimeout(function () {
        loader.style.right = "100%";
        spinner.style.left = "-50%";
        loader.classList.remove("active");

        body.style.overflow = "scroll";
      }, 2000);
      //   });
    },
  },
  mounted() {
    this.getNextPage();
  },
});
