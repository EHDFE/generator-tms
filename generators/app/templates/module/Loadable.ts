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
        import(/* webpackChunkName: "<%= kebabCaseName %>" */ './index').then(
          exports => exports.default(config),
        ),
      loading: LoadingIndicator,
    });
}

export default Component;

export { default as modelFactory } from './model';
