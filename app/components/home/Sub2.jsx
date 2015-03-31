import React from 'react';
import Component from 'component';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import BackButton from 'reapp-ui/components/buttons/BackButton';

import Md from '../Md';
import MdAction from '../../actions/MdAction.js';
import MdDispatcher from '../../dispatchers/MdDispatcher.js';

export default Component({
  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillMount() {
    var i = this.context.router.getCurrentParams().slideId;
    var path = '../../../assets/mds/slide' + i + '.md';
    MdAction.loadMd(path);
    this.setState({i: i});
  },

  getDefaultProps() {
    return {md: 'empty'};
  },

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />;
    var ii = parseInt(this.state.i);
    return (
      <View {...this.props} title={[backButton, 'Sub Route']}>
        <Md md={MdDispatcher.stores.mds.slides[ii - 1]} />
        <Button onTap={() => this.context.router.transitionTo('sub2', { slideId: ii + 1})}>
          次のページへ
        </Button>
      </View>
    );
  }
});
