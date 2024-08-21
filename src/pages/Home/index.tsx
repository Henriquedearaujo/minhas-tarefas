import BotaoAdcionar from '../../components/BotaoAdcionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostraFiltros />
    <ListaDeTarefas />
    <BotaoAdcionar />
  </>
)

export default Home
