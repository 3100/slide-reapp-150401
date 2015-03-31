import MdDispatcher from '../dispatchers/MdDispatcher.js';

var MdAction = {
  initialLoadMds: function(paths) {
    MdDispatcher.loadMds(paths);
  },

  loadMd: function(path) {
    MdDispatcher.loadMd(path);
  }
};
export default MdAction;
