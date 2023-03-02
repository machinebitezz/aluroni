import classNames from 'classnames'
import { Prato } from '~/types/Prato'
import style from './Tags.module.scss'

export default function Tags({ category, size, serving, price }: Omit<Prato, 'id' | 'photo' | 'title'>) {
  return (
    <div className={style.tags}>
      <div className={classNames({
        [style.tags__tipo]: true,
        [style[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}>
        {category.label}
      </div>
      <div className={style.tags__porcao}>
        {size}g
      </div>
      <div className={style.tags__qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={style.tags__valor}>
        R$ {price}
      </div>
    </div>
  )
}