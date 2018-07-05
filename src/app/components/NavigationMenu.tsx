import React from 'react';
import { subscribeResize, unsubscribeResize, NavigationMenuItem, scheme } from 'ui';
import { logs, pickBySize } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClassesSmall = {
  container: {
    height: '2px',
    maxHeight: '2px',
    minHeight: '2px',
    background: scheme.background.navigationMenu,
  },
  subContainer: {
    display: 'none',
  }
};
const classesSmall = jss.createStyleSheet(rawClassesSmall).attach().classes;

const rawClassesMedium = {
  container: {
    height: '36px',
    maxHeight: '36px',
    background: scheme.background.navigationMenu,
  },
  subContainer: {
    alignItems: 'center' as 'center',
    display: 'flex',
    height: '36px',
    justifyContent: 'space-evenly' as 'space-evenly',
    maxWidth: '650px',
    margin: '0 auto',
  }
};
const classesMedium = jss.createStyleSheet(rawClassesMedium).attach().classes;

type Props = {
};
type State = {
};

export class NavigationMenu extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'NavigationMenu') }
  componentWillUnmount() { unsubscribeResize(this, 'NavigationMenu') }

  render() {
    logs('render', 'NavigationMenu');
    const classes = pickBySize(classesSmall, classesMedium);

    return (
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <NavigationMenuItem to="/about" text="О&nbsp;нас" />
          <NavigationMenuItem to="/production" text="Производство" />
          <NavigationMenuItem to="/products" text="Продукция" />
          <NavigationMenuItem to="/news" text="Новости" />
          <NavigationMenuItem to="/contacts" text="Контакты" />
        </div>
      </div>
    );
  }
}
