import {action, computed, observable} from 'mobx';
import {persist} from 'mobx-persist';
import {navigationRef} from '../../navigation';

export class MainStore {
  @persist
  @observable
  jwt?: string;

  @action
  setJWT(jwt: string | undefined): void {
    this.jwt = jwt;
  }
}

export const mainStore = new MainStore();
export type MainStoreProps = {mainStore: MainStore};
export let MainStoreName = 'mainStore';
