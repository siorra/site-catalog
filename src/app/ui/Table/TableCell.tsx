import React from 'react';
import { join } from 'util/helpers';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    fontSize: '12px',
    lineHeight: '16px'
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  className?: string;
  value?: string;
};
type State = {
};

export class TableCell extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    const { className, value } = this.props;
    return (
      <div className={join(classes.container, className || '')} style={style.container}>
        {value || this.props.children}
      </div>
    );
  }
}