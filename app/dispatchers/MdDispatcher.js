//import React from 'react';
import { Flux } from 'delorean';
import MdStore from '../stores/MdStore.js';

var request = require('superagent');
var async = require('async');
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
  },

  loadMds: function(paths) {
    var mds = [];
    var funcs = paths.map((p,i) => {
      return function(cb) {
        request.get(p).end((err,res) => {
          mds.push(res.text);
          cb(err, i);
        });
      };
    });
    async.series(funcs, (err, results) => {
      if (err) {
        console.log(err)
      }
      this.dispatch('incoming-mds', mds);
    });
  }
});
export default MdDispatcher;
