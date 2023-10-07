/**
 * This module imports the necessary elements from the Font Awesome SVG Core library and adds the user-tie icon to the library.
 * 
 * @module Font Awesome
 */

/**
 * Imports the `library` object and the `faUserTie` icon from the Font Awesome SVG Core library.
 */
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

/**
 * Adds the `faUserTie` icon to the Font Awesome library.
 * 
 * @param {IconDefinition} icon - The FontAwesome icon.
 * @returns {void}
 */
function addIconToLibrary(icon: IconDefinition): void {
  library.add(icon);
}

// Adds the user-tie icon to the library.
addIconToLibrary(faUserTie);