#!/usr/bin/node

const [, , fileA] = process.argv;
let data =  require('fs').readFileSync(fileA, { encoding: 'utf-8' });

const matchers = {
  emails: RegExp(/\w+[\w\.]*@\w+[\w\.]+\.\w+/gi),
  phones: RegExp(/\(?\d{3}\)?[\.\-\s]\d{3}[\.\-\s]\d{4}/g),
  hashtags: RegExp(/#\w+/gi),
  cards: RegExp(/(\d{4}[\-\s]){3}\d{4}/g),
  currencies: RegExp(/\$\d{1,3}(,\d{3})*\.\d{2}/g),
};

let results = {
  emails: [],
  phones: [],
  hashtags: [],
  cards: [],
  currencies: [],
};

for(matcher in matchers){
  results[matcher] = [...data.match(matchers[matcher])];
}

console.log(JSON.stringify(results, null, 2));
