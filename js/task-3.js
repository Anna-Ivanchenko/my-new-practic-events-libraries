//! ********************************************
// Міні-проєкт: Симуляція API
//Сценарій
//Завантажити користувача
//Якщо користувач існує → завантажити його замовлення
//Якщо замовлення є → завантажити деталі замовлення
//Обробити помилки
//Там де можна — використати паралельність

// ?🔹 КРОК 1. Базові функції API
// Ти напишеш 3 функції:

// getUser(userId)
// getOrders(userId)
// getOrderDetails(orderId)

// Вони:
// повертають Promise
// мають затримку (через setTimeout)
// інколи можуть робити reject (імітація помилки)

// 🎯 Почнемо просто

// Ось логіка:
// 👤 getUser(userId)

// *якщо userId === 1 → resolve({ id: 1, name: "Anna" })
// *інакше → reject("User not found")
// Затримка: 1 секунда

// 📦 getOrders(userId)
// *якщо userId === 1 → resolve([{ id: 101 }, { id: 102 }])
// *інакше → reject("No orders")
// Затримка: 1.5 секунди

// 📄 getOrderDetails(orderId)
// *якщо orderId === 101 → resolve({ id: 101, item: "Laptop" })
// *якщо 102 → resolve({ id: 102, item: "Phone" })
// *інакше → reject("Order not found")
// Затримка: 2 секунди

// 🔥 Твоє завдання
// Напиши ці 3 функції з Promise і setTimeout.
// Поки без async/await — просто функції.

// Після цього ми:
// *Зробимо послідовний сценарій через async/await
// *Потім оптимізуємо паралельно
// *Потім додамо обробку помилок
// *Потім зробимо retry

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "Anna" });
            } else {
                reject("User not found");
            }
        }, 1000)
    })
}

function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([{ id: 101 }, { id: 102 }]);
            } else {
                reject("No orders"); 
            }
        }, 1500)
    })
}

function getOrderDetails(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderId === 101) {
                resolve({ id: 101, item: "Laptop" });
            } else if (orderId === 102){
                resolve({ id: 102, item: "Phone" });
            } else {
                reject("Order not found")
            }
        }, 2000)
    })
}

// ?🚀 КРОК 2 — Реальний сценарій

// Тепер зробимо повний процес:
// Завантажити користувача
// Завантажити його замовлення
// Завантажити деталі кожного замовлення
// Вивести все в консоль

// 🔥 Завдання

// Напиши async-функцію:
// async function loadUserData(userId)


// Логіка:

// 1️⃣ const user = await getUser(userId)
// 2️⃣ const orders = await getOrders(user.id)
// 3️⃣ для кожного order:
//       await getOrderDetails(order.id)
// 4️⃣ Вивести:
//    - користувача
//    - список замовлень
//    - деталі
// 5️⃣ Обгорнути все в try/catch

// ⚠️ Поки що зроби послідовно
// Не оптимізуй. Просто щоб працювало.
// 📌 Очікуваний результат для userId = 1
// Через кілька секунд має вивести:
// об'єкт користувача
// масив замовлень
// об'єкти деталей
// 📌 Якщо userId = 2
// Повинна спрацювати помилка "User not found"
// і все зупинитися.

async function loadUserData(userId) {
    try {
        const user = await getUser(userId);
        console.log("User:", user);

        const orders = await getOrders(user.id);
        console.log("Orders:", orders);

        for (const order of orders) {
            const details = await getOrderDetails(order.id);
            console.log("Order Details:", details);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

loadUserData(1);

async function retry(fn, attempts) {
  let lastError;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn(); // пробуємо виконати
    } catch (error) {
      lastError = error;
      console.log(`Спроба ${i + 1} не вдалася`);
    }
  }

  // якщо всі спроби провалились
  throw lastError;
}

retry(() => getOrderDetails(999), 3)
  .then(result => console.log("Успіх:", result))
  .catch(error => console.log("Фінальна помилка:", error));