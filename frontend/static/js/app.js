d3.json('/movies').then((data) => {console.log(data)})


function init() {

    // Use d3.json to load the data
    d3.json("/movies").then((data) => {
    // Get unique year values
    let years = [...new Set(data.map((row) => row.Released_Year))];

    years.sort().reverse();

    // Select the year dropdown menu
    let dropdown = document.getElementById("year-dropdown");

    // Add options for each unique year value
    years.forEach((year) => {
      let option = document.createElement("option");
      option.value = year;
      option.text = year;
      dropdown.appendChild(option);
    });


    // Set the initial year to "All years"
    let initialYear = "";
    buildCharts(initialYear);
  });
}

  init();

  function buildCharts(year, seriesTitle) {
  // Use d3.json to load the data
  d3.json("/movies").then((data) => {
    // Filter the data based on the selected year and series title
    let filteredData = data.filter((row) => 
      (year === "" || row.Released_Year === year) && 
      (seriesTitle === "" || row.Series_Title === seriesTitle)
    );

    // Sort the filtered data by IMDb rating and get the top 10 movies
    filteredData.sort((a, b) => b.IMDB_Rating - a.IMDB_Rating);
    const top10 = filteredData.slice(0, 10);

    // Create a trace for the bar chart
    let trace = {
      x: top10.map((row) => row.Series_Title),
      y: top10.map((row) => row.IMDB_Rating),
      type: "bar",
      orientation: "v"
    };

    // Create a layout for the bar chart
    let layout = {
      title: `Top Movies of the Year${year ? ` in ${year}` : ""}${seriesTitle ? ` for ${seriesTitle}` : ""}`,
      xaxis: { title: "Title" },
      yaxis: { title: "IMDB Rating" }
    };

    
    // Plot the bar chart
    Plotly.newPlot("bar", [trace], layout);
  });
}

function optionChanged(year) {
    buildCharts(year, "");
  }


init();
// function generateChart(data) {
// // Chart code using data
// }

