const iterations = 10000;

const main = async () => {
  for (let i = 1; i <= iterations; i++) {
    if (i % 100 === 0) console.log(`Iteration ${i}`);

    const controller = new AbortController();

    await fetch("http://localhost:58080", {
      signal: controller.signal,
    });
  }
};

main();
