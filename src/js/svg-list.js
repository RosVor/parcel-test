const supportList = document.querySelector('.support-list');
const sliderIcon = document.getElementById('sliderIcon');

async function loadSupportData() {
  try {
    const response = await fetch('../data/support-ukraine.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка завантаження даних:', error);
    return [];
  }
}

function createSupportListItem(item) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.title;
    a.href = item.url;
    if (item.img) {
      const img = document.createElement('img');
      img.src = item.img;
      a.appendChild(img);
    }
    li.appendChild(a);
    return li;
  }

  async function initializeSupportList() {
    const supportData = await loadSupportData();
    supportData.forEach(item => {
      supportList.appendChild(createSupportListItem(item));
    });
  }
  
  const supportItems = supportList.querySelectorAll('li');
  let visibleItems = 6;
  
  function toggleItemsVisibility() {
    for (let i = visibleItems; i < supportItems.length; i++) {
      supportItems[i].classList.toggle('hidden');
    }
  }
  
  toggleItemsVisibility();
  
  sliderIcon.addEventListener('click', () => {
    visibleItems = Math.min(visibleItems + 1, supportItems.length);
    toggleItemsVisibility();
  });
  
  initializeSupportList();