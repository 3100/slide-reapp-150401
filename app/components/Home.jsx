import React from 'react';
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

import MdLoader from './MdLoader';
import MdAction from '../actions/MdAction.js';
import MdDispatcher from '../dispatchers/MdDispatcher.js';

var icon = require('../../assets/images/profile.jpg');
const url = "https://3100.github.io/";

export default Component({
  mixins: [
    RoutedViewListMixin
  ],

  getDefaultProps() {
    return {
      dispatcher: MdDispatcher,
      slideCount: 3
    };
  },

  getInitialState() {
    return { step: 0};
  },

  render() {
    var paths = [];
    for (var i = 1; i <= this.props.slideCount; ++i) {
      var path = '../../assets/mds/slide' + i + '.md';
      paths.push(path);
    }
    const dispatcher = this.props.dispatcher;
    const backButton =
      <BackButton onTap={() => this.setState({step: this.state.step - 1})} />;

    return (
      <Theme {...theme}>
        <NestedViewList {...this.routedViewListProps()}
          scrollToStep={this.state.step}>
          <View>
            <MdLoader path={paths[0]} index="0" dispatcher={dispatcher} />
            <Button onTap={() => this.setState({step: 1})}>次へ</Button>
          </View>
          <View title={[backButton, '']}>
            <MdLoader path={paths[1]} index="1" dispatcher={dispatcher} />
            <Button onTap={() => this.setState({step: 2})}>次へ</Button>
          </View>
          <View title={[backButton, '']}>
            <MdLoader path={paths[2]} index="2" dispatcher={dispatcher} />
            <Button onTap={() => this.setState({step: 0})}>次へ</Button>
          </View>
          {this.childRouteHandler()}
        </NestedViewList>
      </Theme>
    );
  }
});
