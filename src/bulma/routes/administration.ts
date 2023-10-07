/**
 * This module defines the routes for the administration section of the application.
 *
 * @module AdministrationRoutes
 */

import routeImporter, { RouteImporterContext } from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Imports all the route files in the administration directory.
 *
 * @function importAdministrationRoutes
 * @param {RouteImporterContext} context - The context for importing routes.
 * @returns {Array} The imported routes.
 */
const importAdministrationRoutes = (context: RouteImporterContext): Array => {
  return routeImporter(context);
};

const administrationRoutes = {
  /**
   * The path for the administration section.
   *
   * @type {string}
   */
  path: '/administration',

  /**
   * The children routes for the administration section.
   *
   * @type {Array}
   */
  children: importAdministrationRoutes(require.context('./administration', false, /.*\.ts$/))
};

export default administrationRoutes;