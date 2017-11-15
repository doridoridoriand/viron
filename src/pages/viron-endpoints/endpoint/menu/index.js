import '../../../../components/viron-error/index.tag';
import './edit/index.tag';
import './qrcode/index.tag';

export default function() {
  const store = this.riotx.get();

  this.handleEditButtonTap = () => {
    Promise
      .resolve()
      .then(() => store.action('modals.add', 'viron-endpoints-page-endpoint-menu-edit', {
        endpoint: this.opts.endpoint
      }))
      .then(() => {
        this.close();
      })
      .catch(err => store.action('modals.add', 'viron-error', {
        error: err
      }));
  };

  this.handleDeleteButtonTap = () => {
    Promise
      .resolve()
      .then(() => store.action('endpoints.remove', this.opts.endpoint.key))
      .then(() => store.action('toasts.add', {
        message: 'エンドポイントを削除しました。'
      }))
      .then(() => {
        this.close();
      })
      .catch(err => store.action('modals.add', 'viron-error', {
        error: err
      }));
  };

  this.handleQRCodeButtonTap = () => {
    Promise
      .resolve()
      .then(() => store.action('modals.add', 'viron-endpoints-page-endpoint-menu-qrcode', {
        endpoint: this.opts.endpoint
      }))
      .then(() => {
        this.close();
      })
      .catch(err => store.action('modals.add', 'viron-error', {
        error: err
      }));
  };

  this.handleSignoutButtonTap = () => {
    Promise
      .resolve()
      .then(() => store.action('auth.remove', this.opts.endpoint.key))
      .then(() => store.action('toasts.add', {
        message: 'ログアウトしました。'
      }))
      .then(() => {
        this.close();
      })
      .catch(err => store.action('modals.add', 'viron-error', {
        error: err
      }));
  };
}
