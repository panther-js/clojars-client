'use strict';

const roi = require('roi');

const BASE_URL = 'https://clojars.org/api/';

function user (u) {
  return roi.get({ endpoint: `${BASE_URL}users/${u}` });
}

function group (g) {
  return roi.get({ endpoint: `${BASE_URL}groups/${g}` });
}

function artifact (a) {
  return roi.get({ endpoint: `${BASE_URL}artifacts/${a}` });
}

module.exports = {
  user,
  group,
  artifact
};
