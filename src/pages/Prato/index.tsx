import style from './Prato.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import cardapio from 'data/cardapio.json'
import Tags from '~/components/Tags'
import Layout from '~/components/Layout'
import NotFound from '../NotFound'

export default function Prato() {
  const { id } = useParams()
  const navigate = useNavigate()
  const prato = cardapio.find(item => item.id === Number(id))

  if(!prato) {
    return <NotFound />
  }

  return (
    <Layout>
      <section className={style.container}>
        <button onClick={() => navigate(-1)} className={style.voltar}>
          &lt; Voltar
        </button>
        <h1 className={style.titulo}>
          {prato.title}
        </h1>
        <div className={style.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={style.conteudo}>
          <p className={style.conteudo__descricao}>
            {prato.description}
          </p>
          <Tags
            category={prato.category}
            description={prato.description}
            size={prato.size}
            serving={prato.serving}
            price={prato.price}
          />
        </div>
      </section>
    </Layout>
  )
}