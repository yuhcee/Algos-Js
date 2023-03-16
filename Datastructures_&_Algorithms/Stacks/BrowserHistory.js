/**
 * **1472. Design Browser History**
 *
 * You have a **browser** of one tab where you start on the `homepage` and you can visit
 * another `url`, get back in the history number of `steps` or move forward in the history
 * number of `steps`.
 *
 * Implement the `BrowserHistory` class:
 *
 * - `BrowserHistory(string homepage)` Initializes the object with the `homepage` of the
 * browser.
 * - `void visit(string url)` Visits `url` from the current page. It clears up all the forward
 * history.
 * - `string back(int steps)` Move `steps` back in history. If you can only return `x` steps in
 * the history and `steps > x`, you will return only `x` steps. Return the current `url` after
 * moving back in history **at most** `steps`.
 * - `string forward(int steps)` Move `steps` forward in history. If you can only forward `x`
 * steps in the history and `steps > x`, you will forward only `x` steps. Return the current
 * `url` after forwarding in history **at most** `steps`.
 *
 * **Constraints:**
 *
 * - `1 <= homepage.length <= 20`
 * - `1 <= url.length <= 20`
 * - `1 <= steps <= 100`
 * - `homepage` and `url` consist of  '.' or lower case English letters.
 * - At most `5000` calls will be made to `visit`, `back`, and `forward`.
 *
 * @param {string} homepage
 */
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.stack = [homepage];
    this.index = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.stack = this.stack.slice(0, this.index + 1);
    this.stack.push(url);
    this.index++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    if (steps > this.index) {
        this.index = 0;
        return this.stack[this.index];
    }
    this.index -= steps;
    return this.stack[this.index];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    if (steps > this.stack.length - 1 - this.index) {
        this.index = this.stack.length - 1;
        return this.stack[this.stack.length - 1];
    }
    this.index += steps;
    return this.stack[this.index];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
