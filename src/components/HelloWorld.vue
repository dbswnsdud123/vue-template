<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>randomText : {{ randomText }}</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";

import { RandomTextGenerator } from "@/service/randomTextGenerator";
import { ObjectReader } from "@/worker/objectReader";

const AStore = namespace("AStore");
const randomTextGenerator = new RandomTextGenerator();
const objectReader = new ObjectReader(randomTextGenerator);

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  @AStore.Mutation("mutate") AStoreMutate: any;
  @AStore.State("randomText") randomText: any;

  async created() {
    this.GetData();
  }

  async GetData() {
    const response = await objectReader.extractText();
    this.AStoreMutate(["randomText", response]);
  }
}
</script>
