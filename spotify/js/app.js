//switches interpreter into strict mode
"use strict";

var LAST_SEARCH_KEY = "lastSearchQuery";
//capital: act like constant, will never change again
//where did we define lastSearchQuery

//base search URL
var baseURL = "https://api.spotify.com/v1/search?type=track&q=";
//reference to our search form
var frmSearch = document.querySelector("#search-form");

//reference to the search box
var txtSearch = document.querySelector("#search-form input");
//use the input element inside the search form
txtSearch.value = localStorage.getItem(LAST_SEARCH_KEY);

//reference to search results div
var divResults = document.querySelector("#search-results");

//preview audio object
var previewAudio = new Audio();

//fucntion to be called when user does a search
function onSearch(evt) {
    //tell browser not to do default behavior
    evt.preventDefault();
    
    //get whatever is typed into the search input
    var searchQuery = txtSearch.value; 
    // console.log(searchQuery);
    
    //get jSON from Spotify
    jQuery.getJSON(baseURL + searchQuery)
    //the browser asynchronize
        .then(onSearchResults, onSearchError);
    
    //store the search query into local storage
    localStorage.setItem(LAST_SEARCH_KEY, searchQuery);
    
    //also tell browser not to submit the form
    return false;
}

function onSearchResults(data) {
    console.log(data);
    divResults.innerHTML = "";
    data.tracks.items.forEach(addTrack); 
}

function addTrack(track) {
    var img = document.createElement("IMG");
    img.src = track.album.images[0].url;
    divResults.appendChild(img);
    
    img.addEventListener("click", function(){
        //if same preview url..
        if(previewAudio.src === track.preview_url) {
            if (previewAudio.paused) {
                previewAudio.play();
            }
            else {
            //pause playback
            previewAudio.pause();
            }
        }
        else {
            //set the preview url
            previewAudio.src = track.preview_url;
            //play the preview
            previewAudio.play();
        }
    });
}

function onSearchError(response) {
    alert(response.responseJSON.error.message);
}

//tell browser to call onSearch when form is submitted
frmSearch.addEventListener("submit", onSearch);