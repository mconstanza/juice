// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  JuiceRecipes,
} from './';

export default {
  path: 'juice',
  name: 'Juice',
  childRoutes: [
    { path: 'juice-recipes', name: 'Juice recipes', component: JuiceRecipes, isIndex: true },
  ],
};
