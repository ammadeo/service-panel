import { Service } from './definitionGeneratorService'

interface CategoryOptions {
  name: string
  description: string
}

export class Category {
  private readonly services = new Map<
    Symbol,
    ReturnType<Service<{}>["export"]>
  >()
  public readonly id = Symbol()
  constructor(private readonly options: CategoryOptions) {}

  add(instance: Service<{}>) {
    this.services.set(instance.id, instance.export())
    return this
  }

  export() {
    return {
      ...this.options,
      services: Array.from(this.services.values()),
    }
  }
}