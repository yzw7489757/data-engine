import React from 'react';
import ViewEngine from 'atom-view-engine';
import DataEngine from '../../src/index';
import { IViewData } from 'atom-view-engine/lib/interface';

const DATA = {
  field1: {
    type: 'input',
    label: '123',
    span: 6,
    props: {
      value: '12345'
    }
  },
  field2: {
    label: '456',
    children: {
      field3: {
        type: 'text',
        label: 'label_field3',
        span:8,
        props: {
          value: 'value_field3'
        }
      },
      field4:{
        type: 'text',
        span:8,
        label: 'label_field4',
        props: {
          value: 'value_field4'
        }
      },
      field5:{
        type: 'text',
        span:8,
        label: 'label_field5',
        props: {
          value: 'value_field5'
        }
      }
    }
  },
  field6: {
    type: 'select',
    label: 'label_field6',
    props: {
      value: 1,
      options: [
        { value: 1, label: 'hahahhaha'},
        { value: 2, label: 'dzzzzz'},
      ]
    },
  },
  field7: {
    type: 'textarea',
    label: 'label_field7',
    props: {
      value: '123131231',
    },
  },
  field8: {
    type: 'tag',
    label: 'label_field8',
    props: {
      value: '123123123',
      style: {},
    },
  },
  field9: {
    type: 'inputNumber',
    label: 'label_field9',
    props: {
      value: 123,
    },
  },
  field10: {
    type: 'button',
    label: 'label_field10',
    props: {
      value: 'button',
    },
  },
}

const index = () => {
  const [viewData, setViewData] = React.useState<IViewData>(DATA)
  const de = React.useRef(new DataEngine({
    viewData
  }))

  // React.useEffect(() => {
  //   de.current.listener('on', (engineData) => {
  //     setViewData(engineData)
  //   })
  // }, [])

  const triggerToFormChange = React.useCallback((keyName, diffs, type, itemProps) => {
    console.log('keyName: ', keyName, diffs);
    const newData = de.current.updateProps({
      [keyName]: diffs
    })
    setViewData(newData)
    console.log('newData: ', newData);
  }, [])

  

  return (
      <ViewEngine 
        onChange={triggerToFormChange}
        viewLayout={[
          [
            'field2{12}', 
            'field2{12}', 
            'field1{20}', 
            'field3', 
            [
              'field4{8}', 'field5{8}', 'field6{8}'
            ],
            [
              'field7{8}', 'field8{8}', 'field9{8}'
            ],
            [
              'field6{8}', 'field9{8}','field10{8}'
            ]
          ],
          ['field2', 'field1', 'field8']
        ]}
        viewData={viewData}></ViewEngine>
  );
}

export default index;
