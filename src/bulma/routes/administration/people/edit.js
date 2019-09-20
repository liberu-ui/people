const PersonEdit = () => import('../../../pages/people/Edit.vue');

export default {
    name: 'administration.people.edit',
    path: ':person/edit',
    component: PersonEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Person',
    },
};
