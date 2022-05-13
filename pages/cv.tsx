import {PageComponent} from '../components/PageComponent';
import {History} from '../components/history';
import {useEffect} from 'react';

const CV: PageComponent = ({setScrollable}) => {
  useEffect(() => setScrollable(true), []);

  return <History/>;
};

export default CV;