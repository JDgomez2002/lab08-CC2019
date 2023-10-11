import Stopwatch from './stopwatch'

function ex1(n: number): Promise<number> {
  return new Promise(resolve => {
    let counter = 0;
    for (let i = Math.floor(n / 2); i <= n; i++) {
      for (let j = 1; j <= n - Math.floor(n / 2); j++) {
        let k = 1;
        while (k <= n) {
          counter += 1;
          k *= 2;
        }
      }
    }
    resolve(counter);
  })
}

const execute = (timer: Stopwatch, num: number): void => {
  timer.start()
  ex1(num)
  .then(() => {
    timer.stop()
    console.log(`Elapsed time with ${num}: ${timer.getElapsedTime()} ms`)
  })
}

const stopwatch = new Stopwatch()

execute(stopwatch, 100000)
