import React from 'react';
import Component from 'component';
import Button from 'reapp-ui/components/Button';
import Card from 'reapp-ui/components/Card';
import Icon from 'reapp-ui/components/Icon';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Theme from 'reapp-ui/helpers/Theme';
import theme from 'theme/theme';

import Md from './Md';

global.React = require('react');
var md2react = require('md2react');

var icon = require('../../assets/images/profile.jpg');
const url = "https://3100.github.io/";

export default Component({
  mixins: [
    RoutedViewListMixin
  ],

  render() {
    var profile = <div><p>presented by <a href={url}><img src={icon} width="100px" height="100px" /></a></p></div>;
    var md = md2react('# Hello md2react');
    return (
      <Theme {...theme}>
        <NestedViewList {...this.routedViewListProps()}>
          <View title="Reactについて">
            <Md md='# Hello md2react!!' />
            <Card title="Reactの簡単な紹介" children={profile} />
            <Button onTap={() => this.context.router.transitionTo('sub')}>
              次のページへ
            </Button>
          </View>
          {this.childRouteHandler()}
        </NestedViewList>
      </Theme>
    );
  }
});
