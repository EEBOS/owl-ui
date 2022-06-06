import * as React from 'react';
import { CardFooterProps } from './CardFooter.types';
import { Card } from 'react-bootstrap';

export const Component = (props: CardFooterProps) => {
  const { children } = props;

  return (
    <Card.Footer {...props} bsPrefix="owlui-card-footer">
      {children}
    </Card.Footer>
  );
};

export default {
  Component,
};
