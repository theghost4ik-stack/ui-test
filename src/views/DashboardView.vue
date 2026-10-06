<template>
  <div class="dashboard-page">
    <div class="page-header">
      <h1 class="page-title">Дашборд</h1>
    </div>

    <div class="stats-grid">
      <CustomCard v-for="(stat, index) in stats" :key="index">
        <div class="stat-content">
          <div>
            <div class="stat-title">{{ stat.title }}</div>
            <div class="stat-value">{{ stat.value }}</div>
          </div>
          <CustomChip :variant="stat.badgeType">{{ stat.change }}</CustomChip>
        </div>
      </CustomCard>
    </div>

    <CustomCard title="Последние действия">
      <table class="activity-table">
        <thead>
          <tr>
            <th>Операция</th>
            <th>Статус</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in recentActivity" :key="item.id">
            <td>{{ item.event }}</td>
            <td>
              <CustomChip :variant="item.statusType">{{ item.status }}</CustomChip>
            </td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
    </CustomCard>
  </div>
</template>

<script>
import CustomCard from '@/ui/custom-kit/CustomCard.vue';
import CustomChip from '@/ui/custom-kit/CustomChip.vue';

export default {
  name: 'DashboardView',
  components: { CustomCard, CustomChip },
  data() {
    return {
      stats: [
        { title: 'Доход', value: '$24,500', change: '+12%', badgeType: 'success' },
        { title: 'Заказы', value: '1,280', change: '+5%', badgeType: 'success' },
        { title: 'Ошибки', value: '14', change: '-2%', badgeType: 'danger' }
      ],
      recentActivity: [
        { id: 1, event: 'Пополнение счета', status: 'Успешно', statusType: 'success', date: 'Сегодня, 14:20' },
        { id: 2, event: 'Проверка данных', status: 'В процессе', statusType: 'warning', date: 'Вчера, 18:45' }
      ]
    };
  },
  methods: {
    handleAction() {
      alert('Кнопка из CustomKit сработала!');
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-page {
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
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 24px;

  .stat-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .stat-title {
    color: #64748b;
    font-size: 13px;
  }

  .stat-value {
    display: block;
    margin-top: 6px;
    color: #3c4b63;
    font-size: 24px;
    font-weight: 700;
  }
}

.activity-table {
  width: 100%;
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
    padding: 14px 16px;
    color: #334155;
    background: #f8fafc;
    border-top: 1px solid #eef2f7;
    border-bottom: 1px solid #eef2f7;
    font-size: 14px;
  }

  td:first-child {
    border-left: 1px solid #eef2f7;
    border-radius: 9px 0 0 9px;
    font-weight: 600;
  }

  td:last-child {
    border-right: 1px solid #eef2f7;
    border-radius: 0 9px 9px 0;
    color: #64748b;
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
}
</style>