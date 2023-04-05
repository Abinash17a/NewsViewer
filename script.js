
const container =document.querySelector(".container");

const optionsContainer=document.querySelector(".options-container");

let srch="general";
//100 req
let requestURL;
//create card from data 
const generateUI = (results)=>{
    for(let item of results){
        let card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `<div class="news-image-container">
        <img src="newsimage.webp" alt="" />
        </div>
        <div class="news-content">
            <div class="news-title">
            ${item.title}
            </div>
            <div class="news-description">
            ${item.description ||""}
            </div>

            <a href ="${item.link}" target="_blank"
            class="view-button">Read more </a>
        </div>`;
        container.appendChild(card);
    }
};
//news API Call
const getNews = async ()=> {
    container.innerHTML="";
    let response=await fetch(requestURL);
    if(!response.ok){
        alert("Data unavailable at the moment");
        return false;
    }
    let data = await response.json();
    generateUI(data.results);
};

const init=()=>{
    getNews();
    // createOptions();
};

window.onload=()=>{
    requestURL =  `https://newsdata.io/api/1/news?apikey=pub_20080e72d2296eb29ef3b9724ae9386da3d1a&language=en&q=${srch}`
    init();
}
var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(event.target.value);
    (async ()=> {
        container.innerHTML="";
        let response=await fetch(`https://newsdata.io/api/1/news?apikey=pub_20080e72d2296eb29ef3b9724ae9386da3d1a&language=en&q=${event.target.value}`);
        if(!response.ok){
            alert("Data unavailable at the moment");
            return false;
        }
        let data = await response.json();
        generateUI(data.results);
    })();
     
  }
});



// let apiKey="370bfcf9e01640aeb7b2db3728d2a5bd"
//NEWSAPI.IN--iliUZmLBstwvivQECGQ7jonShbY6SK

