const DATA_PATH = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// "static/js/data/samples.json";

function getMetadata(subject_id) {
    d3.json(DATA_PATH).then((data)=> {
        console.log("We are in getMetadata");
        let metadata = selector.property("value");
        let subject_metadata = [];
        subject_ids.forEach((subject_id)=> {
            id: metadata.id;
            ethnicity: metadata.ethnicity;
            gender: metadata.gender;
            age: metadata.age;
            location: metadata.location;
            bbtype: metadata.bbtype;
            wfreq: metadata.wfreq;
        })
        [{
            
        }]
            
        return subject_metadata;
    })
};

function getBactdata(subject_id){
    d3.json(DATA_PATH).then((data)=> {
        console.log(data);


    })
};