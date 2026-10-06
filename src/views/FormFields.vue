<template>
  <section class="form-fields-page">
    <div class="form-card">
      <div class="form-card__header">
        <h1>Добавление сотрудника</h1>
        <p>Заполните данные и настройте права сотрудника.</p>
      </div>

      <form class="form" novalidate @submit.prevent="submitForm">
        <div class="form-grid">
          <CustomField
            :value="form.name"
            label="Имя"
            placeholder="Например, Анна"
            :error="errors.name"
            @input="updateField('name', $event)"
          />

          <CustomField
            :value="form.email"
            type="text"
            label="Электронная почта"
            placeholder="anna@example.com"
            :error="errors.email"
            @input="updateField('email', $event)"
          />

          <CustomField
            :value="form.password"
            type="password"
            label="Пароль"
            placeholder="Минимум 6 символов"
            :error="errors.password"
            @input="updateField('password', $event)"
          />

          <CustomField
            :value="form.passwordConfirmation"
            type="password"
            label="Повторите пароль"
            placeholder="Введите пароль ещё раз"
            :error="errors.passwordConfirmation"
            @input="updateField('passwordConfirmation', $event)"
          />
        </div>

        <div class="field-group">
          <label class="field-label" for="department">Отдел</label>

          <select
            id="department"
            :value="form.department"
            class="custom-select"
            :class="{ 'input-error': errors.department }"
            @change="updateField('department', $event.target.value)"
          >
            <option value="" disabled>Выберите отдел</option>
            <option value="cashdesk">Касса</option>
            <option value="credit">Кредитный отдел</option>
            <option value="support">Поддержка</option>
            <option value="security">Безопасность</option>
          </select>

          <span v-if="errors.department" class="field-error">
            {{ errors.department }}
          </span>
        </div>

        <div class="field-group">
          <span class="field-label">Роль в системе</span>

          <div class="radio-group">
            <label
              v-for="role in roles"
              :key="role.value"
              class="radio-card"
              :class="{ 'radio-card--active': form.role === role.value }"
            >
              <input
                :checked="form.role === role.value"
                :value="role.value"
                type="radio"
                name="role"
                @change="updateField('role', $event.target.value)"
              >

              <i class="mdi" :class="role.icon"></i>

              <span>
                <strong>{{ role.title }}</strong>
                <small>{{ role.description }}</small>
              </span>
            </label>
          </div>

          <span v-if="errors.role" class="field-error">
            {{ errors.role }}
          </span>
        </div>

        <div class="form-grid">
          <div class="field-group">
            <label class="field-label" for="start-date">Дата начала работы</label>

            <input
              id="start-date"
              :value="form.startDate"
              type="date"
              class="custom-input"
              :class="{ 'input-error': errors.startDate }"
              @input="updateField('startDate', $event.target.value)"
            >

            <span v-if="errors.startDate" class="field-error">
              {{ errors.startDate }}
            </span>
          </div>

          <div class="field-group">
            <label class="field-label" for="phone">Телефон</label>

            <input
              id="phone"
              :value="form.phone"
              type="text"
              placeholder="+998 90 123 45 67"
              class="custom-input"
              :class="{ 'input-error': errors.phone }"
              @input="updateField('phone', $event.target.value)"
            >

            <span v-if="errors.phone" class="field-error">
              {{ errors.phone }}
            </span>
          </div>
        </div>

        <div class="field-group">
          <label class="field-label" for="comment">Комментарий</label>

          <textarea
            id="comment"
            :value="form.comment"
            class="custom-textarea"
            placeholder="Дополнительная информация о сотруднике"
            maxlength="250"
            @input="updateField('comment', $event.target.value)"
          ></textarea>

          <span class="field-counter">
            {{ form.comment.length }}/250
          </span>
        </div>

        <div class="settings-block">
          <div>
            <strong>Уведомления</strong>
            <p>Отправлять сотруднику уведомления.</p>
          </div>

          <label class="toggle">
            <input
              :checked="form.notifications"
              type="checkbox"
              @change="form.notifications = $event.target.checked"
            >
            <span class="toggle-slider"></span>
          </label>
        </div>

        <label class="agreement">
          <input
            :checked="form.agreed"
            type="checkbox"
            @change="updateAgreement($event.target.checked)"
          >
          <span>Я принимаю условия использования системы</span>
        </label>

        <span v-if="errors.agreed" class="field-error agreement-error">
          {{ errors.agreed }}
        </span>

        <button class="submit-btn" type="submit" :disabled="!formIsValid">
          Создать сотрудника
        </button>
      </form>

      <p v-if="successMessage" class="success-message">
        {{ successMessage }}
      </p>
    </div>
  </section>
</template>

<script>
import CustomField from '@/ui/custom-kit/CustomField.vue';

