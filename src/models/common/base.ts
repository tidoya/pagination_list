import { InstanceOf } from "./types";

export abstract class BaseModel {
  id = 0;

  constructor(b: BaseModel) {
    this.update(b);
  }

  update(obj: InstanceOf<ThisType<this>>): this {
    for (const [key, value] of Object.entries(obj)) {
      if (value !== undefined) Object.assign(this, { [key]: value });
    }

    return this;
  }

  getValue(field: string) {
    for (const [key, value] of Object.entries(this)) {
      if (field === key) return value;
    }
  }
}
