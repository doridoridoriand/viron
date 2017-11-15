import { constants as mutations } from '../mutations';
import exporter from './exporter';

export default exporter('location', {
  /**
   * 更新します。
   * @param {riotx.Context} context
   * @param {Object} obj
   * @return {Promise}
   */
  update: (context, obj) => {
    return Promise
      .resolve()
      .then(() => {
        context.commit(mutations.LOCATION, obj);
      });
  }
});
