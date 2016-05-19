'use strict';

/**
 * Module dependencies.
 */

var create = require('@segment/create-event');

/**
 * Trigger an event of `type` on an `el` with `options`.
 *
 * @param {Element} el
 * @param {string} type
 * @param {Object} options
 */
function trigger(el, type, options) {
  // default el is `document`
  if (typeof el === 'string') {
    options = type;
    type = el;
    el = document;
  }

  var e = create(type, options);
  el.dispatchEvent ? el.dispatchEvent(e) : el.fireEvent('on' + type, e);
}

/*
 * Exports.
 */

module.exports = trigger;
