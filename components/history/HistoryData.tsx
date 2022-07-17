import {Trans} from 'react-i18next';

export interface HistoryEvent {
  title: string | (() => JSX.Element);
  type: string | (() => JSX.Element);
  description: string | (() => JSX.Element);
  from: Date;
  to?: Date;
}

const AbiturDescription = (): JSX.Element => {
  return (
    <Trans
      i18nKey='cv.abitur.description'
      components={{list: <ul/>, item: <li className='list-disc ml-8'/>}}
    />
  );
}

const BachelorDescription = (): JSX.Element => {
  return (
    <Trans
      i18nKey='cv.bachelor.description'
      components={{list: <ul/>, item: <li className='list-disc ml-8'/>}}
    />
  );
}

export const historyData: HistoryEvent[] = [
  {
    title: 'cv.abitur.title',
    description: AbiturDescription,
    type: 'cv.type.abitur',
    from: new Date('2013'),
    to: new Date('2017')
  },
  {
    title: 'cv.moebelmartin.title',
    description: 'cv.moebelmartin.description',
    type: 'cv.type.minijob',
    from: new Date('2017'),
    to: new Date('2018'),
  },
  {
    title: 'cv.bachelor.title',
    description: BachelorDescription,
    type: 'cv.type.bachelor',
    from: new Date('2017'),
    to: new Date('2021'),
  },
  {
    title: 'cv.trutzbox.title',
    description: 'cv.trutzbox.description',
    type: 'cv.type.freelance',
    from: new Date('2018'),
  },
  {
    title: 'cv.c++.title',
    description: 'cv.c++.description',
    type: 'cv.type.hiwi',
    from: new Date('2020'),
    to: new Date('2021'),
  },
  {
    title: 'cv.psaf.title',
    description: 'cv.psaf.description',
    type: 'cv.type.hiwi',
    from: new Date('2021')
  },
  {
    title: 'cv.master.title',
    description: 'cv.master.description',
    type: 'cv.type.master',
    from: new Date('2021'),
    to: new Date('2023')
  }
];

export default historyData;
