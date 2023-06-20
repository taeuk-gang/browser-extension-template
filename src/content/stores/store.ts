import { action, makeObservable, observable } from 'mobx'

export class Store {
  public constructor() {
    makeObservable(this)
  }

  @observable
  public data = {}

  @action
  public setData(value: object): void {
    this.data = value
  }
}

export const store = new Store()
