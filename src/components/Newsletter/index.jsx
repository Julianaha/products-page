import styles from "./Newsletter.module.css";

function Newsletter (){
    return(
        <section className={styles.boxNew}>
            <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            <div>
            <form>
                <label>Nome do seu amigo:</label>
                <input></input>
                <label>E-mail:</label>
                <input></input>
            </form>
            </div>
            <button>Enviar agora</button>
        </section>
    )
}

export default Newsletter