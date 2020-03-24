import {action, computed, observable} from 'mobx';
import {persist} from 'mobx-persist';
import {navigationRef} from '../../navigation';

export class SomeOtherStore {
  @persist
  @observable
  something?: string;

  @action
  setSomething(something: string | undefined): void {
    this.something = something;
  }
}

export const someOtherStore = new SomeOtherStore();
export type SomeOtherStoreProps = {someOtherStore: SomeOtherStore};
export let SomeOtherStoreName = 'someOtherStore';
