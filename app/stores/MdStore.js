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
  setAll: function(mds) {
    this.slides = mds;
    this.emit('change');
  },
  actions: {
    'incoming-md': 'append',
    'incoming-mds': 'setAll'
  }
});

export default MdStore;
