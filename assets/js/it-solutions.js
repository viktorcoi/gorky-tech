import { paginationTags } from './paginationTags.js';
import { fillInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    paginationTags('#solutions-tags', '#solutions-tags-page-prew', '#solutions-tags-page-next', '#search-solutions-tags');

});