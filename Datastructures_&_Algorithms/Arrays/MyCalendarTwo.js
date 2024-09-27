/**
 * **731. My Calendar II**
 *
 * You are implementing a program to use as your calendar. We can add a
 * new event if adding the event will not cause a **triple booking**.
 *
 * A **triple booking** happens when three events have some non-empty
 * intersection (i.e., some moment is common to all the three events.).
 *
 * The event can be represented as a pair of integers `start` and `end`
 * that represents a booking on the half-open interval `[start, end]`, the
 * range of real numbers `x` such that `start <= x < end`.
 *
 * Implement the `MyCalendarTwo` class:
 *
 * - `MyCalendarTwo()` Initializes the calendar object.
 * - `boolean book(int start, int end)` Returns `true` if the event can be
 * added to the calendar successfully without causing a **triple
 * booking**. Otherwise, return `false` and do not add the event to the
 * calendar.
 *
 * **Constraints:**
 *
 * - `0 <= start < end <= 109`
 * - At most `1000` calls will be made to `book`.
 *
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var MyCalendarTwo = function () {
    this.bookings = []; // Stores single bookings
    this.overlaps = []; // Stores double bookings
};

MyCalendarTwo.prototype.book = function (start, end) {
    // Check for triple booking by comparing with double bookings
    for (let [overlapStart, overlapEnd] of this.overlaps) {
        if (start < overlapEnd && end > overlapStart) {
            return false; // Triple booking detected
        }
    }

    // Check for overlaps with single bookings and update double bookings
    for (let [bookedStart, bookedEnd] of this.bookings) {
        if (start < bookedEnd && end > bookedStart) {
            // Record the overlap in the "double bookings" array
            this.overlaps.push([Math.max(start, bookedStart), Math.min(end, bookedEnd)]);
        }
    }

    // Add the new booking to the list of single bookings
    this.bookings.push([start, end]);
    return true; // Successfully booked
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
