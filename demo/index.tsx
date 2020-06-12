import React from 'react'
import ReactDOM from 'react-dom'
import { Material } from 'dev-dashboard';
import { name } from '../package.json';
import UI from './UI';

const path = name.split('-').slice(1, 3).join('-');
const title = path.split('-').join(' ').toLocaleUpperCase()

ReactDOM.render(
  <Material
    title={title} 
    basePath={path} 
    routes={UI}
    showFooter={true}
  />,
  document.getElementById('root'))
