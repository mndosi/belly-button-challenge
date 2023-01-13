

let sample = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function init(){
  let selector = d3.select("#selDataset");
  d3.json(sample).then((data)=>{
    let sample_names = data.names;
    sample_names.forEach((sample)=> {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
      let first_sample = sample_names[0];
      console.log(first_sample);
      buildcharts[first_sample];
      });
}
init();

function buildcharts(sample){

// Fetch the JSON data and console log it
d3.json(sample).then((data)=> {
    console.log(data);
  
  //creating variables to store the sample array

let sample_Array = data.samples;

let myArray = sample_Array.filter(sampleid => sampleid.id == sample);
let first_sample = myArray[0];

let otu_ids = first_sample.otu_ids;
let labels = first_sample.otu_labels;
let sample_values = first_sample.sample_values;

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
    }
  };

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("bar", traceData, layout);

});


}