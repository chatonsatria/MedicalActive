<template>
  <nav class="flex flex-col w-full font-Montserrat text-white">
    <Disclosure as="nav" class="bg-[#0061FF]">
      <div class="w-full p-6">
        <div
          class="flex w-full md:max-w-4xl md:h-16 lg:max-w-4xl xl:max-w-5xl mx-auto items-center justify-between"
        >
          <div class="flex font-bold items-center">
            <div class="flex-shrink hidden md:block">
              <router-link :to="{ name: 'Home' }" class="text-[24px]"
                >Medical Active</router-link
              >
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline gap-x-8 text-gray-300">
                <router-link :to="{ name: 'Home' }" class="hover:text-white"
                  >Home</router-link
                >
                <h1 class="hover:text-white">Product</h1>
                <h1 class="hover:text-white">Pricing</h1>
                <h1 class="hover:text-white">Contact</h1>
              </div>
            </div>
          </div>
          <div class="hidden md:block font-bold place-items-center">
            <div class="ml-4 flex md:ml-6">
              <div
                class="flex w-full h-full place-content-center place-items-center gap-x-6"
              >
                <router-link
                  :to="{ name: 'Login' }"
                  class="font-bold text-gray-300 hover:text-white"
                  >Login</router-link
                >
                <router-link
                  :to="{ name: 'Register' }"
                  class="flex w-[137px] h-[52px] bg-[#FC724D] rounded-md text-base font-medium text-white hover:text-white hover:bg-[#ff815e]"
                >
                  <span class="flex gap-2 m-auto font-bold"
                    >JOIN US
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
          <!-- on mobile -->
          <div class="flex w-full h-auto justify-between text-white md:hidden">
            <!-- Mobile menu button -->
            <router-link :to="{ name: 'Home' }" class="text-lg font-bold"
              >Medical Active</router-link
            >

            <DisclosureButton>
              <!-- burger button -->
              <button
                @click="dropdownMenu = !dropdownMenu"
                class="w-auto h-full"
              >
                <div
                  class="w-[30px] h-[3px] bg-white rounded-full mb-[4px] m-auto transition-all duration-[400ms]"
                  :class="{
                    '': !dropdownMenu,
                    'rotate-[45deg] translate-y-[7px]': dropdownMenu,
                  }"
                ></div>
                <div
                  class="w-[30px] h-[3px] bg-white rounded-full mb-[4px] m-auto transition-all duration-[400ms]"
                  :class="{
                    '': !dropdownMenu,
                    '-translate-x-[40px] opacity-0': dropdownMenu,
                  }"
                ></div>
                <div
                  class="w-[30px] h-[3px] bg-white rounded-full m-auto transition-all duration-[400ms]"
                  :class="{
                    '': !dropdownMenu,
                    '-rotate-[45deg] -translate-y-[7px]': dropdownMenu,
                  }"
                ></div>
              </button>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current ? 'text-white' : 'text-gray-300 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="pt-4 pb-3">
          <div
            class="flex w-full place-content-between place-items-center mt-3 px-2 space-y-1"
          >
            <DisclosureButton
              v-for="item in authNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
              ><router-link :to="{ name: 'Login' }">{{
                item.name
              }}</router-link></DisclosureButton
            >
            <button
              class="flex w-[137px] h-[52px] bg-[#FC724D] rounded-md text-base font-medium text-white hover:text-white hover:bg-[#ff815e]"
            >
              <span class="flex gap-2 m-auto"
                >JOIN US
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </nav>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", current: false },
  { name: "Product", current: false },
  { name: "Pricing", current: false },
  { name: "Contact", current: false },
];
const authNavigation = [{ name: "Login" }];

export default {
  name: "Navigation",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      user,
      navigation,
      authNavigation,
    };
  },
};
</script>
