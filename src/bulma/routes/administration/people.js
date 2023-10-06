import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./people', false, /.*\.js$/));
const RouterView = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'people',
    component: RouterView,
    meta: {
        breadcrumb: 'people',
        route: 'administration.people.index',
    },
    children: routes,
};
