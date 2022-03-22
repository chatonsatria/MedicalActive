<template>
  <div class="flex flex-col w-full font-Montserrat">
    <!-- hero landing -->
    <div class="bg-[#0061FF] mb-6 text-white">
      <div class="flex px-2 pt-9 md:pt-11 w-full md:max-w-7xl mx-auto">
        <Section1 />
      </div>
    </div>
    <!-- logos -->
    <div class="flex px-2 mb-9 md:my-32 w-full md:max-w-7xl mx-auto">
      <Section2 />
    </div>
    <!-- our departement -->
    <div class="flex px-2 my-9 md:my-32 w-full md:max-w-7xl mx-auto">
      <Section3 />
    </div>
    <!-- leading medicine -->
    <div class="flex px-2 my-9 md:my-32 w-full md:max-w-7xl mx-auto">
      <Section4 />
    </div>
  </div>
</template>

<script>
import Section1 from "./HomePartial/Section1.vue";
import Section2 from "./HomePartial/Section2.vue";
import Section3 from "./HomePartial/Section3.vue";
import Section4 from "./HomePartial/Section4.vue";

export default {
  components: { Section1, Section3, Section4, Section2 },
};
</script>

<style></style>
