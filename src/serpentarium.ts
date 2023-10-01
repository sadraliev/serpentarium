import { Snake } from './types';

export default class Serpentarium {
  constructor(private readonly snake: Snake) {}

  getHead(): string {
    return this.snake.head;
  }

  getTail(): string {
    return this.snake.tail;
  }
}
