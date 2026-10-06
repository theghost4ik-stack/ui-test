<template>
  <div id="app" class="app-layout">
    <Sidebar />

    <div class="main-wrapper">
      <Navbar />

      <main class="content-body">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/ui/layout/Sidebar.vue';
import Navbar from '@/ui/layout/Navbar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #f4f6f8;
  color: #333;
}

.app-layout {
  display: flex;
  min-height: 100vh;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.content-body {
  padding: 24px;
  flex: 1;
}
</style>