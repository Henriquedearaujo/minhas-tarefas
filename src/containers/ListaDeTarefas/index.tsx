import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../ultils/enums/Tarafa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar redux.js',
    descricao: 'Como preparar o anbiente ',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDO
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Dia 30 de setembro',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
