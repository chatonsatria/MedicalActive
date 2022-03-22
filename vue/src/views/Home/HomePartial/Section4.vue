<template>
  <div class="w-full mx-auto">
    <div class="flex flex-col gap-y-4 sm:gap-x-6 sm:flex-row justify-between">
      <div class="w-full sm:w-1/2">
        <img class="w-full" src="/leadingmedicine.svg" alt="" />
      </div>
      <div class="flex max-w-sm h-full sm:w-1/2 my-auto">
        <div class="flex flex-col h-full gap-y-12 text-center md:text-left">
          <div class="w-[94px] h-[7px] bg-[#FC724D]"></div>
          <p class="text-3xl font-bold">Leading Medicine</p>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <router-link
            :to="{ name: 'About' }"
            class="flex w-auto h-auto text-[#FC724D] items-center"
            >Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              /></svg
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section4",
};
</script>

<style></style>
