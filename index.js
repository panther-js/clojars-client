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

function groupArtifact (g, a) {
  return roi.get({ endpoint: `${BASE_URL}artifacts/${g}/${a}` });
}

function search (term) {
  return roi.get({ endpoint: `https://clojars.org/search?q=${term}&format=json` });
}

module.exports = {
  user,
  group,
  artifact,
  groupArtifact,
  search
};
