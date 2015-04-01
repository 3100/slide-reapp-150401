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
    var id = parseInt(this.context.router.getCurrentParams().slideId);
    var md = this.props.dispatcher.stores.mds.slides[id];
    var { router } = this.context;
    var backButton =
      <BackButton onTap={() => window.history.back()} />;

    var hasNext = this.props.slideMaxIndex > id;
    return (
      <View {...this.props} title={[backButton, '']}>
        <Md md={md} />
        { hasNext &&
          <Button onTap={() => router.transitionTo('mdLoader', {slideId: id + 1})}>
            次へ
          </Button>
        }
        { !hasNext &&
          <Button onTap={() => router.transitionTo('sub2')}>
            最初へ
          </Button>
        }
      </View>
    );
  }
});
