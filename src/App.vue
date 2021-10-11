<template>
  <Topmenu />
  <Shop />
</template>

<script>
import Shop from "@/components/Shop";
import Topmenu from "@/components/Topmenu.vue";
export default {
  components: { Shop, Topmenu },
};
</script>


<style src="./assets/css/bootstrap.css"></style>
<style src="./assets/css/style.css"></style>

<style>
#app {
  min-height: 1700px;
}
</style>
