'use strict';

const test = require('tape');
const client = require('../index');

test('user.', (t) => {
  client.user('toby')
    .then(response => {
      const content = JSON.parse(response.body);
      t.equal(content.groups[0], 'org.clojars.toby', 'toby found.');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});

test('group.', (t) => {
  client.group('org.clojars')
    .then(response => {
      const content = JSON.parse(response.body);
      t.equal(content[0].group_name, 'org.clojars', 'org.clojars found.');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});

test('artifact.', (t) => {
  client.artifact('leiningen')
    .then(response => {
      const content = JSON.parse(response.body);
      t.equal(content.jar_name, 'leiningen', 'leiningen found.');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});
