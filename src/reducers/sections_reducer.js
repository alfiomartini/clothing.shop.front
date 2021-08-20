import  SECTIONS  from '../assets/SectionsData.js';

const INITIAL_STATE = {
  sections: SECTIONS
};

const sectionsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    default: return state;
  }
}

export default sectionsReducer;