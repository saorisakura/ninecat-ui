import { defineComponent,App,HTMLAttributes,SetupContext,PropType, toRefs } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const ListProps= {
  data:{
    type: Object as PropType<[]>,
    default: []
  },
  size:{
    type: String as PropType<string>,
    default: 'md',
  },
  bordered:{
    type: Boolean as PropType<boolean>,
    default: false,
  },
  hover: {
    type: Boolean as PropType<boolean>,
    default: false,
  }
}


const NList = defineComponent({
  name: 'NList',
  props: ListProps,
  setup(props) {
    const {data,size,bordered,hover} = toRefs(props);

    const ulClass = () => {
      const ulClassList = ['n-list',bordered.value ? 'bordered' : '']
      return classNames(ulClassList)
    }

    const listClass = () => {
      let classList = [];
      if (size.value && typeof size.value === 'string') {
        classList.push(`li${size.value}`)
      }
      if (bordered.value) {
        classList.push('bordered')
      }
      if (hover.value) {
        classList.push('hover')
      }
      return classNames(classList);
    }

    const renderLi = () => {
      let res = data.value.map(dataItem => {
        return <li class={listClass()}>{dataItem}</li>
      })
      return (<>{res}</>)
    }

    return () => (
      <ul class={ulClass()}>
        {renderLi()}
      </ul>
    )
  }
})

NList.install = function (app: App) {
  app.component(NList.name, NList);
  return app;
};

export default NList;
