// 🔹 1. Асинхронність і Date
// ✅ Завдання 1 — Таймер затримки
// Напиши функцію printAfterDelay(message, delay), яка:
// приймає текст
// приймає затримку в мс
// виводить повідомлення через цей час
// function printAfterDelay(message, delay) {
//     setTimeout(function() {
//         console.log(message);
//     }, delay);
// }

// printAfterDelay("Привіт!", 2000);

// !АБО

// * function printAfterDelay(message, delay) {
// * setTimeout(() => console.log(message), delay);
// *}
// !--------------------------------------------------------


// ✅ Завдання 2 — Поточний час
// Напиши функцію showCurrentTime(), яка:
// кожну секунду виводить поточний час у форматі HH:MM:SS
// використовуй Date
// використовуй setInterval

// function showCurrentTime() {
//     setInterval(function() {
//         const now = new Date();
//         const hours = String(now.getHours()).padStart(2, '0');
//         const minutes = String(now.getMinutes()).padStart(2, '0');
//         const seconds = String(now.getSeconds()).padStart(2, '0');
//         console.log(`${hours}:${minutes}:${seconds}`);
//     }, 1000);
// }

// showCurrentTime();
// !--------------------------------------------------------

// 🔹 2. Створення власного Promise
// ✅ Завдання 3 — Простий проміс
// Створи функцію makePromise(), яка:
// повертає Promise
// через 2 секунди:
// якщо випадкове число > 0.5 → resolve("Успіх!")
// інакше → reject("Помилка!")
// І оброби його через .then() та .catch().

// function makePromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNum = Math.random();
//             if (randomNum > 0.5) {
//                 resolve("Успіх!");
//             } else {
//                 reject("Помилка!");
//             }
//         }, 2000);
//     });
// }
// makePromise()
//     .then(result => console.log(result))
//     .catch(error => console.error(error));
// !--------------------------------------------------------


// ✅ Завдання 4 — Проміс із параметрами
// Напиши функцію checkNumber(num), яка:
// повертає Promise
// якщо число парне → resolve("Парне число")
// якщо непарне → reject("Непарне число")


// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
        
//             if (num % 2 === 0) {
//                 resolve("Парне число");
//             } else {
//                 reject("Непарне число");
//             }
//         });
//     }

// checkNumber(4)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// checkNumber(7)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// !--------------------------------------------------------




// 🔹 3. Промісіфікація
// ✅ Завдання 5 — Переписати setTimeout у Promise
// Створи функцію:
// function delay(ms)
// Вона має:
// повертати Promise
// виконуватись через ms мілісекунд
// нічого не передавати в resolve (просто завершення)
// Тобто:
// delay(2000).then(() => {
//   console.log("Минуло 2 секунди");
// });
// 💡 Це одна з найважливіших вправ.


// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     })
// }
// delay(2000)
//   .then(() => {
//     console.log("Минуло 2 секунди");
//     return delay(2000);
//   })
//     .then(() => {
//     console.log("Минуло також 2 секунди");
//     return delay(2000);
//   })
//   .then(() => {
//     console.log("Минуло ще 2 секунди");
//   });
// !--------------------------------------------------------

// 🔹 4. Множинні проміси
// ✅ Завдання 6 — Promise.all
// Створи 3 функції:
// fetchUser()
// fetchPosts()
// fetchComments()
// Кожна:
// повертає Promise
// резолвиться через різний час (1с, 2с, 3с)
// повертає рядок типу "User loaded"
// Потім:
// Promise.all([...])
// і виведи масив результатів.


// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User Loaded");
//         }, 1000)
//     });
// }
// function fetchPosts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Posts Loaded");
//         }, 2000)
//     });
// }
// function fetchComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Comments Loaded");
//         }, 3000)
//     });
// }
// Promise.all([
//     fetchUser(),
//     fetchPosts(),
//     fetchComments()
// ])
//     .then(results => {
//         console.log(results);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// !--------------------------------------------------------


// ✅ Завдання 7 — Promise.race
// Ті самі функції, але використай Promise.race().
// Подивись, що повернеться.

// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User Loaded");
//         }, 3000)
//     });
// }
// function fetchPosts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Posts Loaded");
//         }, 2000)
//     });
// }
// function fetchComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Comments Loaded");
//         }, 1000)
//     });
// }
// Promise.race([
//     fetchUser(),
//     fetchPosts(),
//     fetchComments()
// ])
//     .then(results => {
//         console.log("Success:",results);
//     })
//     .catch(error => {
//         console.log("Error:",error);
//     });

    // !Зміни fetchUser так, щоб він робив reject:
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("User Failed");
//         }, 1000)
//     });
// }
// function fetchPosts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Posts Loaded");
//         }, 2000)
//     });
// }
// function fetchComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Comments Loaded");
//         }, 3000)
//     });
// }
// Promise.race([
//     fetchUser(),
//     fetchPosts(),
//     fetchComments()
// ])
//     .then(results => {
//         console.log("Success:",results);
//     })
//     .catch(error => {
//         console.log("Error:",error);
//     });
// !--------------------------------------------------------

// 🔹 Promise.allSettled()
// fetchUser → success
// fetchPosts → reject
// fetchComments → success

// 👩‍💻 Твоє завдання
// Перепиши одну з функцій (наприклад fetchPosts) так, щоб вона робила reject.

// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User Loaded");
//         }, 1000)
//     });
// }
// function fetchPosts() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject("Posts Failed");
//         }, 2000)
//     });
// }
// function fetchComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Comments Loaded");
//         }, 3000)
//     });
// }
// Promise.allSettled([
//     fetchUser(),
//     fetchPosts(),
//     fetchComments()
// ])
//     .then(results => {
//         console.log(results);
//     })

// !--------------------------------------------------------
// У реальних проектах часто роблять так:

// Promise.allSettled([...])
//   .then(results => {
//     const successful = results
//       .filter(r => r.status === "fulfilled")
//       .map(r => r.value);

//     console.log("Успішні:", successful);
//   });

// Тобто ми беремо тільки успішні запити.
// !--------------------------------------------------------


// 🔹 5. Міні-реальна симуляція API
// ✅ Завдання 8 — Імітація запиту
// Створи функцію:
// function fakeFetch(data, delay)
// повертає Promise
// через delay повертає data
// Потім:
// fakeFetch("Користувач", 2000)
//   .then(...)
// ************************************
// function fakeFetch(data, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data);
//         }, delay)
//     })
// }
// ****************************
// fakeFetch("Користувач", 2000)
//     .then(result => {
//         console.log(result);
//     });

// ******************************
    // * Уявімо, що:
// * Спочатку ми завантажуємо користувача
// * Потім — його пости
// * Потім — коментарі
// * Тобто залежні запити.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fakeFetch("User", 1000)
//   .then(user => {
//     console.log(user);
//     return fakeFetch("Posts", 1500); //Ми пишемо return, щоб:
// // Передати наступному then новий проміс
// // і змусити ланцюжок чекати його завершення
//   })
//   .then(posts => {
//     console.log(posts);
//     return fakeFetch("Comments", 2000);
//   })
//   .then(comments => {
//     console.log(comments);
//   });
// fakeFetch("A", 1000)
//   .then(result => {
//     console.log(result);   // ← 1 вивидить "A" через 1 секунду
//     return "B";            // ← 2 повертає "B" (не проміс, а просто рядок)
//   })
//   .then(result => {
//     console.log(result);   // ← 3 Оскільки "B" — це звичайне значення (не Promise),
//       // JS автоматично робить: Promise.resolve("B")
//     //   Другий .then() виконується одразу після першого
// // (без додаткової затримки)
//   });

// !--------------------------------------------------------
// 🔥 6. Трошки складніше (щоб реально закріпити)
// ✅ Завдання 9 — Ланцюжок then
// Зроби так:
// delay(1000)
//   .then(() => {
//     console.log("1");
//     return delay(1000);
//   })
//   .then(() => {
//     console.log("2");
//     return delay(1000);
//   })
//   .then(() => {
//     console.log("3");
//   });
// Зрозумій, чому це працює послідовно.





// 🔥🔥 7. Для повного розуміння
// ✅ Завдання 10 — Обробка помилок у Promise.all
// Створи 3 проміси:
// 2 успішні
// 1 з reject
// Передай у Promise.all
// ******************************************
// const p1 = Promise.resolve("Success 1");

// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Success 2");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error in p3");
//   }, 500);
// });
// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log("Results:", results);
//   })
//   .catch(error => {
//     console.log("Caught error:", error);
//   });
// **************************************

//   ❓ Що станеться?
// Через 500мс:
// p3 зробить reject
// Promise.all одразу впаде
// .then() НЕ виконається
// спрацює .catch()

// Виведе:
// Caught error: Error in p3

// p2 все одно завершиться через 1 секунду.
// Але Promise.all вже завершився з помилкою.




