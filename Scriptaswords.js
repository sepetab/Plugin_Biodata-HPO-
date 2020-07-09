
function str2words(string){
  var everyComb = [];
  var x;
    var sArray = string.split(' ');
    var n = sArray .length;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j <= i; j++) {
        var temp = trim(sArray.slice(j, n - i + j).join(' '));
        if(temp.split(' ').length > 1 && temp.split(' ').length < 4){
          everyComb.push(temp);
        }
      }
    }
    return everyComb;
}

function revolt(para){
  var FinalArray = [];
  var strings = [];
  var words = [];
  strings = para.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
  for (var iter of strings){
      words = str2words(iter);
      for(var word of words){
        FinalArray.push(word);
      }
  }
  return FinalArray;
}

function trim(str){
  if(!str) return str;
  var result = str.replace(/^\s+/g, '');
  return  result.replace(/\s+$/g, '');
}

arrofs = revolt("I have an issue where I'm connected to mobile data (slow connection) and also on audio-only mode. But, my offline playlist (downloaded) is buffering which is absurd as I don't expect it to stream all the time from your servers.");
for(var y of arrofs){
    console.log(y);
}
