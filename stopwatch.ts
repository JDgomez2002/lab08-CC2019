class Stopwatch {
  private startTime: number | null = null;
  private stopTime: number | null = null;

  start() {
    this.startTime = performance.now();
  }

  stop() {
    this.stopTime = performance.now();
  }

  getElapsedTime(): number {
    if (!this.startTime || !this.stopTime) {
      return 0;
    }
    return this.stopTime - this.startTime;
  }

  reset() {
    this.startTime = null;
    this.stopTime = null;
  }
}

export default Stopwatch