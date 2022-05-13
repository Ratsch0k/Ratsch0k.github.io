export interface HistoryEvent {
  title: string;
  type: string;
  description: string;
  from: Date;
  to?: Date;
}

export const historyData: HistoryEvent[] = [
  {
    title: 'cv.abitur.title',
    description: 'cv.abitur.description',
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
    description: 'cv.bachelor.description',
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
