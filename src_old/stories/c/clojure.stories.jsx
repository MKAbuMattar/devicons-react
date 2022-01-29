import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ClojureLine } from '../../index'

const stories = storiesOf('clojure', module)

stories.add('line', () => {
  return (
    <Fragment>
      <ClojureLine />
    </Fragment>
  )
})
