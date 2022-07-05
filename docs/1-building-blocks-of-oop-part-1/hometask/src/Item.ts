import { Comparable } from "./Comparable";

let id = 0;
let counter = 0;

const setId = (): number => {
  id = counter || id;

  counter++;

  return id;
};

export abstract class Item implements Comparable<Item> {
  private readonly id: number;
  protected name: string;
  protected weight: number;
  protected value: number;
  private counter: number;

  protected constructor(name: string, value: number, weight: number) {
    this.counter = counter;
    this.id = setId();
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }

  public compareTo(other: Item): number {
    const nameX = this.name.toLowerCase();
    const nameY = other.name.toLowerCase();

    const valX = this.value;
    const valY = other.value;

    return valX < valY ? -1 : valX > valY ? 1 : nameX.localeCompare(nameY);
  }

  public get itemId(): number {
    return this.id;
  }

  public set itemName(name: string) {
    this.name = name;
  }

  public get itemName(): string {
    return this.name;
  }

  public set itemValue(value: number) {
    this.value = value;
  }

  public get itemValue(): number {
    return this.value;
  }

  public set itemWeight(weight: number) {
    this.weight = weight;
  }

  public get itemWeight(): number {
    return this.weight;
  }

  public reset(): void {
    this.counter = 0;
  }

  use() {}
}
