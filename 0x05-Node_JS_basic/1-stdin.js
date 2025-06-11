process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  const input = data.trim();
  console.log(`Your name is: ${input}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
