
const csvFilePath="C:/Users/marcus.seidefors/Desktop/webbutveckling/exel/krona.csv"
const csv=require('csvtojson')
const fs=require("fs")


csv()
.fromFile(csvFilePath)
.then((jsonData)=>{


    // stringify JSON Object
    var jsonContent = JSON.stringify(jsonData);
    console.log(jsonContent);

    fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("You got an error while downloading the file");
            return console.log(err);
        }

        console.log("JSON file has been saved and completed.");
    });
})

const jsonArray=csv().fromFile(csvFilePath);
