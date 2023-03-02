import style from './NotFound.module.scss'
import tema from 'styles/Tema.module.scss'
import classNames from 'classnames'
import { ReactComponent as NotFoundImg } from 'assets/not_found.svg'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className={classNames({
      [style.container]: true,
      [tema.container]: true
    })}>
      <div className={style.voltar}>
        <button onClick={() => {
          navigate(-1)
        }}>
          &lt; Voltar
        </button>
      </div>
      <NotFoundImg />
    </div>
  )
}