import React from 'react';
import ReactDOM from 'react-dom';
import MyTreeView from '../component/MyTreeView';
const data = {"id":0,"node":"world","childs":[{"id":1,"url":"www.google.com","node":"South America","childs":[{"id":11,"url":"www.google.com","node":"Brazil","childs":[]},{"id":12,"url":"www.google.com","node":"Uruguay","childs":[]}]},{"id":2,"url":"www.google.com","node":"North America","childs":[{"id":21,"url":"www.google.com","node":"Canada","childs":[]},{"id":22,"url":"www.google.com","node":"USA","childs":[{"id":221,"url":"www.google.com","node":"New York","childs":[{"id":2211,"node":"Brooklyn","childs":[]}]}]}]}]}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyTreeView data={data}/>, div);
});
