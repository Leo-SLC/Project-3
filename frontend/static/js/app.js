d3.json('/movies').then((data)=>{console.log({data})});

let array = [d3.json('/movies')];


<<<<<<< Updated upstream
d3.json('/movies').then((data) => { 
    //console.log(JSON.stringify(data));
    let newdata = JSON.parse(JSON.stringify(data));
    console.dir(newdata);
    console.log(newdata);
 
    
=======
function init() {

    // Use d3.json to load the data
    d3.json("/movies").then((data) => {
    // Get unique year values
    let years = [...new Set(data.map((row) => row.Released_Year))];
    let Genre = [...new Set(data.map((row) => row.Genre))];
    let Gross = [...new Set(data.map((row) => row.Gros))];
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
        title: "Gross Figures for Top 1000 Movies in Selected Year",
        height: 600,
        width: 1200
      };

      var data = [traceGross];
      
      Plotly.newPlot('myDiv2', data, scatterlayout);

    var trace1 = {
        x: top10.map((row) => row.Genre),
        y: top10.map((row) => row.IMDB_Rating),
        mode: 'markers',
        text: top10.map((row) => row.Genre),
        marker: {
          size: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
          sizeref: 0.8,
          sizemode: 'area'
        }
      };
      
      var scatterdata = [trace1];
      
      var scatterlayout = {
        title: 'Genre Bubbles Ranking for Movies in Selected Year',
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
>>>>>>> Stashed changes

  init();

    //let newjsondata = d3.json();
    
    // d3.json(newdata).then(({ Genres }) => {
    //     Genres.forEach((Genre) => {
    //       d3.select("select").append("option").text(Genre);
    //     });
    //     optionChanged();

   
    //let mappednewdata = new Map(Object.entries(JSON.parse(newdata)));

    //let mappednewdata = new Map(Object.entries(JSON.parse(newdata)));

    //console.log(mappednewdata);
});


//movie_data = d3.json('/movies');

//let json_data = d3.json('/movies').then((data));

//movie_data = new Map(Object.entries(JSON.parse(d3.json('/movies'))));

//console.log(movie_data)

// genre = movie_data.organizations.map(function(d) { return d.genre; });

// var Genre = d3.map(movie_data, function(d) {
//     return d.Genre;
//  });


// mappednewdata => {
//     data.forEach((key) => {
//       d3.select("select").append("option").text({Genre});
//     });
//     optionChanged();
//   };
  
//   const optionChanged = () => {
//     let choice = d3.select("select").node().value;
  
//     d3.json('/movies').then(({ metadata, samples }) => {
//       let meta = metadata.filter((obj) => obj.id == choice)[0];
//       let sample = samples.filter((obj) => obj.id == choice)[0];
  
//       d3.select(".panel-body").html("");
  
//       Object.entries(meta).forEach(([key, val]) => {
//         d3.select(".panel-body")
//           .append("h4")
//           .text(`${key.toUpperCase()}: ${val}`);
//       });
  
//       const{otu_ids, otu_labels, sample_values} = sample;
  
//       var data = [
//           {
//             x: sample_values.slice(0, 10).reverse(),
//             y: otu_ids.slice(0, 10).reverse().map(y => `OTU ${y}`),
//             text: otu_labels.slice(0,10).reverse(),
//             type: 'bar',
//             orientation:"h"
//           }
//         ];
        
//         Plotly.newPlot('bar', data); 
        
//         var trace1 = {
//           x: otu_ids,
//           y: sample_values,
//           text: otu_labels,
//           mode: 'markers',
//           marker: {
//             size: sample_values,
//             color: otu_ids,
//             colorscale: "Earth"
//           }
//         };
        
//         var data = [trace1];
        
//         Plotly.newPlot('bubble', data);
  
//         var data = [
//           {
//             domain: { x: [0, 1], y: [0, 1] },
//             value: meta.wfreq,
//             title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubs per week"},
//             type: "indicator",
//             mode: "gauge+number",
//             delta: { reference: 400 },
//             gauge: { axis: { range: [null, 9] } }
//           }
//         ];
//         Plotly.newPlot('gauge', data);
  
//     });
//   };