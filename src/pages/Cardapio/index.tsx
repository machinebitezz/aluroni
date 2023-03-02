import style from './Cardapio.module.scss'
import tema from 'styles/Tema.module.scss'
import Buscador from './Buscador'
import { useState } from 'react'
import Filtros from './Filtros'
import Ordenador from './Ordenador'
import Items from './Items'
import { OpcoesOrdenador } from './Ordenador'

export default function Cardapio() {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('')

  return (
    <section className={style.cardapio}>
      <h3 className={tema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={style.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Items busca={busca} filtro={filtro} ordenador={ordenador}/>
    </section>
  )
}