import { Outlet } from 'react-router-dom'
import style from './Layout.module.scss'
import tema from 'styles/Tema.module.scss'
import { ReactNode } from 'react'

export default function Layout({ children }: { children?: ReactNode}) {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>
          A casa do código e da massa
        </div>
      </header>

      <div className={tema.container}>
        <Outlet />
        {children}
      </div>
    </>
  )
}