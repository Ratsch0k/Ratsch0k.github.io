import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Skill} from './index';
import CodeIcon from '../icons/CodeIcon';
import Progress from '../Progress';

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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const isIntersecting = entry.isIntersecting;

      if (!visible && isIntersecting) {
        setVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
  });

  return (
    <div ref={ref}>
      <div>
      {t('skills.coding.content')}
      </div>
      <ul className='list-disc ml-8 mr-2 space-y-2'>
        {
          languages.map(({name, rating}, index) => {
            return (
              <div key={`coding-${name}`}>
                <li>{t(`skills.coding.langlist.${name}`)}</li>
                <Progress
                  value={visible ? rating / 5 : 0}
                  animated
                  delay={index * 100 + 500}
                  leftLabel={t('skills.coding.langlist.lowest')}
                  rightLabel={t('skills.coding.langlist.highest')}
                />
              </div>
            );
          })
        }
      </ul>
    </div>
  );
};

const coding: Skill = {
  name: 'skills.coding.title',
  icon: <CodeIcon />,
  content: <CodingSkill />,
};

export default coding;