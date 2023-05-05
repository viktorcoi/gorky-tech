document.addEventListener('DOMContentLoaded', () => {
    const mainTags = document.querySelector('#main-tags');
    const prevButton = document.querySelector('#main-tags-page-prew');
    const nextButton = document.querySelector('#main-tags-page-next');
    const searchInput = document.querySelector('#search-main-tags');
    const tags = Array.from(mainTags.children);
    const pageSizeOptions = {
      small: 7,
      medium: 10,
      large: 15,
    };
    let pageSize = pageSizeOptions.large;
    let pageCount = Math.ceil(tags.length / pageSize);
    let currentPage = 1;
    let filteredTags = tags;
  
    const showTags = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
      
        tags.forEach(tag => {
            if (filteredTags.includes(tag)) {
                if (filteredTags.indexOf(tag) >= startIndex && filteredTags.indexOf(tag) < endIndex) {
                tag.style.display = 'block';
                } else {
                tag.style.display = 'none';
                }
            } else {
                tag.style.display = 'none';
            }
        });
    };
  
    const updatePagination = () => {
        if (window.innerWidth <= 492) {
            pageSize = pageSizeOptions.small;
        } else if (window.innerWidth <= 1024) {
            pageSize = pageSizeOptions.medium;
        } else {
            pageSize = pageSizeOptions.large;
        }
        pageCount = Math.ceil(filteredTags.length / pageSize);
        if (currentPage > pageCount) {
            currentPage = 1;
        }
        showTags();
    };
  
    const updateFilteredTags = () => {
        const searchTerm = searchInput.value.toLowerCase();
        filteredTags = tags.filter(tag => tag.textContent.toLowerCase().includes(searchTerm));
        currentPage = 1;
        updatePagination();
    };
  
    searchInput.addEventListener('input', () => {
        updateFilteredTags();
    });
  
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
        } else {
            currentPage = pageCount;
        }
        showTags();
    });
  
    nextButton.addEventListener('click', () => {
        if (currentPage < pageCount) {
            currentPage++;
        } else {
            currentPage = 1;
        }
        showTags();
    });
  
    updatePagination();
  });