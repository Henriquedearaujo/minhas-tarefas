import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../ultils/enums/Tarafa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar jacaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Rever a aula 2',
      1
    ),
    new Tarefa(
      'Estudar jacaScript',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDO,
      'Rever a aula 2',
      2
    ),
    new Tarefa(
      'Estudar React.js',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Particar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
