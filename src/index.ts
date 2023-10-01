import Serpentarium from './serpentarium';
import { toFormatISO } from './utils';

const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

const snake = new Serpentarium({
  head: toFormatISO(today.toISOString()),
  tail: toFormatISO(tomorrow.toISOString()),
});

console.log(snake.getHead());
console.log(snake.getTail());

export default Serpentarium;
