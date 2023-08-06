// URL для запиту
const apiUrl = 'https://books-backend.p.goit.global/books/category-list';

// Опції запиту (якщо потрібно)
const options = {
  method: 'GET',
  headers: {
    'accept': 'application/json'
  }
};

// Отримати список категорій
export function getCategories() {
  return fetch(apiUrl, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
}

function createCategoriesList(categories) {
    const categoriesList = document.querySelector('.categories-list');
  
    categories.forEach(category => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = category.link;
      link.textContent = category.name;
      listItem.appendChild(link);
      categoriesList.appendChild(listItem);
    });
  }

getCategories()
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Error:', error);
  });