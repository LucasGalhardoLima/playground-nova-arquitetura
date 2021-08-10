import types from './types';

export default {
  alteraMensagem: ({ commit }, playload) => commit(types.ALTERA_MENSAGEM, playload),
};
