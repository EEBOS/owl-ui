import React from 'react';
import * as bs from 'react-bootstrap';

export interface AccordionItemProps {
  id: string | number | undefined;
  label: string;
  view: React.ReactNode;
}

export interface AccordionDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  items?: AccordionItemProps[];
}

export interface themePrefixesProps {
  [key: string]: string;
}

export type AccordionDefaultProps = Partial<AccordionDefaultCommons> &
  React.AllHTMLAttributes<HTMLDivElement>;
