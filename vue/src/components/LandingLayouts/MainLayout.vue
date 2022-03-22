<template>
  <div>
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "../Layouts/Footer.vue";
import Navigation from "../Layouts/Navigation.vue";

export default {
  name: "MainLayout",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style></style>
