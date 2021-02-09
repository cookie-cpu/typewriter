const sentence = "hello there from lighthouse labs\n";
let timeOut = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeOut);
  timeOut += 150;


 
}

