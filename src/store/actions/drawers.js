import { constants as mutations } from '../mutations';
import exporter from './exporter';

export default exporter('drawers', {
  /**
   * ドローワーを追加します。
   * @param {riotx.Context} context
   * @param {String} tagName
   * @param {Object} tagOpts
   * @param {Object} drawerOpts
   * @return {Promise}
   */
  add: (context, tagName, tagOpts, drawerOpts) => {
    return Promise
      .resolve()
      .then(() => {
        context.commit(mutations.DRAWERS_ADD, tagName, tagOpts, drawerOpts);
      });
  },

  /**
   * ドローワーを削除します。
   * @param {riotx.Context} context
   * @param {String} drawerId
   * @return {Promise}
   */
  remove: (context, drawerId) => {
    return Promise
      .resolve()
      .then(() => {
        context.commit(mutations.DRAWERS_REMOVE, drawerId);
      });
  }
});
