import React from 'react';
import { Route, RouteHandler } from 'react-router';
import Component from 'component';
import Button from 'reapp-ui/components/Button';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Card from 'reapp-ui/components/Card';
import Icon from 'reapp-ui/components/Icon';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Theme from 'reapp-ui/helpers/Theme';
import theme from 'theme/theme';
import { Flux } from 'delorean';

import MdLoader from './home/MdLoader';
import MdAction from '../actions/MdAction.js';
import MdDispatcher from '../dispatchers/MdDispatcher.js';

var icon = require('../../assets/images/profile.jpg');
const url = "https://3100.github.io/";

var Home = Component({
  contextTypes: {
    router: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      dispatcher: MdDispatcher,
      slideMaxIndex: 7
    };
  },

  statics: {
    loadMds: function() {
      var paths = [0,1,2,3,4,5,6,7].map((i) => {
        return '../../assets/mds/slide' + i + '.md';
      });
      MdAction.initialLoadMds(paths);
    }
  },

  render() {
    return (
      <Theme {...theme}>
        <RouteHandler {...this.props} />
      </Theme>
    );
  }
});

Home.loadMds();
export default Home;
