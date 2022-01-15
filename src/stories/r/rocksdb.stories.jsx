import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RocksDBPlain } from '../../index'

const stories = storiesOf('rocksdb', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RocksDBPlain />
    </Fragment>
  )
})
