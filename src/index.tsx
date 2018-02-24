import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './lib/hello';

const hello = new Hello();

ReactDOM.render(
  <h1>{hello.sayHello()}</h1>,
  document.getElementById('root'),
);
