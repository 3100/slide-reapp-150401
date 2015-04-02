import React from 'react';
import Component from 'component';
import View from 'reapp-ui/views/View';
import Modal from 'reapp-ui/components/Modal';
import Card from 'reapp-ui/components/Card';
import Button from 'reapp-ui/components/Button';
import BackButton from 'reapp-ui/components/buttons/BackButton';

import Md from './Md';
import MdAction from '../../actions/MdAction.js';
import MdDispatcher from '../../dispatchers/MdDispatcher.js';

var messages = [
  {
    title: '決済完了のお知らせ',
    children: 'コンテンツをご購入いただきありがとうございます。後日クレジットカードより引き落としをさせていただきます。'
  },
  {
    title: '警告',
    children: 'エボラウイルスが検出されました。至急この端末を窓からなげすてるんだ！'
  },
  {
    title: '犯行予告',
    children: '残念だが、今日のマグロは既に全ていただいた。'
  },
  {
    title: '通信',
    children: '大佐、こちら#deviplに潜入した。指示を乞う、どうぞ。'
  }
];

export default Component({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState() {
    return { modal: false };
  },

  getRandomInt() {
    var max = messages.length - 1;
    return Math.floor(Math.random() * (max + 1));
  },

  randomMessage() {
    return messages[this.getRandomInt()];
  },

  toggleModal(type) {
    this.setState({ modal: type });
  },

  render() {
    var { router } = this.context;
    var message = this.randomMessage();
    return (
      <View title={['はじめてのreapp']}>
        {this.state.modal &&
          <Modal
            title={message['title']}
            children={message['children']}
            type={this.state.modal}
            onClose={() => {
              this.toggleModal(false);
              router.transitionTo('mdLoader', { slideId: 0});
            }}
          />
          }
        <Button onTap={() => this.toggleModal('alert')}>
          スタート
        </Button>
      </View>
    );
  }
});
