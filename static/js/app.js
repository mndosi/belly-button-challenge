

let sample_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function init(){
  let selector = d3.select("#selDataset");
  d3.json(sample_data).then((data)=>{
    let sample_names = data.names;
    sample_names.forEach((sample)=> {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
      let first_sample = sample_names[0];
      console.log(first_sample);
      buildcharts(first_sample);
      });
}
init();

function buildcharts(sample){

// Fetch the JSON data and console log it
d3.json(sample_data).then((data)=> {
    console.log(data);
  
  //creating variables to store the sample array, first sample, ids, labels, and values

let sample_Array = data.samples;

let myArray = sample_Array.filter(sampleid => sampleid.id == sample);
let first_sample = myArray[0];

let otu_ids = first_sample.otu_ids;
let labels = first_sample.otu_labels;
let sample_values = first_sample.sample_values;

// set y axis to selecte a slice of the otu_id's that correspond to the ten most frequent otu's.

let y_axis = otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();

// Trace1 for the Bar Chart
  let trace1 = {
    x: sample_values.slice(0,10).reverse(),
    y: y_axis,
    text: labels.slice(0,10).reverse(),
    type: "bar",
    orientation: "h"
  };

// Data array
// `data` has already been defined, so we must choose a new name here:
  let traceData = [trace1];

// Apply a title to the layout
  let layout = {
    title: "Top 10 Belly Button Bacteria",
    margin: {
      l: 100,
      t: 100,
    },
  };
// Render the bar plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("bar", traceData, layout)
});

// Working the Bubble Chart

// function buildBubbleChart(sample) {

// Read the data
d3.json(sample_data).then((data)=> {
  console.log(data);

let sample_Array = data.samples;

let myArray = sample_Array.filter(sampleid => sampleid.id == sample);
let first_sample = myArray[0];
  
let otu_ids = first_sample.otu_ids;
let labels = first_sample.otu_labels;
let sample_values = first_sample.sample_values;

// let bubble_plot = d3.select('#bubble'),
// d3.selectAll("circle"),
//     .data(data).enter()

// let traceData2 = [trace2];

// let trace2 = {
//   d3.
//   x: otu_ids,
//   y: sample_values,
//   marker_size: sample_values
//   marker_colors: otu_ids
//   text: labels,
//   type: "bubble",
//   orientation: "h"
// };
 
// let margin = {top: 10, right: 20, bottom: 30, left: 50},
//     width = 500 - margin.left - margin.right,
//     height = 420 - margin.top - margin.bottom;


let mycolor = otu_ids.scaleLinear().domain([1,10])
.range(["white", "red"])

// myBubble.selectAll(sample_data(data).enter()
//   .append("circle")
//   .attr("cx", function(d,i){return 30 + i*60})
//   .attr("cy", 50)
//   .attr("r", 19)
//   .attr("fill", function(d){return myColor(d) }));

let trace2 = {
  x: otu_ids,
  y: sample_values,
  text: labels,
  mode: 'markers',
  marker: {
    color: mycolor,
    opacity: [0.6],
    size: sample_values
  }
};
let traceData2 = [trace2];

let layout = {
  title: 'Belly Button Bacteria per Sample ',
  hovermode: "closest",
  showlegend: false,
  xaxis: {title: "Bacterial Species ID Number"},
  yaxis: {title: "Amount Present in Culture"}
};
//Call Plotly to plot the chart on the page
Plotly.newPlot('bubble', traceData2, layout);
})
};



