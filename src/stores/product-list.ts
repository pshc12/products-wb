import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { ItemViewType } from '@/types/products';

export type ProductListState =
  | {
      viewType: ItemViewType;
      viewTypeSetDate: string; // datetime string
      isViewTypeSetThisSession: boolean;
    }
  | {
      viewType: undefined;
      viewTypeSetDate: undefined;
      isViewTypeSetThisSession: false;
    };

export type ProductListActions = {
  initializeViewType: () => void;
};

export type ProductListStore = ProductListState & ProductListActions;

export const defaultInitState: ProductListState = {
  viewType: undefined,
  viewTypeSetDate: undefined,
  isViewTypeSetThisSession: false,
};

export const createProductListStore = (
  initState: ProductListState = defaultInitState
) => {
  return createStore<ProductListStore>()(
    persist(
      (set) => ({
        ...initState,
        initializeViewType: () => {
          return set((state) => {
            const oneDayAgo = new Date(Date.now() - 86400000);

            const notYetOneDay =
              state.viewTypeSetDate &&
              new Date(state.viewTypeSetDate) > oneDayAgo;

            if (state.isViewTypeSetThisSession || notYetOneDay) {
              return { isViewTypeSetThisSession: true };
            }

            const rnd = Math.random();

            return {
              viewType: rnd < 0.5 ? 'list' : 'grid',
              viewTypeSetDate: new Date().toISOString(),
              isViewTypeSetThisSession: true,
            };
          });
        },
      }),
      {
        name: 'product-list-storage',
        partialize: ({ viewType, viewTypeSetDate }) => ({
          viewType,
          viewTypeSetDate,
        }),
      }
    )
  );
};
