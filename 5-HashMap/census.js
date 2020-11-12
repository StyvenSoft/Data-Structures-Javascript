const HashMap = require('./collision');

const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck', 'Central Park Pond');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');

console.log(birdCensus.retrieve('mandarin duck'));
console.log(birdCensus.retrieve('monk parakeet'));
console.log(birdCensus.retrieve('horned owl'));

// Storing Central Park Pond at index 5
// Storing Brooklyn College at index 10
// Storing Pelham Bay Park at index 6

// Retrieving Central Park Pond from index 5
// Central Park Pond

// Retrieving Brooklyn College from index 10
// Brooklyn College

// Retrieving Pelham Bay Park from index 6
// Pelham Bay Park
