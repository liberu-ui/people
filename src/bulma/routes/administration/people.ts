```
import routeImporter, { Route } from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Import routes dynamically.
 * @param context - The context of the imported routes.
 * @returns An array of routes.
 */
const importRoutes = (context: __WebpackModuleApi.RequireContext): Route[] => {
    return routeImporter(context);
};

/**
 * Component for handling routing in the application.
 */
const RouterView: any = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

/**
 * The people route configuration.
 */
const peopleRoute = {
    path: 'people',
    component: RouterView,
    meta: {
        breadcrumb: 'people',
        route: 'administration.people.index',
    },
    children: importRoutes(require.context('./people', false, /.*\.ts$/)),
};

export default peopleRoute;
```