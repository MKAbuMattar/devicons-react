import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { HandlebarsOriginal } from '../../index'

const stories = storiesOf('handlebars', module)

stories.add('original', () => {
  return (
    <Fragment>
      <HandlebarsOriginal />
    </Fragment>
  )
})
