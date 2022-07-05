import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item) {
    const x = first.itemWeight;
    const y = second.itemWeight;

    return x < y ? -1 : x > y ? 1 : first.compareTo(second);
  }
}
