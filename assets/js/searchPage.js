document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.querySelector('#search-page-result');
    const contentDiv = document.querySelector("#result-search");
    const plugSection = document.querySelector(".search-page__plug");
    const querySpan = document.querySelector("#search-page-query");
    const blockResult = document.querySelector('.result-search');

    let highlightedElements = [];
  
    const highlightSimilarWords = (val) => {
        removeHighlighting();
        let pElements = contentDiv.getElementsByTagName("p");
        let aElements = contentDiv.getElementsByTagName("a");
        for (let i = 0; i < pElements.length; i++) {
            let element = pElements[i];
            processElement(element, val);
        }
        for (let j = 0; j < aElements.length; j++) {
            let element = aElements[j];
            processElement(element, val);
        }
        highlightedElements = contentDiv.querySelectorAll('.highlight');
        if (highlightedElements.length === 0)
        checkResultsSearch('none', 'grid', val);
        else
        checkResultsSearch('grid', 'none', '');
    }
  
    const processElement = (element, val) => {
        let originalText = element.getAttribute('data-original-text');
        if (!originalText) {
            originalText = element.innerHTML;
            element.setAttribute('data-original-text', originalText);
        }
        let highlightedText = highlightText(val, originalText);
        element.innerHTML = highlightedText;
    }
    
    const highlightText = (val, text) => {
        let sentencesToHighlight = text.split(".");
        let highlightedText = "";
        for (let j = 0; j < sentencesToHighlight.length; j++) {
            let sentence = sentencesToHighlight[j];
            let replacedSentence = sentence;
            if (sentence.toLowerCase().includes(val.toLowerCase())) {
                let regex = new RegExp(val, "gi");
                replacedSentence = sentence.replace(regex, function (match) {
                return "<span class='highlight'>" + match + "</span>";
                });
            }
            highlightedText += replacedSentence + ".";
        }
        return highlightedText;
      }
  
    const removeHighlighting = () => {
        for (let i = 0; i < highlightedElements.length; i++) {
            let highlightedElement = highlightedElements[i];
            let parentElement = highlightedElement.parentNode;
            if (parentElement) {
            let originalText = parentElement.hasAttribute('data-original-text') ? parentElement.getAttribute('data-original-text') : parentElement.innerHTML;
            parentElement.innerHTML = originalText;
            }
        }
        highlightedElements = [];
    }

    const checkResultsSearch = (param1, param2, val) => {
        blockResult.style.display = param1;
        plugSection.style.display = param2;
        querySpan.textContent = val;
    }
  
    document.querySelector('#btn-search-page').addEventListener('click', function (e) {
        e.preventDefault();
        let inputValue = inputSearch.value.trim();
        removeHighlighting();
        if (inputValue !== "") {
            highlightSimilarWords(inputValue);
        } else {
            checkResultsSearch('grid', 'none', '');
        }
    });
}); 