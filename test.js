'use strict';

/*!
 * imports.
 */

var test = require('tape');
var envc = require('envc')();

/*!
 * imports (local).
 */

var newrelic = require('./');

/*!
 * setup.
 */

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'test';
}

function reset() {
  delete process.env.NEW_RELIC_ENABLED;
  delete process.env.NEW_RELIC_DISABLED;
  delete process.env.NEW_RELIC_LICENSE_KEY;
}

function enable() {
  process.env.NEW_RELIC_LICENSE_KEY = process.env.LICENSE_KEY;
}

function disable() {
  delete process.env.NEW_RELIC_ENABLED;
  process.env.NEW_RELIC_DISABLED = true;
}

/*!
 * tests.
 */

test('enabled by default', function (t) {
  enable();
  var agent = newrelic();

  t.assert(process.env.NEW_RELIC_ENABLED);

  reset();
  t.end();
});

test('disabled when NEW_RELIC_DISABLED is set', function (t) {
  disable();
  var agent = newrelic();

  t.false(process.env.NEW_RELIC_ENABLED);

  reset();
  t.end();
});

test('enabled by environment and key', function (t) {
  enable();
  var agent = newrelic();

  t.assert(agent.setTransactionName);
  t.assert(process.env.NEW_RELIC_ENABLED);

  reset();
  t.end();
});
