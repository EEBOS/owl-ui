import * as React from 'react';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTableCell';

type CellProps = React.TableHTMLAttributes<HTMLTableElement> & {
  children: React.ReactNode;
};

const Cell = (props: CellProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.defineProperty.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  return <td className={localProps.className}>{children}</td>;
};

export default Cell;
