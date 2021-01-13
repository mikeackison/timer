// we need to get infor from the command line; that requires process.argv and slice(2)
// once we have avariable, we can us that in the setTimout the times of the alamr

const input = process.argv.slice(2);
// we need to get infor from the command line; that requires process.argv and slice(2)
// that gives us an array 

// we can loop through the array to access the elements
for (let i of input) {
  //  if i is not a number or
  if (isNaN(i) || i <= 0) {
    return
  } else {
    setTimeout(function () {
      console.log(`ALARM for ${i} seconds`)
      process.stdout.write('\x07')
      // in the setTimeout funtion mulitply the array elements by 1000 (to get a second)
      // in the callback
    }, i * 1000);
  }
};
