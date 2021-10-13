<template>
  <Inf />
  <!-- <Topmenu /> -->
  <!-- <Shop /> -->
</template>

<script>
import Shop from "@/components/Shop";
import Topmenu from "@/components/Topmenu.vue";
import Inf from "@/components/Inf.vue";
export default {
  components: { Shop, Topmenu, Inf },
};
</script>


<style src="./assets/css/bootstrap.css"></style>
<style src="./assets/css/style.css"></style>

<style>
#app {
  min-height: 1700px;
}
</style>
