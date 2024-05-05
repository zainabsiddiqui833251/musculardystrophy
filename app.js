function searchContent() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var elementsToSearch = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span,body'); // Customize this selector as per your HTML structure
  
    elementsToSearch.forEach(function(element) {
      var content = element.textContent.toLowerCase();
      if (content.includes(searchText)) {
        highlightText(element, searchText);
        element.scrollIntoView();
      } else {
        clearHighlight(element);
      }
    });
  }
  
  function highlightText(element, searchText) {
    var regex = new RegExp(searchText, 'gi');
    element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$&</span>');
  }
  
  function clearHighlight(element) {
    element.innerHTML = element.textContent;
  }
  
  
let btn1 = document.querySelector('.toggle'); // Assuming your button has a class of 'toggle'
let mode = 'light'; // Strings should be enclosed in quotes

btn1.addEventListener('click', () => {
    if (mode == 'light') { // 'light' should be a string
        mode = 'dark'; // Strings should be enclosed in quotes
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        btn1.innerHTML = 'Light Mode';
    } else {
        mode = 'light'; // Strings should be enclosed in quotes
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        btn1.innerHTML = 'Dark Mode';
    }
});
