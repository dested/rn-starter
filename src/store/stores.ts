import {MobXProviderContext} from 'mobx-react';
import React from 'react';
import {mainStore, MainStoreProps} from './mainStore';
import {someOtherStore, SomeOtherStoreProps} from './someOtherStore';

export type AllStores = MainStoreProps & SomeOtherStoreProps;

export const stores: AllStores = {
  mainStore,
  someOtherStore,
};

export function useStores(): AllStores {
  return React.useContext<AllStores>(MobXProviderContext as any);
}
