import React from 'react';
import { TableItemType } from './types';
import { TableRow } from './TableRow';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  items: TableItemType[];
};
type State = {
};

export class Table extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    const { items } = this.props;
    return (
      <div className={classes.container} style={style.container}>
        {items.map((item: TableItemType) => <TableRow key={item.idKey} item={item} />)}
      </div>
    );
  }
}
