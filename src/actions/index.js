export const selectSportId = (sportId) => {
  return {
    type: 'select_sport',
    payload: sportId,
  };
};
