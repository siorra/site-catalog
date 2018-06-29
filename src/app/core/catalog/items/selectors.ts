import { AppState } from 'store/reducers';
import { selectAmountItems } from 'core/settings/amountItems/reducer';
import { amountItems } from 'core/settings/amountItems/common';
import { selectPage } from 'core/catalog/pages/selectors';
import { TCategory } from 'core/catalog/categories/types';

export const selectItems = (state: AppState) => state.items.data;

export const selectItemsByCategory = (state: AppState, category: string) => {
  if (category === null || category === 'null') {
    return selectItems(state);
  }

  return selectItems(state).filter(item => item.category.indexOf(category) >= 0);
};

export const selectItemsByPage = (state: AppState, category: TCategory) => {
  if (!category) { return [] }

  const items = selectItemsByCategory(state, category.idVirtual);
  const page = selectPage(state);

  const perPageKey = selectAmountItems(state);
  if (perPageKey === 'all') { return items }

  const perPageValue =  amountItems[perPageKey];
  return items.slice((page - 1) * perPageValue, page * perPageValue);
};