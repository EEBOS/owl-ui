import React from 'react';
import * as bs from 'react-bootstrap';

export interface DropDownItemProps {
  map: (item: DropDownItemProps) => Array<React.ReactNode>;
  id: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any | undefined;
  length: number;
}

export interface DropDownContainerProps {
  label: string;
  selectedItem: string;
  items: DropDownItemProps;
}

export interface DropdownDefaultCommons {
  // appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  dropdown: DropDownContainerProps;
  items: DropDownItemProps;
}

export type DropdownDefaultProps = Partial<DropdownDefaultCommons> &
  React.AllHTMLAttributes<HTMLDivElement> &
  bs.DropdownButtonProps;
