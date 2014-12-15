# env-newrelic

[![Build Status](http://img.shields.io/travis/wilmoore/node-env-newrelic.svg)](https://travis-ci.org/wilmoore/node-env-newrelic) [![NPM version](http://img.shields.io/npm/v/env-newrelic.svg)](https://www.npmjs.org/package/env-newrelic) [![NPM downloads](http://img.shields.io/npm/dm/env-newrelic.svg)](https://www.npmjs.org/package/env-newrelic) [![LICENSE](http://img.shields.io/npm/l/env-newrelic.svg)](license)

> Load newrelic module only in specified environments.

    $ npm install env-newrelic --save

## Example

###### .env

    NEW_RELIC_ENVIRONMENTS="production,staging"
    NEW_RELIC_LICENSE_KEY="…"

###### add `env-newrelic` to your program.

    require('env-newrelic');

###### Start your program with `NODE_ENV` set to a value in `NEW_RELIC_ENVIRONMENTS`.

    NODE_ENV=staging npm start

## License

  [MIT](license)
