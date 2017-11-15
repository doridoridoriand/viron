import '../components/atoms/viron-message/index.tag';

export default function() {
  const store = this.riotx.get();

  // ドラッグ開始時の処理。
  this.handleDragStart = e => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.opts.endpoint.key);

    Promise
      .resolve()
      .then(() => store.action('application.startDrag'))
      .catch(err => store.action('modals.add', 'viron-message', {
        error: err
      }));
  };

  // ドラッグしている間の処理。
  this.handleDrag = () => {
  };

  // ドラッグ終了時の処理。
  this.handleDragEnd = () => {
    Promise
      .resolve()
      .then(() => store.action('application.endDrag'))
      .catch(err => store.action('modals.add', 'viron-message', {
        error: err
      }));
  };
}
