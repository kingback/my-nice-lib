export default function add() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (prev, next) {
    return prev + (Number(next) || 0);
  }, 0);
}