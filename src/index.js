import EventEmitter from 'events';

import { setPromisesDependency, getPromisesDependency } from './utils';
import { main, readyFreddy, getEnv, getValue, setValue, apifyClient, call } from './actor';
import { browse } from './browser';

/* globals module */

// Publicly available functions
const Apify = {
    main,
    getEnv,
    getValue,
    setValue,
    call,
    readyFreddy,
    setPromisesDependency,
    getPromisesDependency,
    browse,
    client: apifyClient,
    events: new EventEmitter(),
};

// export this way so that we can import using:
// const Apify = require('apify');
module.exports = Apify;
