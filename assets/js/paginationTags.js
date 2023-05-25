document.addEventListener('DOMContentLoaded', ()  => {
    const mainTags = document.querySelector('#tags');
    if (mainTags) {

    const prevButton = document.querySelector('#tags-page-prew');
    const nextButton = document.querySelector('#tags-page-next');
    const searchInput = document.querySelector('#search-tags');
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
    
    const filterTags = () => {
        const searchTerm = searchInput.value.toLowerCase();
        filteredTags = tags.filter(tag => tag.textContent.toLowerCase().includes(searchTerm));
        currentPage = 1;
        pageCount = Math.ceil(filteredTags.length / pageSize);
        showTags();
    };
    
    const showTags = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        tags.forEach((tag, index) => {
            if (filteredTags.includes(tag)) {
                if (startIndex <= filteredTags.indexOf(tag) && filteredTags.indexOf(tag) < endIndex) {
                    tag.style.display = 'block';
                    tag.classList.add('animate__animated', 'animate__fadeIn');
                } else {
                    tag.style.display = 'none';
                    tag.classList.remove('animate__animated', 'animate__fadeIn');
                }
            } else {
                tag.style.display = 'none';
                tag.classList.remove('animate__animated', 'animate__fadeIn');
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
    
    searchInput?.addEventListener('input', () => {
        filterTags();
    });
    
    prevButton?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
        } else {
            currentPage = pageCount;
        }
        showTags();
    });
    
    nextButton?.addEventListener('click', () => {
        if (currentPage < pageCount) {
            currentPage++;
        } else {
            currentPage = 1;
        }
        showTags();
    });

    window.addEventListener("resize", updatePagination);
    
    updatePagination();

    }
   
});