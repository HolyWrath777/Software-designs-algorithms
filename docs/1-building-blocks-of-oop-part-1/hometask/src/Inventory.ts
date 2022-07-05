import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private readonly items: Item[];

  constructor() {
    this.items = [];
  }

  public addItem(item: Item) {
    this.items.push(item);
  }

  public removeItem(item: Item) {
    const index = this.items.indexOf(item);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  public get Items() {
    return this.items;
  }

  public get ItemsCount() {
    return this.items.length;
  }

  public sortItems(comparator: ItemComparator) {
    this.items.sort(comparator.compare);
  }

  public sort() {
    this.items.sort((first, second) => first.itemValue - second.itemValue);
  }

  public toString() {
    return this.items.map((item) => item.toString()).join(", ");
  }
}
