export const setCategory = (newCat) => {
    return {
      type: "SET_CATEGORY",
      value: newCat,
    };
  };

  export const setView = (newView) => {
    return {
      type: "SET_VIEW",
      value: newView,
    };
  };

  export const setItemID = (newItemID) => {
    return {
      type: "SET_ITEMID",
      value: newItemID,
    };
  };

  export const setStarship = (newStarship) => {
    return {
      type: "SET_STARSHIP",
      value: newStarship,
    }
  }

  export const concatStarship = (newStarship) => {
    return {
      type: "CONCAT_STARSHIP",
      value: newStarship,
    }
  }
