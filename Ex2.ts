import Stopwatch from './stopwatch'

function ex2(n: number): Promise<number> {
  return new Promise(resolve => {
    if (n <= 1) {
      return;
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        console.log("Sequence");
        break;
      }
    }
    resolve (n)
  })
}

const execute = (timer: Stopwatch, num: number): void => {
  timer.start()
  ex2(num)
    .then(() => {
      timer.stop()
      console.log(`Elapsed time with ${num}: ${timer.getElapsedTime()} ms`)
    })
    .catch(() => {
      timer.stop()
      console.log(`Elapsed time with ${num}: ${timer.getElapsedTime()} ms`)
    })
}

const stopwatch = new Stopwatch()

execute(stopwatch, 10000)


