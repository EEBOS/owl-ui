import * as React from 'react';
import { TextfieldDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '../../../../lib/src/utils';

const baseClass = 'textfield';

export const Textfield = (props: TextfieldDefaultProps) => {
  const prefix = props.prefix || '';

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'theme',
          },
          {
            fields: ['appearance'],
            value: 'Appearance',
          },
          {
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'pxScale']
  );

  return <input {...locals} />;
};

export default {
  Textfield,
};
