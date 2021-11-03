const args = process.argv.slice(2)
    
for (let j of args) {
  let a = Number(j)
  // if user input string !a === true
  if (!a === true || a < 0 || a === null || a === undefined) { 
    return false;
  } else {
    setTimeout(() => {
    process.stdout.write('\x07dsd');
    },a*1000);
  }
 }





  



