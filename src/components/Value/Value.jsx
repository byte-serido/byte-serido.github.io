import React from "react";
import './style.css';

function Value() {
    return (
        <div className='title-value section-value text-center-value'>
            <h2>Nossos <span className="color">Valores</span></h2>
            <div className='border-value'></div>

            <div className="team-member-value">
                <ul>
                    <li>
                        <footer>
                            <h3>Compromisso</h3>
                            <p>Nós, da Byte, acreditamos que o progresso se dará pela responsabilidade de lidar com as atribuições que nos são conferidas, sejam externas, como entregas a clientes, ou internas, ao cumprir com as atividades da empresa.
</p>
                        </footer>
                    </li>
                    <li>

                        <footer>
                            <h3>Transparência</h3>
                            <p>Acreditamos que a honestidade é necessária para credibilidade da empresa, tanto internamente quanto externamente, para que o cliente e/ou futuros membros tenham orgulho da Byte.</p>
                        </footer>
                    </li>
                    <li>
                        
                        <footer>
                            <h3>Respeito pela diversidade</h3>
                            <p>Compreendemos que a diversidade dos integrantes, suas escolhas, seus anseios, suas individualidades, devem ser respeitadas para criarmos um clima de colaboração e resultados, além de tornar as pessoas mais próximas. Acreditamos que é um dever tratar todos com respeito.</p>
                        </footer>
                    </li>
                    <li>
                        <footer>
                            <h3>Paixão pelo que faz</h3>
                            <p>Acreditamos que a paixão move atitudes, que sem ela não há excelência nas entregas ou o compromisso em fazer. É de máxima importância para realização pessoal e, também, afeta o ambiente da empresa, dado que todos são apaixonados pelo que fazem e estão sempre dispostos a ir mais longe.</p>
                        </footer>
                    </li>
                    <li>
                        <footer>
                            <h3>Companheirismo</h3>
                            <p>Na Byte, acreditamos que ter companheirismo no trabalho é caminhar juntos, isso significa que os profissionais precisam ter os mesmos objetivos e se ajudarem mutuamente a conquistar as metas.</p>
                        </footer>
                    </li>

                </ul>
            </div>
        </div>


    )
}

export default Value;
/*

 <div className='container-value'>
            <div className='title-value'>
                <h2>Nossos <span className="color"> Valores</span></h2>
                <div className='border-value'>

                </div>
            </div>
        </div>



*/