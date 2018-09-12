/**
 * <%= componentName %> Loadable
 * @author <%= author %>
 * @date <%= date %>
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default config => Loadable({
  loader: () => import('./index'),
  loading: LoadingIndicator,
});
