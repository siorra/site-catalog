import React from 'react';
import { theme } from 'ui/theme';

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

class Contacts extends React.PureComponent<Props, State> {
  getStyle(customStyle: any) {
    const container = {
      marginRight: '40px',
      width: '210px',
      ...theme.header.contacts,
    };
    if (customStyle) {
      Object.assign(container, customStyle);
    }
    const caption = {
      fontWeight: '700' as any,
      fontStyle: 'normal' as 'normal',
      marginBottom: '6px',
    };
    const addressBottom = {
      marginBottom: '5px',
    };
    return {
      container,
      caption,
      addressBottom,
    };
  }
  render() {
    const { className, style: customStyle } = this.props;
    const style = this.getStyle(customStyle);
    const classes = className ? className : '';
    return (
      <div style={style.container} className={classes}>
        <div style={style.caption}><b>КОНТАКТНАЯ ИНФОРМАЦИЯ</b></div>
        <div><b>Адрес:</b> 150000, г. Петропавловск,</div>
        <div style={style.addressBottom}>1 Проезд Я.Гашека 8</div>
        <div><b>Тел./факс:</b> 8-(7152) 52-24-25 8-(7152) 52-21-26 8-(7152) 52-01-62 8-(7152) 39-83-65</div>
      </div>
    );
  }
}
export default Contacts;