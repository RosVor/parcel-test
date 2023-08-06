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

document.addEventListener('DOMContentLoaded', async function() {
  const categoriesList = document.getElementById('categoryList');

  try {
      const response = await fetch('https://books-backend.p.goit.global/books/category-list');
      const data = await response.json();

      data.forEach(category => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = `https://books-backend.p.goit.global/books/category?category=${category.list_name}`;
          link.classList.add('categories-item', 'link');
          link.textContent = category.list_name;
          listItem.appendChild(link);
          categoriesList.appendChild(listItem);
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
});