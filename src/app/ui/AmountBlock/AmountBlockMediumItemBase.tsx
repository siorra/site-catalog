import React from 'react';
import { flexRow, theming } from 'ui/theme';
import { join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    cursor: 'pointer',
    height: '28px',
    lineHeight: '28px',
    textDecoration: 'none' as 'none',
    transition: '.1s ease-out',

    ...theming('scene-products-amountOnPage'),
    ...flexRow('center', 'center'),

    '&:hover': {
      textDecoration: 'underline' as 'underline',
    }
  },
};

type Props = {
  className?: string;
  onClick: () => void;
};
type State = {
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;

export class AmountBlockMediumItemBase extends React.PureComponent<Props, State> {
  render() {
    const { className, onClick } = this.props;
    return (
      <div className={join(classes.container, className)} onClick={onClick} >
        {this.props.children}
      </div>
    );
  }
}
