var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, (err, data) => {
	var buf = Buffer(data.length);
	var offset = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i] == 10) {
			console.log(buf);
			buf = Buffer(data.length);
			offset = 0;
		} else {
			buf.writeInt8(data[i], offset);
			offset++;
		}

		if (i + 1 == data.length) console.log(buf);

});

