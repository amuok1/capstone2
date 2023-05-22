document.addEventListener("DOMContentLoaded", function() {
    var searchDropdown = document.getElementById("searchDropdown");
  
    // Populate the dropdown with array data from nationalParks.js
    nationalParksArray.forEach(function(park) {
      var option = document.createElement("option");
      option.value = park.name;
      option.textContent = park.name;
      searchDropdown.appendChild(option);
    });
  
    var searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var selectedPark = searchDropdown.value;
      // Perform search logic based on selected park
      // Display search results in #searchResults element
      // ...
  
      // Example: Display selected park in console
      console.log("Selected park:", selectedPark);
    });
  });
  