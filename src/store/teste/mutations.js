import types from './types';

export default {
  [types.ALTERA_MENSAGEM]: (state, payload) => {
    state.mensagem = payload;
  },
};
