import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TailwindCSSPlain } from '../../index'

const stories = storiesOf('tailwindcss', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TailwindCSSPlain />
    </Fragment>
  )
})
