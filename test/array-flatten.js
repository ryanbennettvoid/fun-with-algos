
const test = require( 'tape' );

const {
  arrayFlatten
} = require( '../' );

test( 'array flatten #1', ( t ) => {

  const unflattenedArr = [1, 2, [3, 4, [5, 6, [ 7 ]]]];
  const expectedArr = [ 1, 2, 3, 4, 5, 6, 7 ];

  const flattenedArr = arrayFlatten( unflattenedArr );

  t.deepEquals( flattenedArr, expectedArr );

  t.end();

} );

test( 'array flatten #2', ( t ) => {

  const unflattenedArr = [ 1, '2', [], 3, [[]], 4, [ 5, [], 6] ];
  const expectedArr = [ 1, '2', 3, 4, 5, 6 ];

  const flattenedArr = arrayFlatten( unflattenedArr );

  t.deepEquals( flattenedArr, expectedArr );

  t.end();

} );

test( 'array flatten #3', ( t ) => {

  const unflattenedArr = [ 1, [ 2 ], 3, [ 4, [ 5, [ 6 ] ], 7 ], 8 ];
  const expectedArr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

  const flattenedArr = arrayFlatten( unflattenedArr );

  t.deepEquals( flattenedArr, expectedArr );

  t.end();

} );
