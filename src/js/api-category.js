// // URL для запиту
// const apiUrl = 'https://books-backend.p.goit.global/books/category-list';

// // Опції запиту (якщо потрібно)
// const options = {
//   method: 'GET',
//   headers: {
//     'accept': 'application/json'
//   }
// };

// // Отримати список категорій
// export function getCategories() {
//   return fetch(apiUrl, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     });
// }

// function createCategoriesList(categories) {
//     const categoriesList = document.querySelector('.categories-list');
  
//     categories.forEach(category => {
//       const listItem = document.createElement('li');
//       const link = document.createElement('a');
//       link.href = category.link;
//       link.textContent = category.name;
//       listItem.appendChild(link);
//       categoriesList.appendChild(listItem);
//     });
//   }

// getCategories()
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

document.addEventListener('DOMContentLoaded', () => {
  const categoryListElement = document.getElementById('categoryList');

  function fetchCategories() {
    return fetch('https://books-backend.p.goit.global/books/category-list')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // Очищуємо попередні дані, якщо такі є
        categoryListElement.innerHTML = '';

        // Додаємо кожну категорію до списку
        data.forEach((category) => {
          const listItem = document.createElement('li');
          listItem.classList.add('categories-item');

          const link = document.createElement('a');
          link.href = `/category/${category.id}`; // Встановіть унікальний шлях до категорії
          link.textContent = category.list_name;
          link.classList.add('categories-text', 'link');

          listItem.appendChild(link);
          categoryListElement.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }

  fetchCategories();
});