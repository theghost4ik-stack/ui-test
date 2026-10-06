<template>
  <div class="analytics">
    <h1>Аналитика</h1>

    <div class="layout">
      <div class="card chart">
        <span>График показателей</span>
      </div>

      <div class="card">
        <h2>Источники трафика</h2>
        <ul>
          <li>
            <span>Прямой переход</span>
            <strong>45%</strong>
          </li>
          <li>
            <span>Поисковики</span>
            <strong>35%</strong>
          </li>
          <li>
            <span>Соцсети</span>
            <strong>20%</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnalyticsView'
}
</script>

<style lang="scss" scoped>
.analytics {
  color: #334155;

  h1 {
    margin-bottom: 24px;
    color: #3c4b63;
    font-size: 24px;
    font-weight: 700;
  }
}

.layout {
  display: grid;
  gap: 20px;
}

.card {
  padding: 20px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(60, 75, 99, 0.06);
}

.chart {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  color: #94a3b8;
  border: 1px dashed #dce5f0;
  border-radius: 10px;

  span {
    padding: 10px 14px;
    color: #64748b;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
  }
}

.card h2 {
  margin-bottom: 12px;
  color: #3c4b63;
  font-size: 16px;
  font-weight: 700;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 14px;
  margin-bottom: 8px;
  color: #475569;
  background: #f8fafc;
  border: 1px solid #eef2f7;
  border-radius: 8px;
  font-size: 14px;
  transition: background 0.2s, transform 0.2s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: #f1f7ff;
    transform: translateX(2px);
  }

  strong {
    color: #3b82f6;
    font-size: 14px;
  }
}
</style>