import * as actionTypes from './action-type';

export const buildActions = (dispath) => {
  return {
    increase: () => dispath({ type: actionTypes.INCREASE }),
    decrease: () => dispath({ type: actionTypes.DECREASE }),
    reset: () => dispath({ type: actionTypes.RESET }),
    setCounter: (payload) => dispath({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispath),
    asyncError: () => asyncErrorFn(dispath),
  };
};

const asyncIncreaseFn = async (dispath) => {
  dispath({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((r) => {
    setTimeout(() => {
      dispath({ type: actionTypes.ASYNX_INCREASE_END });
      r('RESOLVED');
    }, 2000);
  });
};

const asyncErrorFn = async (dispath) => {
  dispath({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispath({ type: actionTypes.ASYNX_INCREASE_ERROR });
      reject(new Error('Deu ruin'));
    }, 2000);
  });
};
