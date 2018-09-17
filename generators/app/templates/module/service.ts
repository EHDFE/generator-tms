/**
 * <%= componentName %> service
 * @author <%= author %>
 * @date <%= date %>
 */
import request, { mocker } from 'utils/request';
import { USE_MOCK } from '../../CONFIG';

// API list
const PATHLIST_RESOURCE = '/apiPath';

if (process.env.NODE_ENV === 'development') {
  // 只在开发环境有效
  // 生产环境通过 tree shaking 可以消除这段代码
  mocker
    .on('post', PATHLIST_RESOURCE)
    .reply(() => import('./mock/mock').then(exports => [200, exports.default]));
}

/**
 * 获取资源信息
 * 其实就是拿菜单树
 */
export const getData = data => {
  return request(
    {
      method: 'post',
      url: PATHLIST_RESOURCE,
      data,
    },
    {
      useMock: USE_MOCK,
      globalErrorMsg: true,
    },
  );
};
