const appConfig = require('../../../config/main');
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Navigation, Vault } from 'components';
import { ActionTypes as CategoriesActionTypes } from 'core/catalog/categories/actions';
import { AppState } from 'store/reducers';
import { TItem } from 'core/catalog/items/reducer';
import { TCategory } from 'core/catalog/categories/types';
import { log } from 'util/logger';
import { isInitial } from 'util/responsive';
import { Resize } from 'ui/Resize';
import { ScreenSize } from 'ui/ScreenSize';

type StateProps = {
  categories: TCategory[];
  items: TItem[];
};
type DispatchProps = {
  loadCategories: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};
let first = true;
class MainLayoutComponent extends React.Component<Props, State> {
  state = {};
  static getDerivedStateFromProps({ loadCategories, categories, /* loadItems, items,*/ }: Props) {
    if (first && categories.length === 0) {
      log('******** CategoriesPage componentDidMount load action');
      loadCategories();
      first = false;
    }
    return {};
  }

  getStyle = () => {
    const container = {
      maxWidth: '100%',
      overflow: 'hidden' as 'hidden',
    };

    return {
      container,
    };
  }
  public render() {
    log('MainLayoutComponent render');
    const style = this.getStyle();

    log(`render this.props.items.length`, this.props.items.length);
    log(`render this.props.categories.length`, this.props.categories.length);

    return (
      <div style={style.container}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />

        {true ? null : !isInitial() && <Header />}
        {!isInitial() && <Navigation />}

        <div>
          {this.props.children}
        </div>

        <Vault />
        <Resize />
        <ScreenSize />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  categories: state.categories.separated,
  items: state.items.data,
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    loadCategories: () => {
      log(`pre dispatch loadCategories`);
      dispatch({ type: CategoriesActionTypes.LOAD_CATEGORIES });
      log(`after dispatch loadCategories`);
    },
  };
};
export const MainLayout = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MainLayoutComponent);

