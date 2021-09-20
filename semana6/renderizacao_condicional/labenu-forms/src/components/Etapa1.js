
function Etapa1() {
  return (
    <div>
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <p>1. Qual o seu nome?</p>
      <input placeholder="ummm" />
      <p>1. Qual a sua idade?</p>
      <input placeholder="doiss" />
      <p>1. Qual seu email?</p>
      <input placeholder="tress" />
      <p>1. Qual a sua escolaridade?</p>
      <select>
      <option selected value="Ensino médio incompleto">Ensino médio incompleto</option>
        <option value="Ensino médio completo">Ensino médio completo</option>
        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
        
        <option value="Ensino superior completo">Ensino superior completo</option>
      </select>
    </div>
  );
}

export default Etapa1;
