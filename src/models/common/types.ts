export type InstanceOf<T> = { [K in keyof T]?: T[K] };
export type ThrottleFunction = (...args: any[]) => void;
