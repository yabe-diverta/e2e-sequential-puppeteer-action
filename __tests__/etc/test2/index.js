(async () =>
  setTimeout(async () => {
    console.log(`${__filename} is executed, args: ${process.argv.slice(2)}`);
    return Promise.resolve();
  }, 500))();
