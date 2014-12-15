'use strict';

/*!
 * imports.
 */

var allowed = require('env-allowed');
var assert = require('env-accessors').assert;
var debug = require('debug')('env-newrelic');
var fs = require('fs');
var path = require('path');
var root = require('package.root');
var set = require('env-accessors').set;

/*!
 * exports.
 */

module.exports = load;

/**
 * Load `newrelic` module and set defaults (can override with `newrelic.js`).
 */

function load() {
  var settings = defaults();

  // environment not configured for `newrelic`.

  if (!allowed('NEW_RELIC_ENVIRONMENTS')) {
    debug(settings);
    return settings;
  }

  // environment is configured for `newrelic` -- set defaults.

  assert('NEW_RELIC_LICENSE_KEY');
  settings.NEW_RELIC_ENABLED = true;
  debug(settings);
  set(settings);
  return require('newrelic');
}

/**
 * Build defaults object.
 */

function defaults() {
  var home = path.dirname(require.main.filename);
  return {
    NEW_RELIC_HOME: home,
    NEW_RELIC_ENABLED: false,
    NEW_RELIC_APP_NAME: root.name,
    NEW_RELIC_LOG_LEVEL: 'info',
    NEW_RELIC_NO_CONFIG_FILE: fs.existsSync(path.resolve(home, 'newrelic.js')) || true
  };
}
