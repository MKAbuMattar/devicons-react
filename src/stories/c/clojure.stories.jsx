import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ClojureOriginal, ClojureLine } from '../../index'

const stories = storiesOf('clojure', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ClojureOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('line', () => {
  return (
    <Fragment>
      <ClojureLine height="128" width="128" />
    </Fragment>
  )
})
