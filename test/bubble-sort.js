
const test = require( 'tape' );

const {
  bubbleSort
} = require( '../' );

test( 'bubble sort #1', ( t ) => {

  const unsortedArr = [ 444, 5, 9, 10778, 6, 200, 998, 99, 55, 3, 22, 19 ];
  const expectedArr = [ 3, 5, 6, 9, 19, 22, 55, 99, 200, 444, 998, 10778 ];

  const sortedArr = unsortedArr.slice();

  bubbleSort( sortedArr );

  t.deepEquals( sortedArr, expectedArr );

  t.end();

} );
