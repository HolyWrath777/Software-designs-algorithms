import { Item } from "./Item";

export abstract class Consumable extends Item {
  private readonly spoiled: boolean;
  private consumed: boolean;

  protected constructor(
    name: string,
    value: number,
    weight: number,
    spoiled: boolean
  ) {
    super(name, value, weight);
    this.spoiled = spoiled;
    this.consumed = false;
  }

  public get isSpoiled(): boolean {
    return this.spoiled;
  }

  public set isConsumed(consumed: boolean) {
    this.consumed = consumed;
  }

  public get isConsumed(): boolean {
    return this.consumed;
  }

  public eat(): string {
    if (this.spoiled) {
      return `You eat the ${this.name}. You feel sick.`;
    }

    return `You eat the ${this.name}.`;
  }

  public use(): string {
    if (!this.consumed) {
      this.eat();
    }

    return "There is nothing left of the bread to consume.";
  }
}
