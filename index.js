'use strict';

const roi = require('roi');

const BASE_URL = 'https://clojars.org/api/';

const user = (u) => roi.get({ endpoint: `${BASE_URL}users/${u}` });
const group = (g) => roi.get({ endpoint: `${BASE_URL}groups/${g}` });
const artifact = (a) => roi.get({ endpoint: `${BASE_URL}artifacts/${a}` });
const groupArtifact = (g, a) => roi.get({ endpoint: `${BASE_URL}artifacts/${g}/${a}` });
const search = (term) => roi.get({ endpoint: `https://clojars.org/search?q=${term}&format=json` });

module.exports = {
  user,
  group,
  artifact,
  groupArtifact,
  search
};
