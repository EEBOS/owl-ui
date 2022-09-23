import React from 'react';
import { ThemeProvider, ProgressBar as BsProgressBar } from 'react-bootstrap';
import { ProgressBarDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const ProgressBar = (props: ProgressBarDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'progress';
  const { now, variant, showLabel } = props;
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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'pxScale', 'showLabel']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes[`${baseClass}-bar`] = `owlui-${baseClass}-bar`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsProgressBar
        {...locals}
        variant={variant}
        label={showLabel ? `${now}%` : ''}
        style={showLabel ? { height: 'auto' } : undefined}
      />
    </ThemeProvider>
  );
};

export default {
  ProgressBar,
};
