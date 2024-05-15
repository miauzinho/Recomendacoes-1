import estilos from './Perfil.module.css'

export function Perfil(){

    return(
      
        <div className={estilos.conteiner}>
          <p className={estilos.conteiner}>Perfil</p>

            <form className={estilos.formulario}
                 onSubmit={obterDadosFormulario}>


                <input 
                  className={estilos.campo}
                  placeholder='Usuário'
                  />

                <input 
                  className={estilos.campo}
                  placeholder='Senha'
                />

                <button
                   className={estilos.botao}
                   type='submit'
                 >Confirmar</button>

            </form>
        </div>
    )
}