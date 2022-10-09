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

    // sort data
    this.data.sort(function (a, b) {
        return a[0] - b[0];
    });

    let sum = 0,
        max = 0,
        i = 0;

    while (i < this.data.length) {
        let currX = this.data[i][0];
        while (i < this.data.length && this.data[i][0] === currX) {
            sum += this.data[i][1];
            i++;
        }
        max = Math.max(max, sum);
    }

    return max;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

const input = ['MyCalendarThree', 'book', 'book', 'book', 'book', 'book', 'book'][([], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55])];
/* Output
 [null, 1, 1, 2, 3, 3, 3] */

/* Explanation
 MyCalendarThree myCalendarThree = new MyCalendarThree();
 myCalendarThree.book(10, 20); // return 1, The first event can be booked and is disjoint, so the maximum k-booking is a 1-booking.
 myCalendarThree.book(50, 60); // return 1, The second event can be booked and is disjoint, so the maximum k-booking is a 1-booking.
 myCalendarThree.book(10, 40); // return 2, The third event [10, 40) intersects the first event, and the maximum k-booking is a 2-booking.
 myCalendarThree.book(5, 15); // return 3, The remaining events cause the maximum K-booking to be only a 3-booking.
 myCalendarThree.book(5, 10); // return 3
 myCalendarThree.book(25, 55); // return 3 */
