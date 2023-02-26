import * as DevIconsReact from '@latest/devicons-react';
import { Fragment } from 'react';

const ListIcons = ({ componentName }) => {
  const Component = DevIconsReact[componentName || 'DeviconsReactOriginal'];

  return (
    <Fragment>
      <Component size={140} />
    </Fragment>
  );
};

export default ListIcons;
