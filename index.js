
module.exports = {

  // Linear Search:
  // ---
  // Source: We've all done this at some point...
  // ---
  // Iterate over each item linearly until the target is found.

  linearSearch: ( arr, target ) => {

    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[ i ] === target ) return i;
    }

    return -1;

  },

  // Binary Search:
  // ---
  // Source: https://en.wikipedia.org/wiki/Binary_search_algorithm
  // ---
  // "...Given an array A of n elements with values or records 
  // A0, A1, ..., An−1, sorted such that A0 ≤ A1 ≤ ... ≤ An−1, 
  // and target value T, the following subroutine uses binary 
  // search to find the index of T in A..."
  // ---
  // "
  // ...
  // 1. Set L to 0 and R to n − 1.
  // 2. If L > R, the search terminates as unsuccessful.
  // 3. Set m (the position of the middle element) to the floor (the largest previous integer) of (L + R) / 2.
  // 4. If Am < T, set L to m + 1 and go to step 2.
  // 5. If Am > T, set R to m − 1 and go to step 2.
  // 6. Now Am = T, the search is done; return m.
  // ...
  // "

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

  },

  // Quick Sort:
  // ---
  // Source: https://www.geeksforgeeks.org/quick-sort/
  // ---
  // "...It picks an element as pivot and partitions the 
  // given array around the picked pivot. There are 
  // many different versions of quickSort that pick 
  // pivot in different ways...."

  quickSort: ( () => {

    // "...This function takes last element as pivot, places
    // the pivot element at its correct position in sorted
    // array, and places all smaller (smaller than pivot)
    // to left of pivot and all greater elements to right
    // of pivot..."

    const partition = ( arr, low, high ) => {

      const pivot = arr[ high ];
      let i = low - 1;

      for ( let j = low; j <= high - 1; j++ ) {

        if ( arr[ j ] <= pivot ) {
          i++;
          let tmp = arr[ j ];
          arr[ j ] = arr[ i ];
          arr[ i ] = tmp;
        }

      }

      let next = i + 1;

      let tmp = arr[ next ];
      arr[ next ] = arr[ high ];
      arr[ high ] = tmp;

      return next;

    };

    const sort = ( arr, low, high ) => {

      if ( low < high ) {

        const pi = partition( arr, low, high );

        sort( arr, low, pi - 1 );
        sort( arr, pi + 1, high );
        
      }

    };

    return sort;

  } )()


};