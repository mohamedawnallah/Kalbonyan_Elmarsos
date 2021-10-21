#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');
const fs = require('fs');
const { spawn } = require('child_process');
const chalk = require('chalk');
program.version('0.0.1').argument('[filename]', 'Name of a file to execute').action(async ({ filename }) => {
	const name = filename || 'index.js';
	try {
		await fs.promises.access(name);
	} catch (err) {
		throw new Error(`Could not find the file ${name}`);
	}
	//Inside The Hood
	//let timeId  undefined
	//if timeId Defined clearTime Out
	//and runs a timer for second delay so-on and so force
	let proc;
	const start = debounce(() => {
		if (proc) {
			proc.kill();
		}
		console.log(chalk.bold('>>>> Starting Process..'));
		proc = spawn('node', [ name ], { stdio: 'inherit' });
	}, 100);

	// One-liner for current directory
	chokidar.watch('.').on('add', start).on('change', start).on('unlink', start);
});

program.parse(process.argv);
