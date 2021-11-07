import loadable from '@loadable/component';

export default loadable(() => {
  return import(/* webpackChunkName: "home" */ './Home');
});
