/**
 * **2402. Meeting Rooms III**
 * You are given an integer `n`. There are `n` rooms numbered from `0` to `n
 * - 1`.
 *
 * You are given a 2D integer array `meetings` where `meetings[i] = [starti,
 * endi]` means that a meeting will be held during the **half-closed time**
 * interval `[starti, endi]`. All the values of `starti` are **unique**.
 *
 * Meetings are allocated to rooms in the following manner:
 *
 * 1. Each meeting will take place in the unused room with the **lowest**
 * number.
 *
 * 2. If there are no available rooms, the meeting will be delayed until a
 * room becomes free. The delayed meeting should have the **same** duration
 * as the original meeting.
 *
 * 3. When a room becomes unused, meetings that have an earlier original
 * **start** time should be given the room.
 *
 * Return *the **number** of the room that held the most meetings. If there
 * are multiple rooms, return the room with the **lowest** number*.
 *
 * A **half-closed interval** `[a, b]` is the interval between `a` and `b`
 * **including** `a` and **not including** `b`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 100`
 * - `1 <= meetings.length <= 105`
 * - `meetings[i].length == 2`
 * - `0 <= starti < endi <= 5 * 105`
 * - All the values of `starti` are **unique**.
 *
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
const mostBooked = (n, meetings) => {
    const ans = new Array(n).fill(0); // To store the number of meetings held in each room
    const times = new Array(n).fill(0); // To store the end time of the last meeting in each room

    // Sort meetings based on start times
    meetings.sort((a, b) => a[0] - b[0]);

    // Iterate through each meeting
    for (let i = 0; i < meetings.length; i++) {
        const [start, end] = meetings[i];
        let flag = false; // Flag to track if a room is available for the current meeting
        let minind = -1; // Index of the room with the earliest available time
        let val = Number.MAX_SAFE_INTEGER; // Initialize the earliest available time to maximum possible value

        // Find the room with the earliest available time
        for (let j = 0; j < n; j++) {
            if (times[j] < val) {
                val = times[j];
                minind = j;
            }
            // If the room is available at or before the start time of the meeting
            // Allocate the meeting to this room
            if (times[j] <= start) {
                flag = true;
                ans[j]++; // Increment the meeting count for the room
                times[j] = end; // Update the end time of the last meeting in the room
                break; // Exit the loop since the meeting is allocated
            }
        }

        // If no room is available at the start time of the meeting
        // Allocate the meeting to the room with the earliest available time
        if (!flag) {
            ans[minind]++; // Increment the meeting count for the room
            times[minind] += end - start; // Update the end time of the last meeting in the room
        }
    }

    // Find the room with the highest number of meetings
    let maxi = -1;
    let id = -1;
    for (let i = 0; i < n; i++) {
        if (ans[i] > maxi) {
            maxi = ans[i];
            id = i;
        }
    }

    // Return the room with the highest number of meetings
    return id;
};

const n = 2,
    meetings = [
        [0, 10],
        [1, 5],
        [2, 7],
        [3, 4],
    ];
// Output: 0
/* Explanation:
- At time 0, both rooms are not being used. The first meeting starts in room 0.
- At time 1, only room 1 is not being used. The second meeting starts in room 1.
- At time 2, both rooms are being used. The third meeting is delayed.
- At time 3, both rooms are being used. The fourth meeting is delayed.
- At time 5, the meeting in room 1 finishes. The third meeting starts in room 1 for the time period [5,10).
- At time 10, the meetings in both rooms finish. The fourth meeting starts in room 0 for the time period [10,11).
Both rooms 0 and 1 held 2 meetings, so we return 0. */
console.log(mostBooked(n, meetings));
