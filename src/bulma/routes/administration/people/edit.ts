/**
 * This module is responsible for handling the edit functionality of a person.
 * @module PersonEdit
 */

import { ComponentOptions } from 'vue';

import Edit from '../../../pages/people/Edit.vue';

/**
 * The options object to configure the PersonEdit component.
 * @interface PersonEditOptions
 */
interface PersonEditOptions {
  /**
   * The path to access the edit functionality for a person.
   */
  path: string;
  /**
   * The component to render for the edit functionality.
   */
  component: ComponentOptions;
  /**
   * The metadata information for the edit functionality.
   */
  meta: {
    breadcrumb: string;
    title: string;
  };
}

/**
 * The PersonEdit component.
 * @type {PersonEditOptions}
 */
const PersonEdit: PersonEditOptions = {
  path: ':person/edit',
  component: Edit,
  meta: {
    breadcrumb: 'edit',
    title: 'Edit Person',
  },
};

export default PersonEdit;