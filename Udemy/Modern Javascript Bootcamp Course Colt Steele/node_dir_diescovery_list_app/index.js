#!/usr/local/bin node

const fs = require('fs');
const chalk = require('chalk')
const path = require('path')

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();


fs.readdir(targetDir, async (err, filenames) => {

	if (err) {
		// Error Handling Here
		console.log(err);
		return;
	}
	const statPromises = filenames.map(filename => {
		return lstat(path.join(targetDir, filename));
	});

	const allStats = await Promise.all(statPromises);

	for (let stats of allStats) {
		const index = allStats.indexOf(stats);
		 
		console.log(stats.isFile()?chalk.blue(filenames[index]):chalk.red.bold(filenames[index]), stats.isFile());
	}

});

