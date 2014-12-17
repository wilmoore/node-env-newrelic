# env-newrelic

[![Build Status](http://img.shields.io/travis/wilmoore/node-env-newrelic.svg)](https://travis-ci.org/wilmoore/node-env-newrelic) [![NPM version](http://img.shields.io/npm/v/env-newrelic.svg)](https://www.npmjs.org/package/env-newrelic) [![NPM downloads](http://img.shields.io/npm/dm/env-newrelic.svg)](https://www.npmjs.org/package/env-newrelic) [![LICENSE](http://img.shields.io/npm/l/env-newrelic.svg)](license)

> Load newrelic in a 12-factor environment with sane default.

    $ npm install env-newrelic --save

## Why?

So you don't have to do this:

    if (process.env.NODE_ENV === 'production') {
      require('newrelic');
    }

With the above methodology, you'll be forced to push a code change for something that should be configuration driven.

See **The Twelve-Factor App** page titled [Store config in the environment](http://12factor.net/config).

## How it works

- You set environment variables:
  - `NEW_RELIC_LICENSE_KEY`
  - `NEW_RELIC_ENVIRONMENTS`
- Initialize with:
  - `require('env-newrelic')()`.
  - or `var newrelic = require('env-newrelic')()`.

## Defaults

Once initialized, the following the following environment variables will be set:

    NEW_RELIC_HOME = PACKAGE ROOT
    NEW_RELIC_ENABLED = true
    NEW_RELIC_APP_NAME = package.name
    NEW_RELIC_LOG_LEVEL = 'info'
    NEW_RELIC_NO_CONFIG_FILE = true

> `NEW_RELIC_NO_CONFIG_FILE` is `true` if a `newrelic.js` file is found in your package root.

A list of more environment variables can be found in the documentation page [Configuring Node.js with environment variables](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/configuring-nodejs-environment-variables).

## Overrides (newrelic.js)

While the environment variables make using a `newrelic.js` file optional, there may be situations where you need it. A list of more configuration parameters can be found in the documentation page [Node.js agent configuration](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration).

## Example

For most common scenarios, a `newrelic.js` file is not needed and can be configured as follows:

###### .env

    NEW_RELIC_ENVIRONMENTS="production,staging"
    NEW_RELIC_LICENSE_KEY="…"

###### add `env-newrelic` to your program.

    require('env-newrelic');

###### Start your program with `NODE_ENV` set to a value in `NEW_RELIC_ENVIRONMENTS`.

    NODE_ENV=staging npm start

## License

  [MIT](license)
