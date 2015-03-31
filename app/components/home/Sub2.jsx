import React from 'react';
import Component from 'component';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import BackButton from 'reapp-ui/components/buttons/BackButton';

import Md from './Md';
import MdAction from '../../actions/MdAction.js';
import MdDispatcher from '../../dispatchers/MdDispatcher.js';

export default Component({
  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    var { router } = this.context;
    return (
      <View title={['Sub Route']}>
        <Button onTap={() => router.transitionTo('mdLoader', { slideId: 0})}>
          スタート
        </Button>
      </View>
    );
  }
});
