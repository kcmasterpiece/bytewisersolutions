
process.stdin.on('readable', () => {
	var chunk = process.stdin.read();
	if (chunk !== null) {
		const buf = Buffer(chunk.length);
		for ( var i = 0; i < chunk.length; i++) {
			//chunk[i] == 46 ? buf[i] = 33 : buf[i] = chunk[i];
			if (chunk[i] == 46) {
				buf.write('!', i);
			} else {
				buf[i] = chunk[i];
			}
		}
		console.log(buf);
	}
});
