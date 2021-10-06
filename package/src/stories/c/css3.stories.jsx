import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CSS3Plain } from '../../index'

const stories = storiesOf('css3', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CSS3Plain />
    </Fragment>
  )
})
