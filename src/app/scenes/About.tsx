import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MiddleLayout } from 'components/MiddleLayout';
import { IS_DEV, IS_SHOW_ABOUT } from 'settings';
import { logs } from 'utils';
import { theming } from 'ui';


type StateProps = {
};
type DispatchProps = {
  // loadBalance: () => void;
};
type Props = StateProps & DispatchProps;

type State = {
};

class AboutComponent extends React.Component<Props, State> {
  // componentDidMount() {
  //   log('SCENE AboutComponent, componentDidMount');
  //   this.props.loadBalance();
  // }
  getStyle = () => {
    const container = {
      ...theming('scene-about-text'),
    };
    return {
      container,
    };
  }
  createMarkup() {
    return {
      __html:
`
<p>Фирма <strong>"Резинотехника"</strong> основана в 2001 году и имеет два основных направления деятельности:</p>
<ul>
  <li>
    <strong>Оптово-розничная торговля продукцией ведущих заводов России и Украины с уклоном на резинотехнические и асботехнические изделия.</strong>
    <br />
    <div>
      Нашими поставщиками являются такие предприятия, как:
      <div>
        <ul>
          <li>ОАО «Уральский завод РТИ»</li>
          <li>ООО «Интер РТИ»</li>
          <li>ОАО «Саранский завод резинотехника»</li>
          <li>ОАО «Уральский завод АТИ»</li>
          <li>АО «Ярославль-Резинотехника»</li>
          <li>ТОО «Восход»</li>
          <li>ОАО «Лужский Абразивный завод»</li>
          <li>ЗАО «Курскрезинотехника»</li>
          <li>ОАО «Белорецкий металлургический комбинат»</li>
          <li>ООО НПП «Унипласт»</li>
          <li>ЗАО «Чайковский завод РТД</li>
          <li>ЗАО Завод припоев<br />ОАО РУКАВ<br />ОАО Фритекс<br />ООО АлтайАгроТрейд<br />ООО Волгопромтранс<br />ООО Континент-Сити<br />ООО Костромское предприятие Автофильтр<br />ООО НПФ Омскрезинотехника<br />ООО Полиплекс<br />ООО Руслан-Комплект<br />ООО ТД Винницкий агрегатный завод<br />ООО Уральский завод конвейерных лент<br />ПАО Торговый дом Сельхоздеталь</li>
        </ul>
      </div>
      <p>Прямые поставки обеспечивают разумную ценовую политику, Широкий ассортимент (рукава напорные, гофрированные, дюритовые, газосварочные, поливочные, ремни станочные, мельничные, вариаторные, вентиляторные, многоручьевые, SPA, SPB, SPZ, ленты транспортёрные, ремни плоские, изоляционные материалы, сальники, манжеты, ленты, поранит, набивка, картон, герметики, абразивный инструмент, метизы, трубки топливные, пищевые, армированные, запчасти для с/х техники и многое другое) обеспечивают большинство потребностей сельского хозяйства, промышленности и бытовых нужд Постоянное наличие заявленного товара позволяет оперативно обслуживать запросы наших клиентов. Качество реализуемой продукции подтверждается сертификатами и паспортами заводов изготовителей</p>
    </div>
  </li>
  <li>
    <strong>Производство автотракторных, комбайновых запчастей и метизов</strong><br />
    <div>
      Богатый опыт в сфере производства и наличие станочного парка позволяет осуществлять качественное серийное производство следующей продукции: лента подборщика «Енисей», ленты жаток ЖВН, заклепки стальные, алюминиевые, шайбы медные, рукава высокого давления (РВД), транспортёры наклонных камер и цепи элеваторные комбайнов Енисей, Вектор, Дон, Акрос, пружины на авто/сельхозтехнику и другие запчасти.
    </div>
  </li>
</ul>
<br />
<h3 style="text-align:center">Благодарим Вас за то, что обратили внимание на наш сайт и надеемся на плодотворное сотрудничество.<br />Мы постараемся сделать всё, что бы Вам было удобно и выгодно работать с нами.</h3>
`
    };
  }

  public render() {
    logs('render', 'AboutComponent');
    const style = this.getStyle();
    const content = <div dangerouslySetInnerHTML={this.createMarkup()} />;
    return (
      <MiddleLayout route={'/about'}>
        <div style={style.container}>
          {IS_DEV && IS_SHOW_ABOUT && content}
        </div>
      </MiddleLayout>
    );
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    // loadBalance: () => {
    //   // dispatch({ type: ActionTypes.LOAD_BALANCE });
    // }
  };
};
export const About = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(AboutComponent);

