import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '📊',
      title: 'Простое создание',
      description: 'Создавайте опросы из вопросов вариантами ответов. Интуитивный интерфейс для быстрой настройки.'
    },
    {
      icon: '📱',
      title: 'QR-код доступ',
      description: 'Участники могут легко присоединиться к опросу, отсканировав или введя код. Никаких сложных регистраций.'
    },
    {
      icon: '📈',
      title: 'Мгновенные результаты',
      description: 'Получайте результаты в реальном времени с подробной статистикой и аналитикой по каждому участнику.'
    },
    {
      icon: '👥',
      title: 'Управление участниками',
      description: 'Отслеживайте участников, их ответы и результаты в удобном личном кабинете организатора.'
    },
    {
      icon: '🔒',
      title: 'Безопасность',
      description: 'Защищенная авторизация для организаторов и простой вход по имени для участников.'
    },
    {
      icon: '📋',
      title: 'Детальная отчетность',
      description: 'Таблицы с результатами, статистика в процентах и анализ правильных/неправильных ответов.'
    }
  ];

  return (
    <section className="features">
      <div className="features-content">
        <h2 className="section-title">Возможности платформы</h2>
        <p className="section-subtitle">Все необходимые инструменты для создания и проведения опросов</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 