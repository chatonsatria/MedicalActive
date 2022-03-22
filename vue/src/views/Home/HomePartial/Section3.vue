<template>
  <div class="w-full">
    <!-- mobile -->
    <div class="md:hidden">
      <div class="flex flex-col gap-y-6">
        <div class="flex flex-col items-end text-center gap-y-4">
          <div class="w-[94px] h-[7px] bg-[#FC724D]"></div>
          <p class="text-5xl font-bold">Our Departement</p>
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
        <div
          class="flex flex-col shadow-md rounded p-4 items-center text-center gap-y-3"
        >
          <div class="w-1/4">
            <img src="/logoOurDepartement/heart.svg" class="w-full" alt="" />
          </div>
          <p>Cancer Care</p>
          <div class="w-[50px] h-[2px] bg-[#FC724D]"></div>
          <p>The gradual accumulation of information about</p>
        </div>
        <div
          class="flex flex-col shadow-md rounded p-4 items-center text-center gap-y-3"
        >
          <div class="w-1/4">
            <img src="/logoOurDepartement/hospital.svg" class="w-full" alt="" />
          </div>
          <p>Online Appoinment</p>
          <div class="w-[50px] h-[2px] bg-[#FC724D]"></div>
          <p>The gradual accumulation of information about</p>
        </div>
        <div
          class="flex flex-col shadow-md rounded p-4 items-center text-center gap-y-3"
        >
          <div class="w-1/4">
            <img src="/logoOurDepartement/note.svg" class="w-full" alt="" />
          </div>
          <p>Book now</p>
          <div class="w-[50px] h-[2px] bg-[#FC724D]"></div>
          <p>The gradual accumulation of information about</p>
        </div>
      </div>
    </div>
    <!-- dekstop -->
    <div class="hidden md:block sm:px-1 md:px-6 lg:px-6">
      <div class="flex flex-row justify-between gap-x-10">
        <div class="flex flex-col w-3/4 my-auto gap-y-6">
          <div class="w-[94px] h-[7px] bg-[#FC724D]"></div>
          <p class="text-5xl font-bold">Our Departement</p>
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
        <div class="flex flex-col gap-y-10">
          <div class="flex flex-col rounded shadow-md p-6 gap-y-4">
            <div class="w-1/4">
              <img src="/logoOurDepartement/heart.svg" class="w-full" alt="" />
            </div>
            <p>Cancer Care</p>
            <div class="w-[50px] h-[2px] bg-[#FC724D]"></div>
            <p>The gradual accumulation of information about</p>
          </div>
          <div class="flex flex-col rounded shadow-md p-6 gap-y-4">
            <div class="w-1/4">
              <img
                src="/logoOurDepartement/hospital.svg"
                class="w-full"
                alt=""
              />
            </div>
            <p>Online Appoinment</p>
            <div class="w-[50px] h-[2px] bg-[#FC724D]"></div>
            <p>The gradual accumulation of information about</p>
          </div>
        </div>
        <div class="flex flex-col my-auto">
          <div class="flex flex-col rounded shadow-md p-6 gap-y-4">
            <div class="w-1/4">
              <img src="/logoOurDepartement/note.svg" class="w-full" alt="" />
            </div>
            <p>Book now</p>
            <div class="w-[50px] h-[2px] bg-[#FC724D]"></div>
            <p>The gradual accumulation of information about</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section3",
};
</script>

<style></style>
