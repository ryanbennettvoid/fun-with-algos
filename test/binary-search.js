
const test = require( 'tape' );

const {
  binarySearch
} = require( '../' );

test( 'binary search #1', ( t ) => {

  const arr = [ 3, 5, 6, 9, 19, 22, 55, 99, 200, 444, 998, 10778 ];
  const target = 9;
  const expectedIndex = 3;

  const index = binarySearch( arr, target );

  t.equals( index, expectedIndex );

  t.end();

} );

test( 'binary search #2', ( t ) => {

  const arr = [ 3, 5, 6, 9, 19, 22, 55, 99, 200, 444, 998, 10778 ];
  const target = 99;
  const expectedIndex = 7;

  const index = binarySearch( arr, target );

  t.equals( index, expectedIndex );

  t.end();

} );

test( 'binary search #3', ( t ) => {

  const arr = [ 3, 5, 6, 9, 19, 22, 55, 99, 200, 444, 998, 10778 ];
  const target = 444;
  const expectedIndex = 9;

  const index = binarySearch( arr, target );

  t.equals( index, expectedIndex );

  t.end();

} );

test( 'binary search #4', ( t ) => {

  const arr = [ 3, 5, 6, 9, 19, 22, 55, 99, 200, 444, 998, 10778 ];
  const target = 51;
  const expectedIndex = -1;

  const index = binarySearch( arr, target );

  t.equals( index, expectedIndex );

  t.end();

} );