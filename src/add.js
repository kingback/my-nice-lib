export default function add(...args) {
  return args.reduce((prev, next) => prev + (Number(next) || 0), 0);
}
