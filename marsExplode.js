
function marsExploration(s) {
	var arr = s.split('');
	var num = 0;
	for(var i=0; i<arr.length; i++) {
		var t = arr[i];
		var sos = 'SOS'.split('');
		if(t !== sos[i%3])
			num++;
	}

	return num;
}

var s = 'SOSSPSSQSSOR';
var out = marsExploration(s);
console.log(out);
