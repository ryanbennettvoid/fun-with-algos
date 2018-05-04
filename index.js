
module.exports = {

  // Linear Search:
  // ---
  // Reference: We've all done this at some point...
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
  // Reference: https://en.wikipedia.org/wiki/Binary_search_algorithm
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
  // Reference: https://www.geeksforgeeks.org/quick-sort/
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

  } )(),

  // Fibonacci Series:
  // ---
  // Reference: https://stackoverflow.com/questions/494594/how-to-write-the-fibonacci-sequence
  // ---

  fibonacci: ( () => {

    const fib = ( n ) => {
      if ( n === 0 ) return 0;
      if ( n === 1 ) return 1;
      return fib( n - 1 ) + fib( n - 2 );
    };

    return fib;

  } )(),

  // Merge Sort:
  // ---
  // Reference: https://en.wikipedia.org/wiki/Merge_sort
  // ---

  mergeSort: ( () => {

    const merge = ( left, right ) => {

      const result = [];

      while ( left.length > 0 && right.length > 0 ) {
        if ( left[ 0 ] <= right[ 0 ] ) {
          result.push( left.shift() );
        } else {
          result.push( right.shift() );
        }
      }

      // consume any remaining items
      while ( left.length > 0 ) {
        result.push( left.shift() );
      }

      while ( right.length > 0 ) {
        result.push( right.shift() );
      }

      return result;

    };

    const sort = ( arr ) => {

      if ( arr.length <= 1 ) return arr;

      let left = [];
      let right = [];

      for ( let i = 0; i < arr.length; i++ ) {
        let item = arr[ i ];
        if ( i < ( arr.length / 2 ) ) {
          left.push( item );
        } else {
          right.push( item );
        }
      }

      left = sort( left );
      right = sort( right );

      return merge( left, right );

    };

    return sort;

  } )(),

  // Array Flatten:
  // ---
  // Reference: Funky custom solution, inspired by answers from:
  //  -> https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
  // Some tests taken from:
  //  -> https://github.com/elidoran/flatten-array/blob/master/test/lib/test.coffee
  // ---
  // Mutates/consumes original array so that we can check length > 0 
  // and uses `result` as an accumulator

  arrayFlatten: ( () => {

    const flatten = ( arr, result=[] ) => {

      if ( !Array.isArray( arr ) ) return arr;

      while ( arr.length > 0 ) {
        const item = flatten( arr.shift(), result );
        // Ensure not an array otherwise we end up with 
        // funky extra arrays of circular references.
        if ( !Array.isArray( item ) ) result.push( item );
      }

      return result;

    };

    return flatten;

  } )(),

  // Factorial:
  // ---
  // Reference: https://en.wikipedia.org/wiki/Factorial
  // ---
  // Interestingly similar to fibonacci recursion with
  // regards to base cases and descending input.

  factorial: ( () => {

    const fac = ( n ) => {
      if ( n === 0 ) return 1;
      if ( n === 1 ) return 1;
      return n * fac( n - 1 );
    };

    return fac;

  } )(),

  // Insertion Sort
  // ---
  // Reference: https://en.wikipedia.org/wiki/Insertion_sort
  // ---

  insertionSort: ( arr ) => {

    let i = 1;

    while ( i < arr.length ) {

      let j = i;

      // if the previous position is greater than this one, swap
      while ( j > 0 && arr[ j - 1 ] > arr[ j ] ) {
        const tmp = arr[ j - 1 ];
        arr[ j - 1 ] = arr[ j ];
        arr[ j ] = tmp;
        j--;
      }

      i++;

    }

  },

};

