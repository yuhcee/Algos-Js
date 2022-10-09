var MyCalendarThree = function () {
    this.data = [];
};

/**
 * **732. My Calendar III**
 *
 * A `k`-booking happens when `k` events have some non-empty intersection (i.e., there is some time
 * that is common to all `k` events.)
 *
 * You are given some events `[start, end]`, after each given event, return an integer `k`
 * representing the maximum k-booking between all the previous events.
 *
 * Implement the `MyCalendarThree` class:
 *
 * - `MyCalendarThree()` Initializes the object.
 * - `int book(int start, int end)` Returns an integer `k` representing the largest integer such
 * that there exists a `k`-booking in the calendar.
 *
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
    //Use +1 for start and -1 for end, but we need to check only start and end points of the meeting as the possible duration of the meetins are high 10^9
    this.data.push([start, 1]);
    this.data.push([end, -1]);
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
