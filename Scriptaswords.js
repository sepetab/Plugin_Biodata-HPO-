 var string = 'get all combinations'    
 var everyComb = [];
 var x;
    var sArray = string.split(' ');
    var n = sArray .length;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j <= i; j++) {
        everyComb.push(sArray.slice(j, n - i + j).join(' '));
      }
    }
    
    for (x of everyComb) {
    	console.log(x)
    }

