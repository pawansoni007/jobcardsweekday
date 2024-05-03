const initialState = {
  minExperience: "",
  remoteOrOnSite: "",
  minBasePay: "",
  companyName: "",
  location: "",
  role: "",
  techStack: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return {
        ...state,
        [action.payload.filterName]: action.payload.filterValue,
      };
    default:
      return state;
  }
};

export default filtersReducer;
