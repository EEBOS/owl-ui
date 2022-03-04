import * as React from 'react'
import { DefaultButtonProps } from './Default.types'
import * as styles from './styles.module.scss'

const baseClass = 'owluiButtonDefault'

export const Component = (props: DefaultButtonProps) => {
  const { children } = props

  let modulePrefix = props.prefix
  let theme = props.theme
  let appearance = props.appearance
  let size = props.size

  if (modulePrefix === undefined) {
    modulePrefix = ''
  }

  if (theme === undefined) {
    theme = 'Default'
  }

  if (appearance === undefined) {
    appearance = 'Primary'
  }

  if (size === undefined) {
    size = 'Medium'
  }
  
  return <button
    className={[
      modulePrefix + styles[baseClass],
      modulePrefix + styles[`${baseClass}${theme}`],
      modulePrefix + styles[`${baseClass}${theme}${appearance}`],
      modulePrefix + styles[`${baseClass}${size}`]
    ].join(' ')}
  >{children}</button>
}

export default {
  Component
};