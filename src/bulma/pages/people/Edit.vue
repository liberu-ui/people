<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box form-box has-background-light raises-on-hover"
                @ready="companies = $refs.form.field('companies').value"
                ref="form">
                <template #companies="props">
                    <form-field v-bind="props"
                        @update:modelValue="companies = $event"/>
                </template>
                <template #company="props">
                    <form-field v-bind="props"
                        :params="params"/>
                </template>
                <template #actions-left>
                    <a class="button is-warning"
                        @click="$router.push({
                            name: 'administration.users.edit',
                            params: { user: $refs.form.param('userId') }
                        }).catch(routerErrorHandler)"
                        v-if="$refs.form.param('userId')">
                        <span class="is-hidden-mobile">
                            {{ i18n('Edit User') }}
                        </span>
                        <span class="icon">
                            <fa icon="user"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                    <a class="button is-primary"
                        @click="$router.push({
                            name: 'administration.users.create',
                            params: $route.params,
                        }).catch(routerErrorHandler)"
                        v-else>
                        <span class="is-hidden-mobile">
                            {{ i18n('Create User') }}
                        </span>
                        <span class="icon">
                            <fa icon="user"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                </template>
            </enso-form>
            <accessories>
                <template #default="{ count }">
                    <tab keep-alive
                        id="Addresses">
                        <div class="columns is-centered">
                            <div class="column is-two-thirds">
                                <addresses controls
                                    type="person"
                                    :id="personId"
                                    @update="count.Addresses = $refs.addresses.count"
                                    ref="addresses"/>
                            </div>
                        </div>
                    </tab>
                </template>
            </accessories>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Tab } from '@enso-ui/tabs/bulma';
import { EnsoForm, FormField } from '@enso-ui/forms/bulma';
import Accessories from '@enso-ui/accessories/bulma';
import { Addresses } from '@enso-ui/addresses/bulma';

library.add(faUser);

export default {
    name: 'Edit',

    components: {
        Accessories,
        Addresses,
        EnsoForm,
        Fa,
        FormField,
        Tab,
    },

    inject: ['i18n', 'routerErrorHandler'],

    data: () => ({
        companies: [],
    }),

    computed: {
        personId() {
            return Number.parseInt(this.$route.params.person, 10);
        },
        params() {
            return {
                id: this.companies,
            };
        },
    },
};
</script>
