/**
 * <%= componentName %> Loadable
 * @author <%= author %>
 * @date <%= date %>
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default config => {
  return Loadable({
    loader: () =>
      import('./index').then(exports => {
        return exports.default(config);
      }),
    loading: LoadingIndicator,
  });
};
