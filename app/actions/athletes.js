export const CHANGE_ATHLETE = 'CHANGE_ATHLETE';
export const GET_INITIAL_ATHLETES = 'GET_INITIAL_ATHLETE';
export const GET_ATHLETE_RESULT = 'GET_ATHLETE_RESULT';
export const GET_ATHLETE_ERROR = 'GET_ATHLETE_ERROR';

export const changeAthlete = athlete => ({
  type: CHANGE_ATHLETE,
  athlete,
});

export const getInitialAthletes = () => ({
  type: GET_INITIAL_ATHLETES,
});

