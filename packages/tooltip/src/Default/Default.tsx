import React, { useState } from 'react';
import {
  ThemeProvider,
  Overlay,
  OverlayTrigger,
  Tooltip,
  Button,
  Popover,
} from 'react-bootstrap';
import { TooltipDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TooltipDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'tooltip';
  const {
    children,
    target,
    show,
    popoverShow,
    setPopoverShow,
    placement,
    variant,
    trigger,
    rootClose,
  } = props;
  const prefix = props.prefix || '';
  // const [componentShow, setComponentShow] = useState(false);
  // const target = useRef(null);

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
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size', 'target']
  );

  if (show || popoverShow) {
    locals['className'] += ' owlui-show';
  }

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['hide'] = 'owlui-hide';
  themePrefixes['show'] = 'owlui-show';
  themePrefixes['fade'] = 'owlui-fade';
  themePrefixes['btn-primary'] = 'owlui-btn-primary';
  themePrefixes['btn'] = 'owlui-btn';
  themePrefixes['popover'] = 'owlui-popover';
  themePrefixes['tooltip'] = 'owlui-tooltip';
  themePrefixes['popover-header'] = 'owlui-popover-header';
  themePrefixes['popover-body'] = 'owlui-popover-body';
  themePrefixes['bs-popover-bottom'] = 'owlui-popover-bottom';
  themePrefixes['popover-arrow'] = 'owlui-popover-arrow';

  const handleToggle = () => {
    setPopoverShow(!popoverShow);
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Overlay
        target={target}
        show={show}
        placement={placement}
        rootClose
        rootCloseEvent="click"
        rootCloseDisabled={false}
      >
        <Tooltip id="overlay" {...locals}>
          {/* <Tooltip id="overlay" {...locals} className={show ? 'owlui-show' : ''}> */}
          {children}
        </Tooltip>
      </Overlay>

      <OverlayTrigger
        trigger={trigger}
        placement={placement}
        show={popoverShow}
        key="1"
        rootClose={rootClose}
        onHide={null}
        onToggle={handleToggle}
        overlay={
          <Popover {...locals}>
            <Popover.Header as="h1">Popover header</Popover.Header>
            <Popover.Body>
              <strong>Check it out</strong> {children}
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant={variant}>Popover style</Button>
      </OverlayTrigger>

      {/* <OverlayTrigger
        trigger={trigger}
        placement={placement}
        show={componentShow}
        rootClose={rootClose}
        onToggle={handleToggle}
        overlay={
          <Tooltip {...locals}>
            <strong>Check it out</strong> {children}
          </Tooltip>
        }
      >
        <Button variant={variant}>Tooltip style</Button>
      </OverlayTrigger> */}
    </ThemeProvider>
  );
};

export default {
  Component,
};
