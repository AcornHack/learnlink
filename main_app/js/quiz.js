var arr = []; //it will store the data from the last player
var links = []; //it will store the links to be displayed

function validator() {
  for (var prop in rightAnswers) {
    if (rightAnswers.hasOwnProperty(prop)) {
      if(!arr.includes(rightAnswers[prop].answer)){
        links.push(rightAnswers[prop].URL);
      }
    }
  }
}

// $(".json").on("click",function(){
  var spreadsheetID = "1_n14MpRd259Ms5cYbMI6KEGOimfcdMc22dBpT4gkAxY";
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/oepkzao/public/values?alt=json";
  // make JSON call to Google Data API
  $.getJSON(url, function(data) {
   //mine data!
    var lastData = data.feed.entry[data.feed.entry.length-1];
    Object.keys(lastData).forEach(function(prop){
      if(/gsx\$(x|_)/.test(prop)){
        arr.push(lastData[prop]['$t']);
      }
    });
  validator();
  });
// })
console.log(links);

// TODO: append elements to HTML, style HTML, get resources,
