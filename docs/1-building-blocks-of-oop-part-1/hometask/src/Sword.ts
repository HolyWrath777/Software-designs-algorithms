import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value, weight) {
    super("Sword", baseDamage, baseDurability, value, weight);
  }

  polish() {
    const maxDamage = this.itemBaseDamage + this.itemBaseDamage / 4;

    if (this.itemBaseDamage < maxDamage) {
      this.itemBaseDamage = this.itemBaseDamage + this.weaponModifierChangeRate;

      return this.itemBaseDamage;
    }

    return this.itemBaseDamage;
  }
}
