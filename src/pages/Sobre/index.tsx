import style from './Sobre.module.scss'
import tema from 'styles/Tema.module.scss'
import casaImg from 'assets/sobre/casa.png'
import massa1 from 'assets/sobre/massa1.png'
import massa2 from 'assets/sobre/massa2.png'

const massas = [massa1, massa2]

export default function Sobre() { 
  return (
    <section>
      <h3 className={tema.titulo}>Sobre</h3>
      <div className={style.sobreNos}>
        <img src={casaImg} alt="Casa Aluroni" />

        <div className={style.sobreNos__texto}>
        <p>
          Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
        </p>
        <p>
          Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
        </p>
        <p>
          Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
        </p>
        </div>
      </div>
      <div className={style.imagens}>
        {massas.map((img, index) => (
          <div key={index} className={style.imagens__imagem}>
            <img src={img} alt="Imagem da massa" />
          </div>
        ))}
      </div>
    </section>
  )
}