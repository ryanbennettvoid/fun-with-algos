
const test = require( 'tape' );

const {
  factorial
} = require( '../' );

test( 'factorial #1', ( t ) => {

  const expectedArr = [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ];
  const arr = expectedArr.map( ( _, i ) => factorial( i ) );

  t.deepEquals( arr, expectedArr );

  t.end();

} );
