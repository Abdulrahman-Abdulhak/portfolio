export function xor(a: any, b: any): boolean {
  return (a || b) && (!a || !b);
}

export function xnor(a: any, b: any): boolean {
  return (a && b) || (!a && !b);
}
