import cardapio from 'data/cardapio.json'
import style from './Inicio.module.scss'
import tema from 'styles/Tema.module.scss'
import casaImg from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'

export default function Inicio() {
  const pratosRecomendados = [...cardapio].sort(() => 0.5 - Math.random()).splice(0, 3)
  const navigate = useNavigate()

  return (
    <section>
      <h3 className={tema.titulo}>Recomendações da cozinha</h3>

      <div className={style.recomendados}>
        {pratosRecomendados.map(item => (
          <div className={style.reconmendado} key={item.id}>
            <div className={style.recomendado__imagem}>
              <img src={item.photo} alt={item.title}/>
              <button
                onClick={() => {
                  navigate(`/prato/${item.id}`, { state: {...item}})
                }}
                className={style.recomendado__botao} >
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className={tema.titulo}>Nossa casa</h3>
      <div className={style.nossaCasa}>
        <img src={casaImg} alt="Casa do aluroni" />
        <div className={style.nossaCasa__endereco}>
          Rua vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  )
}