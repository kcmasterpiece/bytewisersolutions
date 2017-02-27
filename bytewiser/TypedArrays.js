process.stdin.on('data', (data) => {
	var array = new Uint8Array(data);
	console.log(JSON.stringify(array));
});

