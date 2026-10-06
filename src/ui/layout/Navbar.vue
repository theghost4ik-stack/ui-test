<template>
  <header class="navbar">
    <span class="current-date">{{ currentDate }}</span>

    <div class="navbar-actions">
      <CustomDialog :visible="activeDialog === 'scanner'">
        <template v-slot:button>
          <button
            class="icon-btn badge-btn"
            title="Сканер"
            @click="activeDialog = 'scanner'"
            @blur="activeDialog = ''"
          >
            <i class="mdi mdi-qrcode-scan"></i>
          </button>
        </template>

        Сканер открыт
      </CustomDialog>

      <CustomDialog :visible="activeDialog === 'notifications'">
        <template v-slot:button>
          <button
            class="icon-btn badge-btn"
            title="Уведомления"
            @click="activeDialog = 'notifications'"
            @blur="activeDialog = ''"
          >
            <i class="mdi mdi-bell-outline"></i>
            <span class="badge-dot"></span>
          </button>
        </template>

        Новых уведомлений нет
      </CustomDialog>

      <CustomDialog :visible="activeDialog === 'profile'">
        <template v-slot:button>
          <button
            class="user-profile"
            type="button"
            @click="toggleProfileMenu"
            @blur="activeDialog = ''"
          >
            <div class="avatar">FD</div>

            <div class="profile-text">
              <span class="username">Frontend Developer</span>
              <span class="user-role">Администратор</span>
            </div>
          </button>
        </template>

        <div class="profile-menu">
          <div class="profile-menu__info">
            <div class="profile-text">
              <span class="username">Frontend Developer</span>
              <span class="user-role">Администратор</span>
            </div>
          </div>

          <button class="logout-btn" type="button" @click="logout">
            Выйти
          </button>
        </div>
      </CustomDialog>
    </div>
  </header>
</template>

<script>
import CustomDialog from '@/ui/custom-kit/CustomDialog.vue';

export default {
  name: 'Navbar',
  components: {
    CustomDialog
  },
  data() {
    return {
      activeDialog: ''
    };
  },
  methods: {
    toggleProfileMenu() {
      this.activeDialog =
        this.activeDialog === 'profile' ? '' : 'profile';
    },
    logout() {
      this.activeDialog = '';
    }
  },
  computed: {
    currentDate() {
      return new Date().toLocaleDateString('ru-RU');
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 24px;
  background-color: #3c4b63;

  .current-date {
    margin-left: auto;
    margin-right: 24px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }

  .navbar-actions {
    display: flex;
    align-items: center;
    gap: 16px;

    .icon-btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 20px;
    }

    .badge-btn {
      .badge-dot {
        position: absolute;
        top: 2px;
        right: 2px;
        width: 7px;
        height: 7px;
        background-color: #ff9393;
        border-radius: 50%;
      }
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 5px 10px;
      background-color: #fff;
      border: 0;
      border-radius: 10px;
      cursor: pointer;

      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        color: #fff;
        background-color: #3b82f6;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 600;
      }
    }

    .profile-text {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 1px;
    }

    .username {
      color: #3c4b63;
      font-size: 13px;
      font-weight: 600;
    }

    .user-role {
      color: #64748b;
      font-size: 11px;
      font-weight: 500;
    }

    .profile-menu {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .profile-menu__info {
      display: flex;
      align-items: center;
      padding-bottom: 7px;
      border-bottom: 1px solid #e5e7eb;
    }

    .logout-btn {
      width: 100%;
      padding: 6px 8px;
      color: #fff;
      background: #ef4444;
      border: 0;
      border-radius: 7px;
      cursor: pointer;
      font-size: 13px;

      &:hover {
        background: #dc2626;
      }
    }
  }
}
</style>