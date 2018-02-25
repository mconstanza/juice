// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const initialState = {
  ingredients:{
    apples: {
      name: "Apples",
      quantity: 0
    },
    carrots: {
      name: "Carrots",
      quantity: 0
    },
    ginger: {
      name: "Ginger",
      quantity: 0
    },
    pears: {
      name: "Pears",
      quantity: 0
    },
    sweetPotatoes: {
      name: "Sweet Potatoes",
      quantity: 0
    },
    kaleLeaves: {
      name: "Kale Leaves",
      quantity: 0
    },
    cucumbers: {
      name: "Cucumbers",
      quantity: 0
    },
    lemons: {
      name: "Lemons",
      quantity: 0
    },
    celerySticks: {
      name: "Celery Sticks",
      quantity: 0
    }
  }
};

export default initialState;
