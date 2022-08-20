import "./style.css";
import Header from "../../components/Header";
import Formulario from "../../components/Formulario";
import Card from "../../components/Card";

function Produto() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="contentFlex">
          <section className="contentLeft">
            <h2>Ajude o algorítimo a ser mais certeiro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ultricies tellus nec mi porta convallis sollicitudin
              eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse
              semper pretium consectetur. Praesent bibendum arcu risus, sit amet
              iaculis ex tempus quis. Cras et erat ut tellus vulputate
              tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu
              non felis tristique eleifend.
            </p>

            <p>
              Morbi eu condimentum urna. Curabitur eu magna eget turpis
              condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar
              purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra.
              Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla
              varius elementum erat vel pharetra. Aenean sit amet nisi diam.
              Morbi viverra, magna ac luctus commodo, odio ante suscipit libero,
              at mattis augue est vel metus.
            </p>
          </section>
          <section className="contentRight">
            <Formulario />
          </section>
        </div>
        <fieldset className="section">
          <legend>Sua seleção especial</legend>
        </fieldset>
        <div className="gridProducts">
          <Card />
        </div>
        <button className="btnProducts">Ainda mais produtos aqui!</button>
      <fieldset className="section">
          <legend>Compartilhe a novidade</legend>
        </fieldset>
      </main>
    </>
  );
}

export default Produto;
