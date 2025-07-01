import estilos from "./SecaoBanner.module.css"

export default function SecaoBanner (props) {
    return (
        <section className={estilos.Secao_Banner}>
            <div className={
                props.ehTemaEscuro
                ? estilos.imagemDeFundo_modo_escuro
                : estilos.imagemDeFundo_modo_claro
                } >
            </div>
            <div className={estilos.texto_secaoBanner}>
                <p>
                    Seçao Banner --- <br/>
                    Brandig / UI / UX / TECNOLOGIA
                </p>
                <h2>Agencia de Brandig </h2>
                <span> e design digital</span>             
            </div>
        </section>
    )
}