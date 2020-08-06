const fs = require("fs");

const axios = require("axios");

const text = document.getElementById("text");
const button = document.getElementById("btn");

button.addEventListener("click", getRandomText);

let content;

function getRandomText() {
    axios.get("https://loripsum.net/api/1/short/headers").then((res) => {
    const textData = res.data;
    text.innerHTML = textData;
    content = textData;

    fs.writeFile("/Users/chia/Desktop/example.txt", content, (err)=> {
      if (err){
        console.log("error", err.message);
        return;
      }
      alert('file succesfully written')
    })


    return content
  });
}