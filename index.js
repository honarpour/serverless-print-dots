'use strict';

class ServerlessPrintDots {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options || {};
    this.printer = null;
    this.interval = 1; // minutes

    this.hooks = {
      'before:deploy:deploy': this.start.bind(this),
      'after:deploy:deploy': this.stop.bind(this),
      'before:remove:remove': this.start.bind(this),
      'after:remove:remove': this.stop.bind(this),
    };
  }

  start() {
    this.printer = setInterval(() => {
      this.serverless.cli.printDot();
    }, this.interval * 1000 * 60);
  }

  stop() {
    clearInterval(this.printer);
  }
}

module.exports = ServerlessPrintDots;
