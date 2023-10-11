d3.json('/movies').then((data)=>{console.log({data})});

let array = [d3.json('/movies')];


d3.json('/movies').then((data) => { 
    //console.log(JSON.stringify(data));
    let newdata = JSON.parse(JSON.stringify(data));
    console.dir(newdata);
    console.log(newdata);
 
    


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