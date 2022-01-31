import React from 'react';
import {useTranslation} from 'react-i18next';
import {Skill} from './index';
import CodeIcon from '../icons/CodeIcon';

const languages = [
  {
    name: 'javascript',
    rating: 5,
  },
  {
    name: 'python',
    rating: 5,
  },
  {
    name: 'c++',
    rating: 4,
  },
  {
    name: 'java',
    rating: 3.5,
  },
  {
    name: 'rust',
    rating: 2,
  },
  {
    name: 'brainfuck',
    rating: 1,
  }
]

const CodingSkill = () => {
  const {t} = useTranslation();

  return (
    <>
      <div>
      {t('skills.coding.content')}
      </div>
      <ul className='list-disc ml-8'>
        {
          languages.map(({name}) => {
            return (
              <li key={`coding-${name}`}>{t(`skills.coding.langlist.${name}`)}</li>
            );
          })
        }
      </ul>
    </>
  );
};

const coding: Skill = {
  name: 'skills.coding.title',
  icon: <CodeIcon />,
  content: <CodingSkill />,
};

export default coding;