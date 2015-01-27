# env-newrelic

[![Build Status](http://img.shields.io/travis/wilmoore/node-env-newrelic.svg)](https://travis-ci.org/wilmoore/node-env-newrelic) [![NPM version](http://img.shields.io/npm/v/env-newrelic.svg)](https://www.npmjs.org/package/env-newrelic) [![NPM downloads](http://img.shields.io/npm/dm/env-newrelic.svg)](https://www.npmjs.org/package/env-newrelic) [![LICENSE](http://img.shields.io/npm/l/env-newrelic.svg)](license)

> Load newrelic in a 12-factor environment with sane defaults.

    $ npm install env-newrelic --save

## Why?

0. You avoid writing and maintaining the following:

        if (process.env.NODE_ENV === 'production') require('newrelic');

    > With the above methodology, you'll be forced to push code to change behavior that should be configuration driven. See **The Twelve-Factor App** page titled [Store config in the environment].

0. You avoid configuring a `newrelic.js` file for each app and start with sane defaults

        NEW_RELIC_HOME = Project Root Directory
        NEW_RELIC_ENABLED = true
        NEW_RELIC_APP_NAME = `package.name` + `-` + `process.env.NODE_ENV`
        NEW_RELIC_LOG_LEVEL = 'info'

## How it works

##### Enable

Set the `NEW_RELIC_LICENSE_KEY` environment variable.

##### Disable

Set the `NEW_RELIC_DISABLED` environment variable to a truthy value (i.e. `true`, `yes`, `1`, etc.).

##### Initialize

    require('env-newrelic')()
    # or
    var newrelic = require('env-newrelic')()

> `NEW_RELIC_NO_CONFIG_FILE` will be set to `true` if a `newrelic.js` file is found in your package root.

A list of more environment variables can be found in the documentation page [Configuring Node.js with environment variables].

## Overrides (newrelic.js)

While the environment variables make using a `newrelic.js` file optional, there may be situations where you need it. A list of more configuration parameters can be found in the documentation page [Node.js agent configuration](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration).

## Example Configuration

For most apps, a `newrelic.js` file is not needed

###### .env

    NEW_RELIC_LICENSE_KEY="…"

###### .env.test

    NEW_RELIC_DISABLED=true

## More Configuration

- [Configuring Node.js with environment variables]
- [Store config in the environment]

## License

  [MIT](license)


[Configuring Node.js with environment variables]: https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/configuring-nodejs-environment-variables
[Store config in the environment]: http://12factor.net/config
