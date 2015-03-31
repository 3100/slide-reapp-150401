import React from 'react';
import Component from 'component';
import { Flux } from 'delorean';

import Md from './Md';
import MdAction from '../actions/MdAction.js';

export default Component({
  mixins: [
    Flux.mixins.storeListener
  ],

  getDefaultProps() {
    return {
      index: '0',
      path: '',
      dispatcher: null
    };
  },

  componentWillMount() {
    MdAction.loadMd(this.props.path);
  },

  render() {
    //var md = this.getStore('mds').slides[parseInt(this.props.index)];
    var md = this.props.dispatcher.stores.mds.slides[parseInt(this.props.index)];
    return <Md md={md} />;
  }
});
