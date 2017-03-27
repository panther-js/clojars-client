# clojars-client

[![Build Status](https://travis-ci.org/panther-js/clojars-client.svg?branch=master)](https://travis-ci.org/panther-js/clojars-client)
[![dependencies Status](https://david-dm.org/panther-js/clojars-client/status.svg)](https://david-dm.org/panther-js/clojars-client)

[![NPM](https://nodei.co/npm/clojars-client.png)](https://npmjs.org/package/clojars-client)

A simple client for the [clojars REST API](https://github.com/clojars/clojars-web/wiki/data#api).

|                 | Project Info  |
| --------------- | ------------- |
| License:        | MIT |
| Build:          | npm |
| Engines:        | Node.js 4.x, 6.x, 7.x |

## Installation

```bash
npm install clojars-client -S
```

## Usage

```javascript
const client = require('clojars-client');

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
```

## You can use to

* Get informations about a user.
* Get informations about a group.
* Get informations about a artifact.