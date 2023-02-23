import style from './Filtros.module.scss'
import filtros from './filtros.json'
import classNames from 'classnames'

type opcao = typeof filtros[0]
interface Props {
  filtro: number | null
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: Props) {
  function selecionarFiltro(opcao: opcao) { 
    if (filtro === opcao.id) {
      setFiltro(null)
      return 
    }

    setFiltro(opcao.id)
   }

  return (
    <div className={style.filtros}>
      {filtros.map(opcao => {
        return (
          <button className={classNames({
            [style.filtros__filtro]: true,
            [style['filtros__filtro--ativo']]: filtro === opcao.id
          })}
            key={opcao.id}
            onClick={() => selecionarFiltro(opcao)} >
            {opcao.label}
          </button>
        )
      })}
    </div>
  )  
}