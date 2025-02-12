class ViewportManager {
  constructor() {
    this.listeners = new Set();
    this.prevViewport = window.innerWidth;
    this.resizeHandler = this.notifyListeners.bind(this);
    window.addEventListener('resize', this.resizeHandler);
  }

  /**
   * 모든 구독자에게 viewport 변경을 알리는 함수
   */
  notifyListeners() {
    const currentViewport = window.innerWidth;
    this.listeners.forEach(({ trigger, callback }) => {
      if (trigger(this.prevViewport, currentViewport)) {
        callback(currentViewport);
      }
    });

    this.prevViewport = currentViewport;
  }

  /**
   * viewport 변경을 감지하는 구독 함수
   */
  subscribe({trigger, callback}) {
    const listener = { trigger, callback };
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * 리스너 제거 및 window 이벤트 해제
   */
  destroy() {
    window.removeEventListener('resize', this.resizeHandler);
    this.listeners.clear();
  }
}

export default new ViewportManager();
