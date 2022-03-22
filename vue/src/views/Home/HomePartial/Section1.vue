<template>
  <div class="w-full">
    <!-- mobile -->
    <div
      class="md:hidden flex flex-col sm:flex-row justify-center items-center"
    >
      <div class="flex flex-col gap-y-4 text-center sm:text-left">
        <p class="text-base font-bold hidden sm:block">Join Us</p>
        <p class="text-5xl font-bold">
          <span class="text-base font-bold sm:hidden">Join Us </span>Meet the
          Best Doctors
        </p>
        <p class="text-sm">
          We are always fully focused on helping your child and you
        </p>
        <div class="flex gap-2 mx-auto">
          <router-link
            :to="{ name: 'Register' }"
            class="flex w-[192px] h-[52px] bg-[#FC724D] rounded-md text-base font-medium transition duration-500 text-white hover:text-white hover:shadow-md hover:scale-105 hover:bg-[#ff815e]"
          >
            <span class="flex gap-2 m-auto font-bold">Get Quote Now </span>
          </router-link>

          <router-link
            :to="{ name: 'Register' }"
            class="flex w-[162px] h-[52px] bg-none border border-[#FC724D] rounded-md text-base font-medium transition duration-500 text-white hover:text-white hover:scale-105 hover:border-[#ff815e]"
          >
            <span class="flex gap-2 m-auto font-bold">Learn More</span>
          </router-link>
        </div>
      </div>
      <div class="w-3/4 mx-auto">
        <img src="/bannerpict.svg" class="w-full" alt="" />
      </div>
    </div>
    <!-- dekstop -->
    <div class="hidden md:block">
      <div class="flex flex-row justify-between px-0 md:px-6 lg:px-6">
        <div class="flex flex-col my-auto gap-y-9">
          <p class="text-lg font-bold">Join Us</p>
          <p class="text-6xl font-bold">
            <span class="text-base font-bold sm:hidden">Join Us </span>Meet the
            Best Doctors
          </p>
          <p class="text-lg">
            We are always fully focused on helping your child and you
          </p>
          <div class="flex gap-2">
            <router-link
              :to="{ name: 'Register' }"
              class="flex w-[192px] h-[52px] bg-[#FC724D] rounded-md text-base font-medium transition duration-500 text-white hover:text-white hover:shadow-md hover:scale-105 hover:bg-[#ff815e]"
            >
              <span class="flex gap-2 m-auto font-bold">Get Quote Now </span>
            </router-link>

            <router-link
              :to="{ name: 'Register' }"
              class="flex w-[162px] h-[52px] bg-none border border-[#FC724D] rounded-md text-base font-medium transition duration-500 text-white hover:text-white hover:scale-105 hover:border-[#ff815e]"
            >
              <span class="flex gap-2 m-auto font-bold">Learn More</span>
            </router-link>
          </div>
        </div>
        <div class="w-1/2">
          <img src="/bannerpict.svg" class="w-full" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="w-full h-auto">
    
    <div
      class="hidden md:block w-full h-auto bg-[url('/public/wave2.svg')] bg-cover bg-bottom"
    >
      <div class="flex max-w-7xl h-auto mx-auto place-content-between">
        <div class="flex flex-col w-3/4 h-auto my-auto">
          <div class="flex flex-col w-3/4 h-auto text-white gap-y-8">
            <p class="text-base font-bold">Join Us</p>
            <p class="text-6xl font-bold">Meet the Best Doctors</p>
            <p class="text-lg">
              We are always fully focused on helping your child and you
            </p>
            <div class="flex gap-2">
              <router-link
                :to="{ name: 'Register' }"
                class="flex w-[192px] h-[52px] bg-[#FC724D] rounded-md text-base font-medium transition duration-500 text-white hover:text-white hover:shadow-md hover:scale-105 hover:bg-[#ff815e]"
              >
                <span class="flex gap-2 m-auto font-bold">Get Quote Now </span>
              </router-link>

              <router-link
                :to="{ name: 'Register' }"
                class="flex w-[162px] h-[52px] bg-none border border-[#FC724D] rounded-md text-base font-medium transition duration-500 text-white hover:text-white hover:scale-105 hover:border-[#ff815e]"
              >
                <span class="flex gap-2 m-auto font-bold">Learn More</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2">
          <img src="/public/banner_main.png" class="w-full" alt="" />
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Section1",
};
</script>

<style></style>
