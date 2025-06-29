# Настройка Firebase для проекта

## Проблема
Ошибка "Missing or insufficient permissions" возникает из-за того, что в Firebase Firestore не настроены правила безопасности.

## Решение

### 1. Откройте Firebase Console
Перейдите на https://console.firebase.google.com/ и выберите ваш проект `oprosnik-app`

### 2. Настройте Firestore Database
1. В левом меню выберите **Firestore Database**
2. Если база данных еще не создана, нажмите **Create database**
3. Выберите **Start in test mode** (для разработки)
4. Выберите ближайший регион (например, europe-west3)

### 3. Настройте правила безопасности
1. В Firestore Database перейдите на вкладку **Rules**
2. Замените существующие правила на следующие:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Разрешаем доступ ко всем коллекциям для разработки
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Нажмите **Publish**

### 4. Проверьте настройки проекта
1. В **Project Settings** (шестеренка вверху)
2. Убедитесь, что в разделе **Your apps** есть веб-приложение
3. Проверьте, что конфигурация в `src/firebase.js` соответствует вашей

### 5. Альтернативное решение через Firebase CLI
Если у вас установлен Firebase CLI:

```bash
# Установите Firebase CLI
npm install -g firebase-tools

# Войдите в аккаунт
firebase login

# Инициализируйте проект
firebase init firestore

# Примените правила
firebase deploy --only firestore:rules
```

## Проверка работы
После настройки правил:
1. Перезапустите приложение
2. Откройте консоль браузера
3. Должно появиться сообщение "🎉 Firebase подключен успешно!"
4. Попробуйте войти как admin/admin123

## Безопасность для продакшена
Для продакшена используйте более строгие правила:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Правила для коллекции surveys
    match /surveys/{surveyId} {
      allow read: if true; // Все могут читать опросы
      allow write: if request.auth != null; // Только авторизованные
    }
    
    // Правила для коллекции responses
    match /responses/{responseId} {
      allow read: if request.auth != null; // Только авторизованные
      allow write: if true; // Все могут отправлять ответы
    }
    
    // Правила для коллекции admins
    match /admins/{adminId} {
      allow read, write: if request.auth != null; // Только администраторы
    }
  }
}
``` 