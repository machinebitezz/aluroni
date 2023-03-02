import style from './Item.module.scss'
import { Prato } from '~/types/Prato'
import Tags from '~/components/Tags'
import { useNavigate } from 'react-router-dom'

interface Props {
  item: Prato
}

export default function Item({item}: Props) {
  const navigate = useNavigate()

  return (
    <div className={style.item} onClick={() => navigate(`/prato/${item.id}`)}>
      <div className={style.item__imagem}>
        <img src={item.photo} alt={item.title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <Tags
          size={item.size}
          category={item.category}
          description={item.description}
          serving={item.serving}
          price={item.price}
        />
      </div>
    </div>
  )
}