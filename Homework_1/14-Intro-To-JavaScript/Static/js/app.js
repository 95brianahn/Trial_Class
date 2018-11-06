// from data.js
var tableData = data;

// tbody
var tbody = d3.select("tbody");

// Selecting submit button
var submit = d3.select('#filter-btn');

// Complete the click handler for the form, Used arrow function for shorter syntax
submit.on("click", () => {

    // Prevent refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property('value');

    console.log(inputElement);
    console.log(inputValue);

    // form input for filtering data
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach((sighting) => {
        console.log(sighting);

        var row = tableBody.append('tr');
        // Get the entries for each object in the array
        Object.entries(sighting).forEach(([key, value]) => {
            // Log the key and value
            var cell = tableBody.append('td');
            item.text(value);
        });
    });
});
