// all icons
import * as Icons from '@/icons/index'

const GetIcon = (props) => {
  const { icon, ...otherProps } = props

  const Icon = Icons[icon || 'MKAbuMattarIcon']

  return <>{Icon && <Icon {...otherProps} />}</>
}

export default GetIcon
