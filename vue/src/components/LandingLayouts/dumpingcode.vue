<template>
  <section>
    <nav
      class="flex w-full h-auto py-6 font-Montserrat text-white bg-[#0061FF]"
    >
      <div
        class="flex px-6 w-2/4 h-auto mx-auto place-content-between place-items-center"
      >
        <div class="flex flex-row w-full h-auto place-items-center gap-x-6">
          <router-link :to="{ name: 'Home' }" class="flex text-2xl font-bold"
            >Medical Active</router-link
          >
          <div class="flex gap-x-2 font-bold">
            <h1>Home</h1>
            <h1>Product</h1>
            <h1>Pricing</h1>
            <h1>Contact</h1>
          </div>
        </div>
        <div class="flex gap-x-6 place-items-center">
          <router-link :to="{ name: 'Login' }" class="font-bold"
            >Login</router-link
          >
          <router-link
            :to="{ name: 'Register' }"
            class="flex w-[137px] h-[52px] bg-[#FC724D] rounded-md text-base font-medium text-white hover:text-white hover:bg-slate-200"
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
    </nav>
  </section>
  <router-view></router-view>

  <nav class="min-h-full font-Montserrat text-white">
    <Disclosure as="nav" class="bg-[#0061FF]" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link :to="{ name: 'Home' }" class="text-[24px]"
                >Medical Action</router-link
              >
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline gap-x-8">
                <h1>Home</h1>
                <h1>Product</h1>
                <h1>Pricing</h1>
                <h1>Contact</h1>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >{{ item.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div
            class="-mr-2 flex w-full place-content-between place-items-center font-Montserrat text-white md:hidden"
          >
            <!-- Mobile menu button -->
            <div class="text-lg font-bold">Medical Active</div>
            <div></div>
            <DisclosureButton class="">
              <span class="sr-only">Open main menu</span>
              <button v-if="!open" aria-hidden="true">
                <div
                  class="w-[25px] h-[2px] bg-white rounded-full mb-[4px] m-auto transition-all duration-[1000ms]"
                ></div>
                <div
                  class="w-[25px] h-[2px] bg-white rounded-full mb-[4px] m-auto transition-all duration-[1000ms]"
                ></div>
                <div
                  class="w-[25px] h-[2px] bg-white rounded-full m-auto transition-all duration-[1000ms]"
                ></div>
              </button>
              <button v-else aria-hidden="true">
                <div
                  class="w-[25px] h-[2px] bg-white rounded-full mb-[4px] m-auto transition-all duration-[1000ms] rotate-[45deg] translate-y-[6px]"
                ></div>
                <div
                  class="w-[25px] h-[2px] bg-white rounded-full mb-[4px] m-auto transition-all duration-[1000ms] -translate-x-[30px] opacity-0"
                ></div>
                <div
                  class="w-[25px] h-[2px] bg-white rounded-full m-auto transition-all duration-[1000ms] -rotate-[45deg] -translate-y-[6px]"
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
              item.current
                ? 'text-white'
                : 'text-gray-200 hover:bg-slate-400 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="pt-4 pb-3 border-t border-slate-400">
          <div
            class="flex w-full place-content-between place-items-center mt-3 px-2 space-y-1"
          >
            <DisclosureButton
              v-for="item in authNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-slate-400"
              >{{ item.name }}</DisclosureButton
            >
            <button
              class="flex w-[137px] h-[52px] bg-[#FC724D] rounded-md text-base font-medium text-white hover:text-white hover:bg-slate-200"
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
    <!-- content -->
    <router-view></router-view>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
