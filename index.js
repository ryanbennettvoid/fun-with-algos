
module.exports = {

  // Binary Search:
  // ---
  // Given an array A of n elements with values or records 
  // A0, A1, ..., An−1, sorted such that A0 ≤ A1 ≤ ... ≤ An−1, 
  // and target value T, the following subroutine uses binary 
  // search to find the index of T in A.
  // ---
  // 1. Set L to 0 and R to n − 1.
  // 2. If L > R, the search terminates as unsuccessful.
  // 3. Set m (the position of the middle element) to the floor (the largest previous integer) of (L + R) / 2.
  // 4. If Am < T, set L to m + 1 and go to step 2.
  // 5. If Am > T, set R to m − 1 and go to step 2.
  // 6. Now Am = T, the search is done; return m.

  binarySearch: ( arr, target ) => {

    let left = 0;
    let right = arr.length - 1;

    let index = -1;
    let done = false;

    do {

      if ( left > right ) {

        done = true;

      } else {

        let middle = Math.floor( ( left + right ) / 2 );

        if ( arr[ middle ] < target ) {
          left = middle + 1;
        } else if ( arr[ middle ] > target ) {
          right = middle - 1;
        } else if ( arr[ middle ] === target ) {
          index = middle;
          done = true;
        }

      }

    } while ( !done );

    return index;

  }

};