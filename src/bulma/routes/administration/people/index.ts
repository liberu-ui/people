/**
 * Represents the People Index component that is imported from the './pages/people/Index.vue' module.
 */
const PeopleIndex: () => Promise<typeof import("../../../pages/people/Index.vue")> = () => import("../../../pages/people/Index.vue");

/**
 * Represents the default export of the module.
 * @property {string} name - The name of the administration.people.index component.
 * @property {string} path - The path of the component.
 * @property {Promise<typeof import("../../../pages/people/Index.vue")>} component - The component to be rendered.
 * @property {object} meta - The meta information of the component.
 * @property {string} meta.breadcrumb - The breadcrumb value.
 * @property {string} meta.title - The title of the component.
 */
const administrationPeopleIndex: {
    name: string;
    path: string;
    component: () => Promise<typeof import("../../../pages/people/Index.vue")>;
    meta: {
        breadcrumb: string;
        title: string;
    };
} = {
    name: 'administration.people.index',
    path: '',
    component: PeopleIndex,
    meta: {
        breadcrumb: 'index',
        title: 'People',
    },
};

export default administrationPeopleIndex;