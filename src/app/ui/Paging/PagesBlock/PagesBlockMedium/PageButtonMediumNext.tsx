import React from 'react';
import { arrowIconBase64 } from 'ui/icons/base64';
import PageButtonBase from '../common/PageButtonBase';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    padding: '0 13px',
  };
  const span = {
  };
  const image = {
    transform: 'rotate(270deg)',
    marginLeft: '13px',
    marginBottom: '1px',
  };

  return {
    container,
    span,
    image,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
  className?: string;
};
type State = {
};

class PageButtonMediumNext extends React.PureComponent<Props, State> {
  render() {
    const { className } = this.props;
    return (
      <PageButtonBase className={[classes.container, className].join(' ')} borderRadius="full">
        <span className={classes.span}>Вперед</span>
        <img className={classes.image} src={arrowIconBase64} alt="" />
      </PageButtonBase>
    );
  }
}
export default PageButtonMediumNext;
