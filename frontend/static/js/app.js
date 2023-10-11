// d3.json('/movies').then((data) => {console.log(data)})

$('h1').css('font-size','5rem')

function init() {

    // Use d3.json to load the data
    d3.json("/movies").then((data) => {
    // Get unique year values
    let years = [...new Set(data.map((row) => row.Released_Year))];
    let Genre = [...new Set(data.map((row) => row.Genre))];
    let Gross = [...new Set(data.map((row) => row.Gross))];
    let Star = [...new Set(data.map((row) => row.Star1))];
    years.sort().reverse();
    Genre.sort().reverse();
    Gross.sort().reverse();

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
    test = data
    let filteredData = data.filter((row) => 
      (year === "" || row.Released_Year === year) && 
      (seriesTitle === "" || row.Series_Title === seriesTitle)
    //   (Genre === "" || row.Genre === Genre)
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
      title: `Top Movies of the Year by IMDB Ranking${year ? ` in ${year}` : ""}${seriesTitle ? ` for ${seriesTitle}` : ""}`,
      xaxis: { title: "Movie Title" },
      yaxis: { title: "IMDB User Rating" },
      height: 600,
      width: 1200
    };

     // Plot the bar chart
    Plotly.newPlot("bar", [trace], layout);


    var traceGross = {
        x: top10.map((row) => row.Series_Title),
        y: top10.map((row) => row.Gross),
        mode: 'markers+text',
        type: 'scatter',
        marker: { size: 25 }
      };
      
      var scatterlayout = {
        title: `Gross Figures for Top 1000 Movies Released in${year ? ` in ${year}` : ""}${seriesTitle ? ` for ${seriesTitle}` : ""}`,
        height: 600,
        width: 1200
      };

      var data = [traceGross];
      
      Plotly.newPlot('myDiv2', data, scatterlayout);
    
    markersize = top10.map((row) => row.Gross ? row.Gross.split(',').join('')/100000 : 0)
    desired_maximum_marker_size = 1000
    console.log(top10)

    var trace1 = {
        x: top10.map((row) => row.Genre),
        y: top10.map((row) => row.IMDB_Rating),
        mode: 'markers',
        text: top10.map((row) => row.Genre),
        marker: {
        //   size: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 220],
        //   size: top10.map((row) => row.Gross),
          size: markersize,
          sizref: 2.0 * Math.max(markersize) / (desired_maximum_marker_size**2), 
        //    sizeref: 2,
          sizemode: 'area'
        }
      };
      
      var scatterdata = [trace1];
      
      var scatterlayout = {
        title: `Genre Bubbles and their IMDB Ranking for IMDB Top 1000 movies released in${year ? ` in ${year}` : ""}${seriesTitle ? ` for ${seriesTitle}` : ""}`,
        x: 'Genre Categories',
        y: 'IMDB Ranking Per Genre',
        showlegend: false,
        height: 600,
        width: 1200
      };
      
    Plotly.newPlot('myDiv', scatterdata, scatterlayout);
    
  });
}


function optionChanged(year) {
    buildCharts(year, "");
  }

  init();

init();
// function generateChart(data) {
// // Chart code using data
// }

