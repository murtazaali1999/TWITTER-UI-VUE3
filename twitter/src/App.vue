<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex items-center border-b border-gray-600">
      <router-link to="/profile" class="p-4 mr-3 text-green-500 text-2xl">
        <font-awesome-icon icon="fa-solid fa-user" />
      </router-link>
      <h1 class="text-white font-black text-xl">{{ $route.name }}</h1>
    </header>
    <main class="flex-1 overflow-scroll">
      <router-view />
    </main>
    <footer class="grid grid-cols-4 border-t border-gray-600">
      <router-link
        :to="route.path"
        :class="`p-4 text-center text-3xl ${
          route.name == $route.name ? 'text-green-500' : 'text-gray-300'
        }`"
        v-for="(route, index) in routes"
        :key="index"
      >
        <font-awesome-icon :icon="route.iconClass" />
      </router-link>
    </footer>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const routes = ref([]); //
    const router = useRouter(); //get information from out router-file, e.g: get FA classes

    onBeforeMount(() => {
      //which happens before the component mounts

      //if its set to true, then in set in routes
      routes.value = router.options.routes.filter((r) => r.mainMenu);
    });

    return {
      routes,
    };
  },
  components: {},
};
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
