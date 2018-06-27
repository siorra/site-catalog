import React from 'react';
import { theme, flexColumn } from 'ui/theme';
import { log } from 'util/logger';
import CompactIcon from 'ui/CompactIcon';

type Props = {
  isCompact: boolean;
};
type State = {
};

class LeftSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {};

    Object.assign(container, {
      // boxSizing: 'border-box' as 'border-box',
      minHeight: theme.content.minHeight,
      padding: '8px 0',
      width: '300px',
      // display: 'flex',
      // justifyContent: 'center' as 'center',

      // borderRight: theme.content.devBorder,
      ...flexColumn('center', 'flex-start'),
    });

    return {
      container,
    };
  }
  onCompactToggle = () => {

  }

  render() {
    log('MiddleLayout LeftSideBar render');
    const style = this.getStyle();

    return (
      <div style={style.container}>
        {this.props.children}
        <CompactIcon onClick={this.onCompactToggle} />
      </div>
    );
  }
}
export default LeftSideBar;
