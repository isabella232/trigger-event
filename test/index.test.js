'use strict';

var assert = require('proclaim');
var bind = require('component-event').bind;
var trigger = require('../lib');

describe('trigger-event', function() {
  beforeEach(function() {
    this.el = document.createElement('div');
  });

  it('should trigger a click event', function(done) {
    bind(this.el, 'click', function(e) {
      assert(e.ctrlKey === true);
      done();
    });
    trigger(this.el, 'click', { ctrl: true });
  });

  it('should trigger a dblclick event', function(done) {
    bind(this.el, 'dblclick', function(e) {
      assert(e.ctrlKey === true);
      done();
    });
    trigger(this.el, 'dblclick', { ctrl: true });
  });

  it('should trigger a keydown event', function(done) {
    bind(this.el, 'keydown', function(e) {
      assert(e.keyCode === 27);
      done();
    });
    trigger(this.el, 'keydown', { key: 'esc' });
  });

  it('should trigger a keyup event', function(done) {
    bind(this.el, 'keyup', function(e) {
      assert(e.keyCode === 27);
      done();
    });
    trigger(this.el, 'keyup', { key: 'esc' });
  });
});
