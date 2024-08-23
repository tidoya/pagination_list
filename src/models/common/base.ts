import { InstanceOf } from "./types";

export abstract class BaseModel {
  id = 0;

  is_selected = false;
  _current = false;

  constructor(b: BaseModel) {
    this.update(b);
  }

  update(d: InstanceOf<ThisType<this>>): this {
    for (const [key, value] of Object.entries(d)) {
      if (value !== undefined) Object.assign(this, { [key]: value });
    }

    return this;
  }

  getValue(k: string) {
    for (const [key, value] of Object.entries(this)) {
      if (k === key) return value;
    }
  }

  get isSelected(): boolean {
    return this.is_selected;
  }

  get isCurrent(): boolean {
    return this._current;
  }

  get value() {
    return this.id;
  }

  setCurrent(current: boolean): this {
    if (current && !this.isSelected) {
      this.setSelected(current);
    }

    this._current = current;

    return this;
  }

  setSelected(val: boolean): this {
    this.is_selected = val;

    return this;
  }
}
