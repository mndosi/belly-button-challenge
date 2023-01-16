const DATA_PATH = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// "static/js/data/samples.json";
function isMetadata_match(subject_id, metadata_element){
    let metadata_id = metadata_element["id"];
    return (subject_id === metadata_id);
}
// move get metadata to app.js line 96
// log function before 22 (getmetadata)
    d3.json(DATA_PATH).then((data)=> {
        let metadata_matches = data.metadata.filter(isMetadata_match);
        let subject_metadata = metadata_matches[0];
        // console.log(getMetadata)
        return subject_metadata;
        })     // closing .then


function getBactdata(subject_id){
    d3.json(DATA_PATH).then((data)=> {
        console.log(data);
        let



    })
};