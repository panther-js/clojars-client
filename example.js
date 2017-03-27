const client = require('./index');

client.user('toby')
.then(response => {
  console.log(response.body);
})
.catch(console.log);

client.group('org.clojars')
.then(response => {
  console.log(response.body);
})
.catch(console.log);

client.artifact('leiningen')
.then(response => {
  console.log(response.body);
})
.catch(console.log);

client.groupArtifact('org.clojars', 'xeqi')
.then(response => {
  console.log(response.body);
})
.catch(console.log);

client.search('lein')
.then(response => {
  console.log(response.body);
})
.catch(console.log);
