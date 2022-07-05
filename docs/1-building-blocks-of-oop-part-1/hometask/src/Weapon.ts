import { Item } from "./Item";

let effectiveDurability;

export abstract class Weapon extends Item {
  private baseDamage: number;
  private damageModifier: number;
  private baseDurability: number;
  private durabilityModifier: number;
  private readonly modifierChangeRate: number;

  protected constructor(
    name: string,
    value: number,
    weight: number,
    baseDamage: number,
    baseDurability: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.modifierChangeRate = 0.05;
    this.durabilityModifier = this.modifierChangeRate;
    this.damageModifier = this.modifierChangeRate;
  }

  public set itemBaseDamage(baseDamage: number) {
    this.baseDamage = baseDamage;
  }

  public get itemBaseDamage(): number {
    return this.baseDamage;
  }

  public set itemDamageModifier(damageModifier: number) {
    this.damageModifier = damageModifier;
  }

  public get itemDamageModifier(): number {
    return this.damageModifier;
  }

  public set itemBaseDurability(baseDurability: number) {
    this.baseDurability = baseDurability;
  }

  public get itemBaseDurability(): number {
    return this.baseDurability;
  }

  public set itemDurabilityModifier(durabilityModifier: number) {
    this.durabilityModifier = durabilityModifier;
  }

  public get itemDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public get weaponModifierChangeRate(): number {
    return this.modifierChangeRate;
  }

  public getEffectiveDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getEffectiveDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${
      this.weight
    }, Damage: ${this.baseDamage + this.damageModifier}, Durability: ${
      (this.baseDurability + this.durabilityModifier) * 100
    }%`;
  }

  public use() {
    const message = `You use the ${
      this.name
    }, dealing ${this.getEffectiveDamage()} points of damage.`;
    effectiveDurability = this.getEffectiveDurability();

    if (effectiveDurability * 100 > 0) {
      effectiveDurability = effectiveDurability - this.modifierChangeRate;

      return message;
    }

    return `${message} The ${this.name} breaks.`;
  }
}
