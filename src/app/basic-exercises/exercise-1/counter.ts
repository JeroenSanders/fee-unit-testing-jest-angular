export class Counter {

  private _counter = 0;

  getCounter(): number {
    return this._counter;
  }

  increase(): void {
    this._counter++;
  }

  decrease(): void {
    this._counter--;
  }

  reset(): void {
    this._counter = 0;
  }
}
