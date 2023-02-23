import style from './Item.module.scss'
import cardapio from '../itens.json'
import classNames from 'classnames'

interface Props {
  item: typeof cardapio[0]
}

export default function Item({item}: Props) {
  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={item.photo} alt={item.title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <div className={style.item__tags}>
          <div className={classNames(
            style.item__tipo,
            style[`item__tipo__${item.category.label.toLocaleLowerCase()}`])}>
            {item.category.label}
          </div>
          <div className={style.item__porcao}>{item.size}g</div>
          <div className={style.item__qtdpessoas}>{`Serve ${item.serving} pessoa${item.serving === 1 ? 's' : ''}`}</div>
          <div className={style.item__valor}>R$ {item.price}</div>
        </div>
      </div>
    </div>
  )
}