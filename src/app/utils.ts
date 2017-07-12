export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArrayItem<T>(arr: T[]): T {
  const randomIndex = getRandomInt(0, arr.length - 1);

  return arr[randomIndex];
}
