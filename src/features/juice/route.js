// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  JuiceRecipes,
} from './';

export default {
  path: '/',
  name: 'Juice',
  childRoutes: [
    { path: '/', name: 'Juice recipes', component: JuiceRecipes, isIndex: true },
  ],
};
