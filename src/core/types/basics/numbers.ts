// TODO: make these types actually work.

export type Integer<T extends number> = `${T}` extends `${string}.${string}`
  ? never
  : T;

export type Float<T extends number> = Integer<T> extends never ? T : never;

export type Positive<T extends number> = `${T}` extends `-${string}`
  ? never
  : T;

export type Negative<T extends number> = Positive<T> extends never ? T : never;

export type PositiveInteger<T extends number> = Integer<T> &
  Positive<T> extends never
  ? never
  : T;

export type NegativeInteger<T extends number> = Integer<T> &
  Negative<T> extends never
  ? never
  : T;

export type PositiveFloat<T extends number> = Float<T> &
  Positive<T> extends never
  ? never
  : T;

export type NegativeFloat<T extends number> = Float<T> &
  Negative<T> extends never
  ? never
  : T;

let x: Positive<number> = -3 as Positive<number>;
//  ^?

//* Number Systems
export type hexadecimal =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  //TODO: Create string type utility for capitalization
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";
