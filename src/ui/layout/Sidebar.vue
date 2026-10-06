<template>
  <div class="sidebar" :class="{ 'is-collapsed': isCollapsed }">
    <button class="toggle-btn" @click="toggle">
      <i
        class="mdi"
        :class="isCollapsed ? 'mdi-chevron-right' : 'mdi-chevron-left'"
      ></i>
    </button>

    <div class="sidebar-header">
      <i class="mdi mdi-bank-circle-outline"></i>
      <span v-if="!isCollapsed" class="logo-text">Bank test</span>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-menu">
        <router-link
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          class="nav-item"
          exact
          :title="item.title"
        >
          <i class="mdi" :class="item.icon"></i>
          <span v-if="!isCollapsed" class="item-title">
            {{ item.title }}
          </span>
        </router-link>
      </div>

      <div class="user-profile">
        <div class="avatar">FD</div>

        <div v-if="!isCollapsed" class="profile-text">
          <span class="username">Frontend Developer</span>
          <span class="user-role">Администратор </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isCollapsed: false,
      menu: [
        { title: 'Дашборд', path: '/', icon: 'mdi-view-dashboard' },
        { title: 'Пользователи', path: '/users', icon: 'mdi-account-group' },
        { title: 'Аналитика', path: '/analytics', icon: 'mdi-chart-line' },
        { title: 'Форма', path: '/form-fields', icon: 'mdi-form-select' }
      ]
    };
  },
  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed
      localStorage.setItem('collapsed', this.isCollapsed)
    }
  },
  mounted() {
    const value = localStorage.getItem('collapsed')
    this.isCollapsed = value
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 250px;
  height: 100vh;
  color: #fff;
  background-color: #3c4b63;
  box-sizing: border-box;
  transition: width 0.2s;

  &.is-collapsed {
    width: 64px;

    .sidebar-header {
      justify-content: center;
      padding: 0;
    }

    .nav-item {
      justify-content: center;
      padding: 10px 0;
    }

    .user-profile {
      justify-content: center;
      padding: 10px 0;
    }
  }

  .toggle-btn {
    position: absolute;
    top: 50%;
    right: -14px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 60px;
    color: #94a3b8;
    background-color: #3c4b63;
    border: 0;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    font-size: 14px;
    transform: translateY(-50%);

    &:hover {
      background-color: #2f4363;
    }
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 60px;
    padding: 0 20px;
    gap: 12px;
    white-space: nowrap;

    i {
      font-size: 28px;
    }

    .logo-text {
      font-size: 24px;
      font-weight: 600;
    }
  }

  .sidebar-nav {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px 8px;
    overflow: hidden;
    box-sizing: border-box;

    .nav-menu {
      flex: 1;
      overflow-y: auto;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      margin-bottom: 6px;
      color: #94a3b8;
      border-radius: 12px;
      font-size: 14px;
      text-decoration: none;
      white-space: nowrap;
      transition: all 0.2s;

      .item-title {
        font-weight: 550;
      }

      i {
        font-size: 20px;
      }

      &:hover {
        color: #f8fafc;
        background-color: rgba(255, 255, 255, 0.05);
      }

      &.router-link-active {
        color: #3c4b63;
        background-color: #fff;
      }
    }

    .user-profile {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      gap: 8px;
      padding: 6px 8px;
      margin-top: auto;
      background-color: #fff;
      border-radius: 12px;
      white-space: nowrap;

      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 30px;
        height: 30px;
        color: #fff;
        background-color: #3b82f6;
        border-radius: 50%;
        font-size: 10px;
        font-weight: 600;
      }

      .profile-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        overflow: hidden;
      }

      .username {
        overflow: hidden;
        color: #0f172a;
        font-size: 13px;
        font-weight: 600;
        text-overflow: ellipsis;
      }

      .user-role {
        color: #64748b;
        font-size: 11px;
        font-weight: 500;
      }
    }
  }
}
</style>