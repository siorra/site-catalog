import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { MiddleLayout } from 'components/MiddleLayout';
import { log } from 'util/logger';
import { Paging } from 'components/Paging';
import { Article } from 'components/Article';


type OwnProps = {
  routeParams: any;
};
type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

class ProductsComponent extends React.PureComponent<Props, State> {

  render() {
    log('Catalog render');
    return (
      <MiddleLayout route={'/catalog'}>
        <Paging routeParams={this.props.routeParams} />
        <Article routeParams={this.props.routeParams} />
      </MiddleLayout>
    );
  }
}


const mapStateToProps = (state: AppState, props: OwnProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export const Products = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ProductsComponent);
