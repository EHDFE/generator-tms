/**
 * <%= componentName %> Component
 * @author <%= author %>
 * @date <%= date %>
 */
import * as React from 'react';

import styles from './index.module.less';

export interface I<%= componentName %>Props {}

const <%= componentName %> = (props: I<%= componentName %>Props) => (
  <div className={styles.<%= componentName %>}>
    <%= componentName %>
  </div>
);

export default <%= componentName %>;
