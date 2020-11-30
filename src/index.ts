export function log(str: string) {
  console.log(str)
}
log('hello World!!!$$');

class A {
  greeting = "hello World";
}

console.log(new A().greeting);