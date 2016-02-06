#!/usr/bin/env node

'use strict';

const args = process.argv
    , cp = require('child_process')
    , chalk = require('chalk')
    , startTime = process.hrtime()
    , runner = cp.spawn(args[2], args.slice(3));

let returnValue;

runner.stdout.on('data', (data) => {
    returnValue = data.toString('utf8').split('|').pop();
});

runner.stderr.on('data', (data) => {
    console.log(chalk.red(data.toString('utf8')));
});

runner.on('close', (code) => {
    const time = process.hrtime(startTime)
        , nanos = time[0] * 1e9 + time[1]
        , timeOutput = `\n ${nanos} nanoseconds
 ${nanos / 1000000} milliseconds
 ${nanos / 1000000000} seconds`;

    console.log(`Command ran in: ${chalk.green(timeOutput)}`);
    console.log(`Final Return: ${chalk.yellow(returnValue)}`);
    console.log(`Exit Code Return: ${chalk.red(code)}`);
});