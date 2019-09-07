type EventHandler = (value?: string) => void;
interface Options {
  ms: number;
}

export default (options: Options = { ms: 10 }) => {
  let intervals: any = {};
  let intervalId: number = 0;

  intervalId = window.setInterval(() => {
    for (const key in intervals) {
      const emitter = intervals[key];
      const currentData = window.localStorage[key];
      if (emitter.data !== currentData) {
        emitter.callback((emitter.data = currentData));
      }
    }
  }, options.ms);

  const removeEvent = (key: string) => {
    if (intervals[key]) {
      delete intervals[key];
    }
  };

  return {
    on(key: string, callback: EventHandler) {
      removeEvent(key);
      intervals[key] = {
        data: window.localStorage[key],
        callback,
      };
      return this;
    },
    off(key: string) {
      if (key) {
        removeEvent(key);
      } else {
        for (const key in intervals) {
          removeEvent(key);
        }
      }
      return this;
    },
    destroy() {
      clearInterval(intervalId);
      intervalId = 0;
    },
  };
};
