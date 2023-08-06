// document.addEventListener('DOMContentLoaded', async function() {
//   const categoriesList = document.getElementById('categoryList');

//   try {
//       const response = await fetch('https://books-backend.p.goit.global/books/category-list');
//       const data = await response.json();

//       data.forEach(category => {
//           const listItem = document.createElement('li');
//           const link = document.createElement('a');
//           link.href = `https://books-backend.p.goit.global/books/category?category=${category.list_name}`;
//           link.classList.add('categories-text', 'link');
//           link.textContent = category.list_name;
//           listItem.appendChild(link);
//           categoriesList.appendChild(listItem);
//       });
//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
// });
document.addEventListener('DOMContentLoaded', function() {
  const categoriesList = document.getElementById('categoryList');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://books-backend.p.goit.global/books/category-list', true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      data.forEach(category => {
        const listItem = document.createElement('li');
        listItem.classList.add('categories-item'); // Додано клас 'categories-item'
        
        const link = document.createElement('a');
        link.href = `https://books-backend.p.goit.global/books/category?category=${category.list_name}`;
        link.classList.add('categories-text', 'link');
        link.textContent = category.list_name;
        listItem.appendChild(link);
        categoriesList.appendChild(listItem);
      });
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  };

  xhr.onerror = function() {
    console.error('Request failed.');
  };

  xhr.send();
});