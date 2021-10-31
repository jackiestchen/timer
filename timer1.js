const arg = process.argv.splice(2);

for (const el of arg) {
  if (el > 0 && Number(el)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, el*1000);
  }
}

