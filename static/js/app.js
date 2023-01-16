let sample_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function init(){
  let selector = d3.select("#selDataset");
  d3.json(sample_data).then((data)=>{
    let subject_ids = data.names;
    subject_ids.forEach((subject_id)=> {
      selector
        .append("option")
        .text(subject_id)
        .property("value", subject_id);
    });
      let first_subject_id = subject_ids[0];
      console.log(first_subject_id);
      buildMetadata(first_subject_id);
      });
}
init();

// function buildcharts(sample){

// // Fetch the JSON data and console log it
//   d3.json(sample_data).then((data)=> {
//     console.log(data);
  
//   //creating variables to store the sample array, first sample, ids, labels, and values

// let sample_Array = data.samples;

// let myArray = sample_Array.filter(sampleid => sampleid.id == sample);
// let first_sample = myArray[0];
// let otu_ids = first_sample.otu_ids;
// let labels = first_sample.otu_labels;
// let sample_values = first_sample.sample_values;

// // set y axis to selecte a slice of the otu_id's that correspond to the ten most frequent otu's.

// let y_axis = otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();

// // Trace1 for the Bar Chart
//   let trace1 = {
//     x: sample_values.slice(0,10).reverse(),
//     y: y_axis,
//     text: labels.slice(0,10).reverse(),
//     type: "bar",
//     orientation: "h"
//   };

// // Data array
// // `data` has already been defined, so we must choose a new name here:
//   let traceData = [trace1];

// // Apply a title to the layout
//   let layout = {
//     title: "Top 10 Belly Button Bacteria",
//     margin: {
//       l: 100,
//       t: 100,
//     },
//   };
// // Render the bar plot to the div tag with id "plot"
// // Note that we use `traceData` here, not `data`
// Plotly.newPlot("bar", traceData, layout);

// // Working the Bubble Chart
// let bubbleData = [
//   {
//     x: otu_ids,
//     y: sample_values,
//     text: labels,
//     mode: "markers",
//     marker: {
//       size: sample_values,
//       color: otu_ids,
//       colorscale: "Earth"
//     }
//   }
// ];

// // Deliverable 2: 2. Create the layout for the bubble chart.
// let bubbleLayout = {
//   title: "Bacteria Cultures Per Sample",
//   margin: { t: 0 },
//   hovermode: "closest",
//   xaxis: { title: "OTU ID" },
//   margin: { t: 30}
// };

// // Deliverable 2: 3. Use Plotly to plot the data with the layout.
// Plotly.newPlot("bubble", bubbleData, bubbleLayout);
//   }
// }
// to Display the Demographic Metadata information

function buildMetadata (subject_id) {
  function getMetadata(subject_id) {
    subject_id = parseInt(subject_id);
    console.log("getMetadata");
    console.log(subject_id);
  }
    function isMetadata_match(metadata_element){
        let metadata_id = metadata_element["id"];
        return (subject_id === metadata_id);
    }
  let subject_meta = getMetadata(subject_id);
  console.log(subject_meta);
  let panel_data = [{
      "id: ": subject_meta.id,
      "ethnicity: ": subject_meta.ethnicity,
      "gender: ": subject_meta.gender,
      "age: ": subject_meta.age,
      "location: ": subject_meta.location,
      "bbtype: ": subject_meta.bbtype,
      "wfreq:": subject_meta.wfreq,
      }];

  let panel = d3.select("#sample-metadata");
  panel.html("");

  Object.values(getMetadata).forEach(([key,value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
}

function optionChanged(subject_id) {
  console.log(subject_id);
  buildMetadata(subject_id);
}

// Function called by DOM changes

//   function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     let selector = d3.selectALL("#selDataset").on("change", updatePlotly);
//     // Assign the value of the dropdown menu option to a variable
//     let sample_names = data.names;
//     if (sample_names === 'first_sample.name') {
//       return name_data
//     }
//     else if (dataset === 'dataset2') {
  
  
//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle("plot", "x", [x]);
//     Plotly.restyle("plot", "y", [y]);
//   }
  
//   init();
//   }
// // Call function to update the chart
//   updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }

// init();



