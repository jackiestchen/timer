const arg = process.argv.splice(2);

const timer = (time) => {
  for (const el of time) {
    if (el > 0 && Number(el)) {
      setTimeout(() => {
      process.stdout.write('\x07');
      }, el * 1000);
    }
  }
};

timer(arg);