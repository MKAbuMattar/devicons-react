import * as DevIconsReact from 'devicons-react-beta';
import { Fragment } from 'react';

const ListIcons = ({ componentName }) => {
  const Component = DevIconsReact[componentName || 'DeviconsReactOriginal'];

  return (
    <Fragment>
      <Component />
    </Fragment>
  );
};

export default ListIcons;
