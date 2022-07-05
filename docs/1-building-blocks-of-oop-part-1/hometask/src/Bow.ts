import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value, weight) {
    super("Bow", baseDamage, baseDurability, value, weight);
  }

  polish() {
    const maxDurability = this.itemBaseDurability + this.itemBaseDurability / 4;

    if (this.itemBaseDurability < maxDurability) {
      this.itemBaseDurability =
        this.itemBaseDurability + this.weaponModifierChangeRate;

      return this.itemBaseDurability;
    }

    return this.itemBaseDurability;
  }
}
