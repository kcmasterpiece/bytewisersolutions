var buf = Buffer(0);
process.stdin.on('data', (data) => {
	buf = Buffer.from(buf + data);

}).on('end', () => { console.log(buf);});

