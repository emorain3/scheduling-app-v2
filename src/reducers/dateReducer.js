
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const dateReducer = (state = new Date().toLocaleDateString(undefined, options), action) => {
    // const currDate = new Date().toLocaleDateString(undefined, options);
    return state
  }

  export default dateReducer;