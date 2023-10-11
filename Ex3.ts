import Stopwatch from './stopwatch'

function ex3(n: number): Promise<number> {
  return new Promise(resolve => {
    for (let i = 1; i <= Math.floor(n / 3); i++) {
      for (let j = 1; j <= n; j += 4) {
        console.log("Sequence");
      }
    }
    resolve (n)
  })
}

const execute = (timer: Stopwatch, num: number): void => {
  timer.start()
  ex3(num)
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


