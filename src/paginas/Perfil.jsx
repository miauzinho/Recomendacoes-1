import estilos from './Perfil.module.css'

export function Perfil(){

  
  function obterDadosFormulario(e){
   }

    return(
        <div className={estilos.conteiner}>

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