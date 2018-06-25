import React from 'react';
import { arrowIconBase64 } from 'ui/icons/base64';
import PageButtonBase from '../common/PageButtonBase';

import jss from 'jss';
import preset from 'jss-preset-default';
import { join } from 'util/helpers';
jss.setup(preset());

const getClasses = () => {
  const container = {
    padding: '0 13px',
  };
  const image = {
    transform: 'rotate(270deg)',
    marginLeft: '13px',
    marginBottom: '1px',
  };

  return {
    container,
    image,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;

type Props = {
  className?: string;
  onClick: () => void;
  hidden: boolean;
};
type State = {
};

class PageButtonMediumNext extends React.PureComponent<Props, State> {
  render() {
    const { className, onClick, hidden } = this.props;
    return (
      <PageButtonBase borderRadius="full" className={join(classes.container, className, hidden ? 'display-none' : '')} onClick={onClick}>
        <span>Вперед</span>
        <img className={classes.image} src={arrowIconBase64} alt="" />
      </PageButtonBase>
    );
  }
}
export default PageButtonMediumNext;
