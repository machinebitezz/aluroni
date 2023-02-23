import style from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import classNames from 'classnames'
import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco'

interface Props {
  ordenador: OpcoesOrdenador
  setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}

export default function Ordenador({ordenador, setOrdenador}: Props) {
  const [aberto, setAberto] = useState(false)

  return (
    <button className={classNames({
      [style.ordenador]: true,
      [style['ordenador--ativo']]: aberto || ordenador !== ''
    })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>
        {ordenador
          ? opcoes.find(elem => (
              elem.value === ordenador
            ))?.nome
          : 'Ordenar por'
        }
      </span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}

      <div className={classNames({
        [style.ordenador__options]: true,
        [style['ordenador__options--ativo']]: aberto
      })}>
        {opcoes.map((opcao) => (
          <div onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)} key={opcao.value} className={style.ordenador__option}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}