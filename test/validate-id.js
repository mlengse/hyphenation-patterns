#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');

var THRESHOLD = parseFloat(process.env.THRESHOLD || 90);

function loadHypher() {
    var candidates = [
        path.join(__dirname, '..', 'lib', 'node_modules', 'hypher', 'lib', 'hypher.js'),
        path.join(__dirname, '..', 'node_modules', 'hypher', 'lib', 'hypher.js')
    ];
    for (var i = 0; i < candidates.length; i += 1) {
        if (fs.existsSync(candidates[i])) {
            return require(candidates[i]);
        }
    }
    throw new Error('hypher engine not found. Run `npm install` inside lib/ first.');
}

function loadPatterns() {
    var patternFile = path.join(__dirname, '..', 'patterns', 'id.js');
    if (fs.existsSync(patternFile)) {
        return require(patternFile);
    }
    return require('hyphenation.id');
}

function loadTestSet() {
    var testFile = path.join(__dirname, 'data', 'id-test.json');
    return require(testFile).words;
}

var Hypher = loadHypher();
var patterns = loadPatterns();
var testSet = loadTestSet();
var hypher = new Hypher(patterns);

function checkDistSync() {
    var root = path.join(__dirname, '..');
    var parts = [
        'lib', 'patterns.browser.pre.js',
        'patterns', 'id.js',
        'lib', 'patterns.browser.post.js'
    ];
    var expected = '';
    for (var i = 0; i < parts.length; i += 2) {
        var file = path.join(root, parts[i], parts[i + 1]);
        if (!fs.existsSync(file)) {
            return false;
        }
        expected += fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    }
    var dist = path.join(root, 'dist', 'browser', 'id.js');
    if (!fs.existsSync(dist)) {
        return false;
    }
    return expected === fs.readFileSync(dist, 'utf8').replace(/\r\n/g, '\n');
}

var total = 0;
var correct = 0;
var failures = [];

Object.keys(testSet).sort().forEach(function (word) {
    var expected = testSet[word];
    var actual = hypher.hyphenate(word).join('-');
    total += 1;
    if (actual === expected) {
        correct += 1;
    } else {
        failures.push({ word: word, expected: expected, actual: actual });
    }
});

var accuracy = total > 0 ? (correct / total) * 100 : 0;
var distSynced = checkDistSync();

console.log('Hyphenation validation for id:');
console.log('  correct: ' + correct + '/' + total + ' (' + accuracy.toFixed(1) + '%)');
console.log('  threshold: ' + THRESHOLD.toFixed(1) + '%');
console.log('  dist/browser/id.js in sync with patterns/id.js: ' + (distSynced ? 'yes' : 'NO'));

if (failures.length > 0) {
    console.log('\nFailures:');
    failures.forEach(function (f) {
        console.log('  ' + f.word + ' -> ' + f.actual + ' (expected: ' + f.expected + ')');
    });
}

if (accuracy < THRESHOLD) {
    console.error('\nValidation FAILED: accuracy below threshold.');
    process.exit(1);
}

if (!distSynced) {
    console.error('\nValidation FAILED: dist/browser/id.js is out of sync with patterns/id.js. Run `make dist/browser/id.js` to rebuild.');
    process.exit(1);
}

console.log('\nValidation PASSED.');
