import React from 'react';
import { bannerImage } from 'assets/images';
import { log, join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    height: '100px',
  },
  banner: {
    height: '100px',
    width: '160px',
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

export class Banner extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: '',
    style: {},
  }
  render() {
    log('Header Banner render');
    const { className: customClassName, style: customStyle } = this.props;

    return (
      <div className={join(classes.container, customClassName)} style={customStyle} >
        <img className={classes.banner} src={bannerImage} alt="" />
      </div>
    );
  }
}
