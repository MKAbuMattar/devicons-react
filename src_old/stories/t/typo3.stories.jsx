import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Typo3Plain } from '../../index'

const stories = storiesOf('typo3', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <Typo3Plain />
    </Fragment>
  )
})
