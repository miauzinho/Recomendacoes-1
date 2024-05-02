import { useState } from 'react'
import estilos from './Login.module.css'

export function Login(){
    return(
        <div className={estilos.conteiner}>

            <form className={estilos.formulario}>

                <input 
                  className={estilos.campo}
                  placeholder='Usuário' />

                <input 
                  className={estilos.campo}
                  placeholder='Senha' />

                <button
                   className={estilos.botao}
                 >Entrar</button>

            </form>
        </div>
    )
}