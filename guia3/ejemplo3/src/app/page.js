"use client";
import { useState } from "react"; import styles from "./page.module.css";

export default function Home() { const [numero1, setNumero1] = useState(''); const [numero2, setNumero2]
= useState(''); const [resultado, setResultado] = useState(null);

const sumar = () => {
 const resultadoSuma = parseFloat(numero1) + parseFloat(numero2); setResultado(`Resultado de la suma:
${resultadoSuma}`);
};
const restar = () => {
 const resultadoResta = parseFloat(numero1) - parseFloat(numero2); setResultado(`Resultado de la resta:
${resultadoResta}`);
};

const multiplicar = () => {
  const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2); setResultado(`Resultado de la multiplicacion es
 ${resultadoMultiplicacion}`);
 };

 const dividir = () => {
 if(numero1==0 || numero2==0){
  const resultadoDivision = setResultado(`No se puede dividir por cero`);
 }else{
  const resultadoDivision = parseFloat(numero1) / parseFloat(numero2); setResultado(`Resultado de la Division es
    ${resultadoDivision}`);
 }
 };

 const potencia = () => {
  const resultadoPotencia = parseFloat(numero1) * parseFloat(numero2); setResultado(`Resultado de la multiplicacion es
 ${resultadoPotencia}`);
 };

 const raiz= () => {
  const resultadoRaiz = parseFloat(numero1) * parseFloat(numero2); setResultado(`Resultado de la multiplicacion es
 ${resultadoRaiz}`);
 };


 

 return ( <main className={styles.main}>
 <div className={styles.calculadora}>
 <div className={styles.numeros}>
 <label className={styles.text}>Número 1:</label> <input className={styles.inputnum}
type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
 </div>
 <div className={styles.numeros}>
 <label className={styles.text} >Número 2:</label> <input
className={styles.inputnum} type="number" value={numero2} onChange={(e) =>
setNumero2(e.target.value)} />
 </div>
 <div>
 <button className={styles.button} onClick={sumar}>Sumar</button>
 <button className={styles.button} onClick={restar}>Restar</button>
 <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
 <button className={styles.button} onClick={dividir}>Dividir</button>
 <button className={styles.button} onClick={potencia}>Potencia</button>
 <button className={styles.button} onClick={raiz}>Raiz</button>

  </div>
 {resultado && <div
className={styles.resultado}>{resultado}</div>}
 </div>
 </main>
); 
}