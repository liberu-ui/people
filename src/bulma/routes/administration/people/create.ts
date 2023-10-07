/**
 * This module exports a default object that represents the route configuration
 * for the 'administration.people.create' route.
 */

import { RouteConfig } from 'vue-router';
import { ComponentOptions } from 'vue';

// Import the component that will be rendered for the 'administration.people.create' route
import PersonCreate from '../../../pages/people/Create.vue';

const routeConfig: RouteConfig = {
  /**
   * The name of the route configuration object.
   */
  name: 'administration.people.create',
  
  /**
   * The URL path of the route.
   */
  path: 'create',
  
  /**
   * The component to render for the route.
   */
  component: PersonCreate,
  
  /**
   * Additional meta information for the route.
   */
  meta: {
    /**
     * The text to display in the breadcrumb navigation for this route.
     */
    breadcrumb: 'create',
    
    /**
     * The title of the page.
     */
    title: 'Create Person',
  },
};

export default routeConfig;