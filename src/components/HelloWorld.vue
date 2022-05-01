<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>api data : {{ apiData }}</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace, State } from "vuex-class";

import { testInstance } from "@/service/test.class";

const AStore = namespace("AStore");

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  @AStore.Mutation("mutate") AStoreMutate: any;
  @AStore.State("apiData") apiData: any;

  // apiData: any = {};

  async created() {
    const response = await testInstance.get();
    this.AStoreMutate(["apiData", response]);
    console.log(this.apiData);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
