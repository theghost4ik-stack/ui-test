<template>
  <div class="users-page">
    <div class="page-header">
      <h1 class="page-title">Пользователи</h1>
      <button class="btn-primary">
        <i class="mdi mdi-plus"></i>
        <span>Добавить</span>
      </button>
    </div>

    <div class="content-card">
      <table class="custom-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Email</th>
            <th>Роль</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="font-bold">{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td><span class="role-badge">{{ user.role }}</span></td>
            <td>
              <button class="action-btn"><i class="mdi mdi-pencil"></i></button>
              <button class="action-btn danger"><i class="mdi mdi-delete"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersView',
  data() {
    return {
      users: [
        { id: 1, name: 'Алексей Иванов', email: 'alex@example.com', role: 'Администратор' },
        { id: 2, name: 'Мария Петрова', email: 'maria@example.com', role: 'Менеджер' },
        { id: 3, name: 'Иван Сидоров', email: 'sidorov@example.com', role: 'Пользователь' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.users-page {
  color: #334155;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  .page-title {
    color: #3c4b63;
    font-size: 24px;
    font-weight: 700;
  }

  .btn-primary {
    display: flex;
    align-items: center;
    gap: 7px;
    min-height: 40px;
    padding: 0 14px;
    color: #fff;
    background: #3b82f6;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
      background: #2563eb;
    }
  }
}

.content-card {
  padding: 16px;
  overflow-x: auto;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(60, 75, 99, 0.06);
}

.custom-table {
  width: 100%;
  min-width: 640px;
  border-collapse: separate;
  border-spacing: 0 8px;

  th {
    padding: 0 16px 7px;
    color: #64748b;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-align: left;
    text-transform: uppercase;
  }

  td {
    padding: 13px 16px;
    color: #475569;
    background: #f8fafc;
    border-top: 1px solid #eef2f7;
    border-bottom: 1px solid #eef2f7;
    font-size: 14px;
  }

  td:first-child {
    border-left: 1px solid #eef2f7;
    border-radius: 9px 0 0 9px;
  }

  td:last-child {
    border-right: 1px solid #eef2f7;
    border-radius: 0 9px 9px 0;
  }

  tbody tr {
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(60, 75, 99, 0.08);

      td {
        background: #f1f7ff;
      }
    }
  }

  .font-bold {
    color: #3c4b63;
    font-weight: 700;
  }

  .role-badge {
    display: inline-flex;
    padding: 5px 9px;
    color: #475569;
    background: #eaf1fb;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }

  .action-btn {
    width: 32px;
    height: 32px;
    color: #64748b;
    background: #fff;
    border: 1px solid #dce5f0;
    border-radius: 7px;
    cursor: pointer;
    font-size: 16px;
    transition: color 0.2s, background 0.2s;

    &:hover {
      color: #2563eb;
      background: #eff6ff;
    }

    &.danger:hover {
      color: #dc2626;
      background: #fef2f2;
    }

    & + .action-btn {
      margin-left: 6px;
    }
  }
}
</style>