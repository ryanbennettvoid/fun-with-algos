
const test = require( 'tape' );

const {
  fibonacci
} = require( '../' );

test( 'fibonacci #1', ( t ) => {

  const expectedArr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ];
  const arr = expectedArr.map( ( _, i ) => fibonacci( i ) );

  t.deepEquals( arr, expectedArr );

  t.end();

} );
