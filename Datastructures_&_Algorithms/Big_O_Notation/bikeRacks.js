/**
 * 
 * You want to park your bicycle in a bicycle parking area where bike racks are aligned in a row. There are already N bikes parked there (each bike is attached to exactly one rack, but a rack can have multiple bikes attached to it). We call racks that already have bikes attached used.

You want to park your bike in a rack in the parking area according to the following criteria:

The chosen rack must lie between the first and the last used racks (inclusive);

The distance between the chosen rack and any other used rack is as big as possible

A description of the bikes already parked in the racks is given in a non-empty zero-indexed array A element A[K] denotes the position of the rack to which bike number K is attached (for 0 ≤ K<N) The central position in the parking area is position 0. A positive value means that the rack is located A[K] meters to the right of the central position 0: a negative value means that it\'s located ∣A[K]∣ meters to the left (the absolute value of A[K])

For example, consider array A such that:

A [0] = 10

A [1] = 0

A [2] = 8

A [3] = 2

A [4] = -1

A [5] = 12

A [6] = 11

A [7] = 3

In the figure below, available racks are represented by dots. Bigger dots represent racks with bikes attached to them.

You can attach your bike to any rack between rack -1 and rack 12 (including these two racks). In order to maximize the distance to any used rack, you should attach your bike either to rack 5 or to rack 6. The resulting distance is 2 meters (from 5 to used rack 3, or from 6 to used rack 8 respectively) Write a function:

int solution (vector<int> &A);

that, given a non-empty zero-indexed array A of N integers, returns the largest possible distance in meters between the chosen rack and any other used rack.
 * 
 * @param {bikes} bikesInRacksArray 
 * @returns number
 */

function solution(bikesInRacksArray) {
    var maximumDifference = 0,
        bikeRackOfMaximumDifference = 0,
        closest;
  
    if (Array.isArray(bikesInRacksArray) && bikesInRacksArray.length > 1) {
      bikesInRacksArray.sort(
        function(a, b) {
          return a - b
        }
      );
      for (var i = bikesInRacksArray.length - 1; i > 0; i--) {
        if (bikesInRacksArray[i] - bikesInRacksArray[i - 1] >= maximumDifference) {
            closest = bikesInRacksArray[i]
          maximumDifference = (bikesInRacksArray[i] - bikesInRacksArray[i - 1]);
          bikeRackOfMaximumDifference = bikesInRacksArray[i] - parseInt(maximumDifference / 2);
        }
      }
    }
    
    return closest - bikeRackOfMaximumDifference || 0;
  }