import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, TCategory } from 'core/types';
import { selectCategory, selectCategoryCaption } from 'core/selectors';

import { ArticleHeader } from './ArticleHeader';
import { Paging } from 'components/Paging';
import { ArticleProducts } from './ArticleProducts';
import { ArticleContent } from './ArticleContent';

type OwnProps = {
  categoryId?: any;
};
type StateProps = {
  category: TCategory;
  categoryCaption: string;
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class ArticleComponent extends React.PureComponent<Props, State> {
  render() {
    const { category, categoryCaption } = this.props;
    return (
      <div>
        <ArticleHeader category={category} categoryCaption={categoryCaption} />
        <Paging categoryId={this.props.categoryId} />
        <ArticleProducts category={category} />
        <ArticleContent category={category} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  const category = selectCategory(state, props.categoryId);
  return {
    category,
    categoryCaption: selectCategoryCaption(state, category),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export const Article = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ArticleComponent);