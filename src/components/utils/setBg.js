export default function setBg() {
  let a = Math.floor(Math.random() * 16777215).toString(16);
  a = '#' + a;
  return a;
}
