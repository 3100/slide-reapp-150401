import { Flux } from 'delorean';

/*
 * MdStore contains some markdown data.
 */
var MdStore = Flux.createStore({
  slides: [],
  append: function(md) {
    this.slides.push(md);
    this.emit('change');
  },

  actions: {
    'incoming-md': 'append'
  }
});

export default MdStore;
