import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super("Pizza", 100, 100, spoiled);
    this.numberOfSlices = numberOfSlices;
    this.slicesEaten = 0;
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      return `You eat a slice of ${this.name}.`;
    }

    this.isConsumed = true;

    return "";
  }
}
