'use strict';

/*!
 * imports.
 */

var assert = require('env-accessors').assert;
var boolean = require('boolean');
var debug = require('debug')('env-newrelic');
var format = require('util').format;
var fs = require('fs');
var get = require('env-accessors').get;
var path = require('path');
var root = require('package.root');
var set = require('env-accessors').set;

/*!
 * exports.
 */

module.exports = load;

/*!
 * init.
 */

var env = get('NODE_ENV');
var tag = env ? format('-%s', env) : '';
var app = root.package.name + tag;

/**
 * Load `newrelic` module and set defaults (can override with `newrelic.js`).
 */

function load() {
  var settings = defaults();
  var disabled = boolean(get('NEW_RELIC_DISABLED'));

  // terminate if disabled.

  if (disabled) {
    debug('defaults:', settings);
    return settings;
  }

  // environment is configured for `newrelic` -- set defaults.

  assert('NEW_RELIC_LICENSE_KEY');
  settings.NEW_RELIC_ENABLED = true;
  debug('defaults:', settings);
  set(settings);

  try {
    return require('newrelic');
  } catch(e) {
    process.exit(1);
  }
}

/**
 * Build defaults object.
 */

function defaults() {
  var home = path.dirname(require.main.filename);
  return {
    NEW_RELIC_HOME: home,
    NEW_RELIC_ENABLED: false,
    NEW_RELIC_APP_NAME: app,
    NEW_RELIC_LOG_LEVEL: 'info',
    NEW_RELIC_NO_CONFIG_FILE: fs.existsSync(path.resolve(home, 'newrelic.js')) || true
  };
}
