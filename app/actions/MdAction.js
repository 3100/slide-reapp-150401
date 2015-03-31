import MdDispatcher from '../dispatchers/MdDispatcher.js';

var MdAction = {
  initialLoadMds: function(paths) {
    for (var path of paths) {
      MdDispatcher.loadMd(path);
    }
  }
};
export default MdAction;
