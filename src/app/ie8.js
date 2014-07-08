  (function() {
                var method;
                var noop = function () {};
                var methods = [
                    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
                    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
                    'timeStamp', 'trace', 'warn'
                ];
                var length = methods.length;
                var console = (window.console = window.console || {});

                while (length--) {
                    method = methods[length];

                    // Only stub undefined methods.
                    if (!console[method]) {
                        console[method] = noop;
                    }
                }
            }());


              if (!Date.prototype.toISOString) {
                Date.prototype.toISOString = function() {
                    function pad(n) { return n < 10 ? '0' + n : n }
                    return this.getUTCFullYear() + '-'
                        + pad(this.getUTCMonth() + 1) + '-'
                        + pad(this.getUTCDate()) + 'T'
                        + pad(this.getUTCHours()) + ':'
                        + pad(this.getUTCMinutes()) + ':'
                        + pad(this.getUTCSeconds()) + '.'
                        + pad(this.getUTCMilliseconds()) + 'Z';
                };
            }

            if (!Array.prototype.forEach) {
              Array.prototype.forEach = function(fn, scope) {
                for(var i = 0, len = this.length; i < len; ++i) {
                  fn.call(scope, this[i], i, this);
                }
              }
            }