export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-12">
        {/* Imagem ilustrativa */}
        <img
          src="/aboutdesatualizado.png" /* coloque uma imagem em public/about.jpg */
          alt="Professor ensinando online"
          className="order-1 md:order-1 w-full md:max-h-[600px] object-cover rounded-2xl shadow-lg"
        />

        {/* Texto */}
        <div className="order-2 md:order-2 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4 text-primary">
            Nossa História: Uma Nova Forma de Aprender Inglês
          </h3>
          <p>Fundada em 2012, a <strong>SmartWay Idioms</strong> nasceu com o propósito de transformar o ensino de inglês no Brasil. Em um mercado saturado de cursos tradicionais, escolhemos seguir um caminho diferente, com foco em resultados reais e aprendizagem de verdade.</p>
          <p>Nosso maior desafio sempre foi responder a uma pergunta que inquieta milhares de brasileiros: <em>Por que, apesar de tantos cursos disponíveis, apenas 5% da população consegue algum domínio do inglês, e menos de 1% se torna fluente?</em></p>
          <p>Após anos de pesquisa e estudos científicos, desenvolvemos a exclusiva <strong>Metodologia SmartWay Idioms</strong>, que coloca o aluno no centro do aprendizado, tornando-o protagonista da sua evolução. Aqui, você começa a escrever uma nova história de sucesso com o inglês.</p>
        </div>
                
         <img
          src="/incompany.jpg" /* coloque uma imagem em public/about.jpg */
          alt="Professor ensinando online"
          className="order-3 md:order-4 w-full md:max-h-[600px] object-cover rounded-2xl shadow-lg"
          />
          <div className="order-4 md:order-3 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-primary z">
                Nosso Propósito
              </h3>
              <p className="mb-4 leading-relaxed">
                Nosso foco é o <b>ensino de língua inglesa em empresas</b> de diversos ramos, capacitando seus colaboradores  para que esses se desenvolvam e assim, possam fazer parte do grupo que não tem barreiras geográficas, consegue se comunicar e fazer negócio com o mundo todo. 
                <p>Considerando a história da nossa criação, aqueles 4% relatados na pesquisa, que estudaram Inglês por anos sem ver o retorno para o  tempo e o dinheiro investidos, nascemos  para provar que é possível sim aprender uma nova língua a qualquer tempo e em qualquer idade.</p>  
                <p>Chegamos para provar que é possível ser fluente.</p>
              </p>
              <h2 className="text-3xl font-bold mb-4 text-primary">
                YES, YOU CAN!
              </h2>
          </div>

          <img
          src="/metodologia.png" /* coloque uma imagem em public/about.jpg */
          alt="Professor ensinando online"
          className="order-5 md:order-5 w-full md:max-h-[600px] object-cover rounded-2xl shadow-lg"
          />

                    
          <div className="order-6 md:order-6 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-primary">
                  Metodologia Personalizada
                </h3>
                <p>
                  Na <strong>SmartWay Idioms</strong>, acreditamos que <strong>cada pessoa aprende de forma diferente</strong>. Por isso, utilizamos uma abordagem baseada na <em>Pedagogia Linguística</em> e na <em>Pedagogia da Educação</em>, aplicando diferentes métodos conforme as necessidades de cada aluno.
                </p>
                <p>
                  Entendemos que <strong>cada aluno é único</strong> — com ritmos, objetivos e estilos de aprendizagem próprios. Nossos cursos são, por isso, cuidadosamente personalizados, seja para indivíduos ou para grupos com perfis semelhantes.
                </p>
                <p>
                  Com essa metodologia, garantimos mais engajamento, retenção de conteúdo e progresso real no aprendizado do inglês.
                </p>
              </div>
                    
      </div>
    </section>
  );
}
