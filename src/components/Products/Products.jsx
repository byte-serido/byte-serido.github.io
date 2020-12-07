import React from 'react';
import './styles.css';

function Products(){
	return(
		<div className="title-producto section-producto text-center-producto">
			<h2>
				Nossos <span className="color">Produtos</span>
			</h2>
			<div className="border-producto"></div>

			<div className="team-member-producto">
				<ul>
					<li>
						<footer>
							<h3>Marketing Digital</h3>
							<p>
							Marketing Digital é o conjunto de estratégias voltadas para a promoção de uma marca na internet. Difere-se do marketing tradicional por envolver o uso diferentes canais online e métodos que permitem a análise dos resultados em tempo real.
							</p>
						</footer>
					</li>
					<li>
						<footer>
							<h3>Gerenciamento de Redes Sociais</h3>
							<p>
							O gerenciamento de redes sociais consiste em garantir uma boa estratégia multicanal, visando encontrar o equilíbrio entre atendimento ao cliente, criação de conteúdo e análise de resultados dentro dos canais sociais da sua empresa.
							</p>
						</footer>
					</li>
					<li>
						<footer>
							<h3>Campanhas publicitárias</h3>
							<p>
							Campanha publicitária é o conjunto de ações de publicidade dentro de um período determinado, desenvolvidas a partir de um planejamento específico, cujo principal objetivo é promover uma marca, produto, serviço ou indivíduo.
							</p>
						</footer>
					</li>

					<li>
						<footer>
							<h3>Design de Marcas</h3>
							<p>
							A marca gráfica (também chamada de logo, logotipo, e até mesmo logomarca) tenta sintetizar graficamente um ou mais aspectos dentre os mais importantes incorporados à sua promessa de marca.
							</p>
						</footer>
					</li>
					<li>
						<footer>
							<h3>Desenvolvimento de Sistemas e Sites Web</h3>
							<p>
							Desenvolvimento web é o termo utilizado para descrever o desenvolvimento de sites, na Internet ou numa intranet.
							</p>
						</footer>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Products;
