//import React from 'react';
import { Flux } from 'delorean';
import MdStore from '../stores/MdStore.js';

var request = require('superagent');
/*
 *
 */
var MdDispatcher = Flux.createDispatcher({
  getStores: function() {
    return { mds: MdStore };
  },

  loadMd: function(path) {
    var self = this;
    request
    .get(path)
    .end(function(err, res){
      if (err) {
        console.log(err);
        return false;
      }
      self.dispatch('incoming-md', res.text);
    });
  }
});
export default MdDispatcher;
