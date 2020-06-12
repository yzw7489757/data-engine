import { DataEngineProps } from './interface';
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import merge from 'lodash/merge'
import { IViewData, IViewDataItem } from 'atom-view-engine/lib/interface';
import { isObject } from './utils/index';

class DataEngine {

  data: IViewData;

  constructor({ viewData }: DataEngineProps) {
    this.data = cloneDeep(viewData)
  }

  // 订阅模式实现
  listener = (type: string, callback: (engineData: IViewData , values?: IViewData) => void) => {
    
  }

  updateProps = (diffs: IViewData) => {
    Object.keys(diffs).forEach(field => {
      this.updateField(field, diffs[field])
    })
    return this.data
  }

  updateField = (field: string, props: IViewDataItem) => {
    forEach(this.data, (key, attr: IViewDataItem) => {
      if(key === field) {
        return merge(attr, {props})
      }
      // if(key === 'field10') {
      //   return merge(attr, { props: { value: attr.props?.value + '1'}})
      // }
      return attr
    })
  }
}

export default DataEngine


function forEach(data: IViewData, cb: (key: string, attr: any) => any) {
  const backups: IViewData = {}
  Object.keys(data).forEach(key => {
    const item = data[key]
    const result = cb(key, item);
    backups[key] = result;

    if(item.children && isObject(item.children) && !isEmpty(item.children)) {
      const children = forEach(item.children, cb)
      backups[key] = {
        ...backups[key],
        children
      }
    }
  })
  return backups
}