export default {
  name: 'FormFields',
  components: {
    CustomField
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        department: '',
        role: '',
        startDate: '',
        phone: '',
        comment: '',
        notifications: true,
        agreed: false
      },
      errors: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        department: '',
        role: '',
        startDate: '',
        phone: '',
        agreed: ''
      },
      roles: [
        {
          value: 'cashier',
          title: 'Кассир',
          description: 'Работа с платежами',
          icon: 'mdi-cash-register'
        },
        {
          value: 'manager',
          title: 'Менеджер',
          description: 'Управление клиентами',
          icon: 'mdi-account-tie'
        },
        {
          value: 'admin',
          title: 'Администратор',
          description: 'Полный доступ',
          icon: 'mdi-shield-account'
        }
      ],
      successMessage: ''
    };
  },
  computed: {
    formIsValid() {
      return (
        this.form.name.trim().length >= 2 &&
        this.isEmailValid(this.form.email) &&
        this.form.password.length >= 6 &&
        this.form.password === this.form.passwordConfirmation &&
        this.form.department &&
        this.form.role &&
        this.form.startDate &&
        this.form.phone.trim().length >= 7 &&
        this.form.agreed &&
        !Object.values(this.errors).some(error => error)
      );
    }
  },
  methods: {
    updateField(field, value) {
      this.form[field] = value;
      this.validateField(field);

      if (field === 'password' && this.form.passwordConfirmation) {
        this.validateField('passwordConfirmation');
      }

      this.successMessage = '';
    },

    updateAgreement(value) {
      this.form.agreed = value;
      this.errors.agreed = value ? '' : 'Необходимо принять условия';
      this.successMessage = '';
    },

    validateField(field) {
      const value = this.form[field];

      if (field === 'name') {
        this.errors.name = value.trim().length < 2
          ? 'Введите минимум 2 символа'
          : '';
      }

      if (field === 'email') {
        this.errors.email = this.isEmailValid(value)
          ? ''
          : 'Введите корректную почту';
      }

      if (field === 'password') {
        this.errors.password = value.length < 6
          ? 'Пароль должен содержать минимум 6 символов'
          : '';
      }

      if (field === 'passwordConfirmation') {
        this.errors.passwordConfirmation = value !== this.form.password
          ? 'Пароли не совпадают'
          : '';
      }

      if (field === 'department') {
        this.errors.department = value
          ? ''
          : 'Выберите отдел';
      }

      if (field === 'role') {
        this.errors.role = value
          ? ''
          : 'Выберите роль';
      }

      if (field === 'startDate') {
        this.errors.startDate = value
          ? ''
          : 'Укажите дату начала работы';
      }

      if (field === 'phone') {
        this.errors.phone = value.trim().length < 7
          ? 'Введите номер телефона'
          : '';
      }
    },

    isEmailValid(email) {
      const parts = email.trim().split('@');

      return (
        parts.length === 2 &&
        parts[0].length > 0 &&
        parts[1].includes('.') &&
        !parts[1].startsWith('.') &&
        !parts[1].endsWith('.')
      );
    },

    submitForm() {
      if (!this.formIsValid) {
        return;
      }

      this.successMessage = 'Сотрудник успешно создан!';
      console.log('Данные сотрудника:', this.form);
      
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-fields-page {
  display: flex;
  justify-content: center;
  padding: 8px 0;
}

.form-card {
  width: 100%;
  max-width: 700px;
  padding: 28px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(60, 75, 99, 0.06);
}

.form-card__header {
  margin-bottom: 24px;

  h1 {
    color: #3c4b63;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    margin-top: 6px;
    color: #64748b;
    font-size: 14px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.field-group {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  color: #3c4b63;
  font-size: 14px;
  font-weight: 600;
}

.custom-input,
.custom-select,
.custom-textarea {
  width: 100%;
  color: #334155;
  background: #fff;
  border: 1px solid #d8e0eb;
  border-radius: 8px;
  outline: none;
  font: inherit;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }
}

.custom-input,
.custom-select {
  height: 42px;
  padding: 0 12px;
}

.custom-select {
  cursor: pointer;
}

.custom-textarea {
  min-height: 90px;
  padding: 11px 12px;
  resize: vertical;
}

.input-error {
  border-color: #ef4444;
}

.field-error {
  color: #dc2626;
  font-size: 12px;
}

.field-counter {
  align-self: flex-end;
  color: #94a3b8;
  font-size: 11px;
}

.radio-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.radio-card {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 11px;
  color: #475569;
  border: 1px solid #d8e0eb;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.2s;

  input {
    position: absolute;
    opacity: 0;
  }

  .mdi {
    color: #64748b;
    font-size: 20px;
  }

  strong,
  small {
    display: block;
  }

  strong {
    color: #3c4b63;
    font-size: 13px;
  }

  small {
    margin-top: 3px;
    color: #94a3b8;
    font-size: 11px;
  }

  &--active {
    background: #eff6ff;
    border-color: #3b82f6;

    .mdi {
      color: #3b82f6;
    }
  }
}

.settings-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  background: #f8fafc;
  border: 1px solid #eef2f7;
  border-radius: 9px;

  strong {
    display: block;
    color: #3c4b63;
    font-size: 14px;
  }

  p {
    margin-top: 3px;
    color: #64748b;
    font-size: 12px;
  }
}

.toggle {
  position: relative;
  width: 42px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;

  input {
    width: 0;
    height: 0;
    opacity: 0;

    &:checked + .toggle-slider {
      background: #3b82f6;

      &::before {
        transform: translateX(18px);
      }
    }
  }
}

.toggle-slider {
  position: absolute;
  inset: 0;
  background: #cbd5e1;
  border-radius: 20px;
  transition: background 0.2s;

  &::before {
    position: absolute;
    bottom: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    content: '';
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
  }
}

.agreement {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #475569;
  font-size: 13px;
  cursor: pointer;

  input {
    width: 16px;
    height: 16px;
    accent-color: #3b82f6;
  }
}

.agreement-error {
  margin-top: -14px;
}

.submit-btn {
  min-height: 42px;
  color: #fff;
  background: #3b82f6;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #2563eb;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
}

.success-message {
  margin-top: 18px;
  padding: 11px 12px;
  color: #15803d;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 14px;
}
</style>