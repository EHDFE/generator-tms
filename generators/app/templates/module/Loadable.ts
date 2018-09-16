/**
 * <%= componentName %> Loadable
 * @author <%= author %>
 * @date <%= date %>
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

let Component;
if (process.env.NODE_ENV === 'development') {
  Component = require('./index').default;
} else {
  Component = config =>
    Loadable({
      loader: () =>
        import('./index').then(exports => {
          return exports.default(config);
        }),
      loading: LoadingIndicator,
    });
}

export default Component;

export { default as modelFactory } from './model';
