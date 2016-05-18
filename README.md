# trigger-event

[![CircleCI](https://circleci.com/gh/segmentio/trigger-event.svg?style=shield&circle-token=0d98038699b995abf973952c9bf31eabda64de17)](https://circleci.com/gh/segmentio/trigger-event)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/trigger-event/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/trigger-event)

Programmatically trigger a DOM event. Useful for testing mostly.

## Installation

```sh
$ npm install @segment/trigger-event
```

## Example
  
```js
var trigger = require('trigger-event');
trigger(button, 'click', { meta: true });
trigger(document, 'keydown', { key: 'enter' });
```

Shorthand for keys:

```js
trigger('keydown', { key: 'enter' })
```

## API

### trigger(type, [element], [options])

Types:

```js
'click'
'dblclick'
'keydown'
'keyup'
```

Element will default to `document` if none is provided.

Default `options`:

```js
alt        : false,
bubbles    : true,
button     : 0,
cancelable : true,
clientX    : 0,
clientY    : 0,
ctrl       : false,
detail     : 1,
key        : 0, // can be a string like 'enter' for convenience
meta       : false,
screenX    : 0,
screenY    : 0,
shift      : false,
view       : window
```
