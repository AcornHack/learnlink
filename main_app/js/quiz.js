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
  reDrawUI();
  });
// })
console.log(links);

function reDrawUI(arr) {
  var ids = [];
  var titles = [];
  var urls = [];
  console.log(links);
  for (let i = 0; i < links.length; i++) {
    console.log(links[i]);
          var t = 100*i;
           $("#links").append('<a href="'+links[i][0]+'" ><li class="hidden">'+"Learn from a hand picked resource"+'</li></a>');
           $("#links").append('<a href="'+links[i][1]+'" ><li class="hidden">'+"Learn from a hand picked resource"+'</li></a>');
           $("#links li").last().delay(t).fadeIn(300)
        }
  }


// TODO: append elements to HTML, style HTML, get resources,
