let url = "http://127.0.0.1:8000";

//d3.json("http://127.0.0.1:8000");

d3.json(url).then(({ Genre }) => {
  Genres.forEach((Genre) => {
    d3.select("select").append("option").text();
  });
  optionChanged();
});

const optionChanged = () => {
  let choice = d3.select("select").node().value;

  d3.json(url).then(({ Series_title, Gross }) => {
    let meta = Series_title.filter((obj) => obj.id == choice)[0];
    let sample = Gross.filter((obj) => obj.id == choice)[0];

    d3.select(".panel-body").html("");

    Object.entries(meta).forEach(([key, val]) => {
      d3.select(".panel-body")
        .append("h4")
        .text(`${key.toUpperCase()}: ${val}`);
    });

    const{otu_ids, otu_labels, sample_values} = sample;

    var data = [
        {
          x: sample_values.slice(0, 10).reverse(),
          y: otu_ids.slice(0, 10).reverse().map(y => `OTU ${y}`),
          text: otu_labels.slice(0,10).reverse(),
          type: 'bar',
          orientation:"h"
        }
      ];
      
      Plotly.newPlot('bar', data); 
      
      var trace1 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
        }
      };
      
      var data = [trace1];
      
      Plotly.newPlot('bubble', data);

      var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: meta.wfreq,
          title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubs per week"},
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 400 },
          gauge: { axis: { range: [null, 9] } }
        }
      ];
      Plotly.newPlot('gauge', data);

  });
};


// d3.json(url).then(({ Genre })) => {
//   Genres.forEach((Genre)) => {
//     d3.select("select").append("option").text();
//   });
//   optionChanged();
// });

// const optionChanged = () => {
//   let choice = d3.select("select").node().value;

//   d3.json(url).then(({ Series_title, Gross }) => {
//     let meta = Series_title.filter((obj) => obj.id == choice)[0];
//     let sample = Gross.filter((obj) => obj.id == choice)[0];

//     d3.select(".panel-body").html("");

//     Object.entries(meta).forEach(([key, val]) => {
//       d3.select(".panel-body")
//         .append("h4")
//         .text(`${key.toUpperCase()}: ${val}`);
//     });

//     const{otu_ids, otu_labels, sample_values} = sample;

//     var data = [
//         {
//           x: sample_values.slice(0, 10).reverse(),
//           y: otu_ids.slice(0, 10).reverse().map(y => `OTU ${y}`),
//           text: otu_labels.slice(0,10).reverse(),
//           type: 'bar',
//           orientation:"h"
//         }
//       ];
      
//       Plotly.newPlot('bar', data); 
      
//       var trace1 = {
//         x: otu_ids,
//         y: sample_values,
//         text: otu_labels,
//         mode: 'markers',
//         marker: {
//           size: sample_values,
//           color: otu_ids,
//           colorscale: "Earth"
//         }
//       };
      
//       var data = [trace1];
      
//       Plotly.newPlot('bubble', data);

//       var data = [
//         {
//           domain: { x: [0, 1], y: [0, 1] },
//           value: meta.wfreq,
//           title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubs per week"},
//           type: "indicator",
//           mode: "gauge+number",
//           delta: { reference: 400 },
//           gauge: { axis: { range: [null, 9] } }
//         }
//       ];
//       Plotly.newPlot('gauge', data);

//   });
// };