import React from 'react';
import Component from 'component';

global.React = require('react');
var md2react = require('md2react');

export default Component({
  render() {
    var md = this.props.md != null ? this.props.md : 'error';
    return md2react(md);
  }
});
