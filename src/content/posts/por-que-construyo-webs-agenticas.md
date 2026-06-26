---
title: "Por Qué Estoy Construyendo Webs Agénticas"
description: "La mayoría de las webs son monumentos a una conversación que nunca ocurre. Agentic Webs es mi proyecto de I+D para repensar la web como un agente autónomo: por qué importa este cambio y qué viene."
date: 2026-06-26
author: "Luis García de la Fuente"
image: "/blog-images/what-is-an-agentic-web-and-why-it-changes-the-rules-online-agentic-webs.webp"
featured: true
lang: "es"
enSlug: "why-im-building-agentic-webs"
---

# Por Qué Estoy Construyendo Webs Agénticas

Vuelvo una y otra vez a una observación pequeña y un poco embarazosa: la mayoría de las webs son monumentos a una conversación que nunca ocurre.

Una empresa gasta dinero para llevar a alguien a la página. El visitante llega con una pregunta real, ojea durante tres segundos, no encuentra la respuesta exacta y se va. La empresa nunca supo que estuvo ahí. La página simplemente permaneció ahí, mostrando cosas, igual que las mostraba ayer y las mostrará mañana. Todos hemos construido webs así. Yo he construido unas cuantas.

Agentic Webs es el proyecto que empecé para tomarme esa observación en serio. Es un esfuerzo de I+D independiente, una iniciativa dentro de HAL149, que estudia qué le pasa a la web cuando la IA deja de ser una funcionalidad que añades por encima y se convierte en lo que la web realmente *es*. Este artículo es mi forma de explicar por qué creo que ese cambio importa, y qué pienso que está por llegar.

## Lo que ya no pude dejar de ver

Durante treinta años diseñamos webs para un único tipo de visitante: una persona con ojos, paciencia limitada y un ratón. Cada supuesto incrustado en el stack web moderno parte de ahí. Menús de navegación, porque un humano necesita orientarse. Formularios, porque un humano tiene que entregar sus datos antes de que pase nada. Landing pages, porque a un humano hay que encauzarlo por un embudo.

Entonces ocurrieron dos cosas a la vez.

La gente dejó de comportarse así. Ahora espera hacer una pregunta en lenguaje natural y obtener una respuesta de inmediato, como hace con ChatGPT o Perplexity. Un menú de navegación y un número de teléfono se parecen cada vez más a que te entreguen un mapa de papel.

Y empezó a aparecer el *otro* tipo de visitante: software. Agentes de IA que llegan en nombre de una persona, leen lo que hay y actúan. No hacen scroll. No admiran tu imagen de cabecera. Consultan, y si tu web no se puede consultar, se van a otra que sí.

Una vez que vi la web a través de esas dos lentes al mismo tiempo, la página estática dejó de parecerme lo natural y empezó a parecerme un formato heredado. Ese es el picor que está detrás de todo el proyecto.

## Qué es realmente una web agéntica

La expresión "web agéntica" se usa en dos escalas, y creo que mantenerlas separadas es media batalla ganada.

A **escala macro**, "web agéntica" nombra una nueva fase de internet. Estamos pasando de una web que se lee y se navega a una malla de agentes autónomos que interpretan objetivos, toman decisiones y transaccionan entre sí sobre protocolos abiertos. La web se convierte en infraestructura de máquina a máquina. Esto no es una predicción mía; es más o menos el consenso que se está formando entre quienes construyen protocolos de agentes ahora mismo.

A **escala micro**, que es donde vive Agentic Webs, la pregunta pasa a ser: ¿qué aspecto tiene una sola web si es un nodo de esa malla? Mi respuesta es que la web deja de ser contenido y se convierte en un agente. No un chatbot en la esquina de una landing page, sino la web entera diseñada, desde la arquitectura hacia arriba, como un sistema autónomo que conoce el negocio y actúa en tiempo real. Responde, cualifica, recomienda y deriva a un humano solo cuando hace falta de verdad.

Esa distinción (una web *diseñada como* un agente frente a una web *con* un asistente añadido) es la parte que más me importa, porque casi todo lo que hay hoy en el mercado es la segunda cosa fingiendo ser la primera.

## Las ocho dimensiones

Cuando le describo el concepto a la gente, tiende a reducirlo a "ah, o sea, que responde preguntas". Eso es una porción. La razón por la que lo trato como una categoría y no como una funcionalidad es que abarca ocho dimensiones distintas, y el valor surge de que todas operen juntas.

1. **Una interfaz conversacional.** El visitante expresa su intención en lenguaje natural y obtiene la respuesta, estructurada, sin escarbar entre páginas.

2. **Personalización en tiempo real.** No por segmento ni por cookie, sino por lo que el visitante realmente dice. Alguien que pregunta por el precio recibe una experiencia distinta a quien pregunta por especificaciones.

3. **Interoperabilidad agente a agente.** La web expone datos limpios y estructurados que un agente externo puede leer y sobre los que puede actuar, a través de los protocolos que se consolidan como estándares (MCP, A2A).

4. **Integración con sistemas internos.** El agente se conecta al CRM y al ERP, de modo que lo que dice en la web refleja el estado vivo del negocio, no un dato que alguien actualizó hace tres meses.

5. **Un motor de contenido en bucle cerrado.** El sistema formula una estrategia de contenido, publica optimizado para buscadores y motores de respuesta, mide qué convierte y ajusta el siguiente ciclo. Crece donde hay demanda probada.

6. **AISEO como capa de descubrimiento.** Ser la respuesta citada cuando alguien le pregunta a un motor de IA por tu sector, construido desde la base en lugar de añadido por encima.

7. **Extensibilidad de plataforma.** Aplicaciones verticales (una herramienta de valoración, un diagnóstico, un configurador) que el agente invoca en mitad de la conversación cuando detecta la intención adecuada.

8. **Un giro de la atención a los resultados.** El modelo económico cambia por debajo de todo lo demás, y eso merece su propia sección.

Si solo construyes la primera dimensión, has construido un chatbot agradable. La apuesta es que la combinación es una especie distinta.

## La economía es lo que me convenció

En el fondo soy una persona de infraestructura, así que la dimensión que de verdad me movió de "interesante" a "esto debería construirlo" fue la económica.

La web tradicional monetiza la atención. Pagas para que alguien vea un anuncio, haga clic y rellene un formulario, y después un humano dedica tiempo a cualificar y cerrar. La web agéntica monetiza resultados. El agente entrega la respuesta, cualifica la intención y prepara la transacción dentro de la conversación, al coste marginal de la inferencia.

Y el coste de la inferencia se ha desplomado. El precio de un rendimiento equivalente a GPT-4 cayó aproximadamente un 99,7% en tres años. Un agente conversacional permanente en la web de una pequeña empresa pasó de ser un lujo a ser un error de redondeo. Cuando una conversación de cualificación completa cuesta una fracción de céntimo en tokens, y un comercial haciendo lo mismo cuesta tiempo, salario y horas limitadas, la comparación no está ni cerca.

Esa es la parte que me resulta genuinamente difícil de rebatir. La curva de costes ya ocurrió. El resto es ponerse al día con ella.

## Por qué creo que el momento es el adecuado

Tres cosas tenían que ser ciertas a la vez para que esto fuera construible y no solo enunciable, y a día de hoy lo son.

Los protocolos se estandarizaron. MCP está bajo la Linux Foundation con un registro que se acerca a los 10.000 servidores; A2A tiene una adopción amplia. Una web ya puede ser un nodo real en un ecosistema de agentes en lugar de un silo aislado.

La capa de descubrimiento se desplazó. Con una proporción grande y creciente de búsquedas que terminan sin clic, ser la respuesta que cita un motor de IA importa más que posicionar enlaces azules. Las páginas estáticas no llegan a ese listón; una web agéntica puede arquitecturarse para ello.

Y la regulación obliga a tomárselo en serio. Las obligaciones de transparencia de la Ley de IA de la UE entran en agosto de 2026. Cualquiera que improvise un agente autónomo en la UE tiene un problema; cualquiera que integre el cumplimiento por defecto tiene una ventaja. Esa fecha límite es una fuerza que empuja, y prefiero llegar pronto a ella que ir con prisas.

## El tamaño de la cosa

Hace poco publiqué un análisis de tamaño de mercado en el blog del proyecto, en parte para disciplinar mi propio optimismo. Construido de abajo arriba desde mercados adyacentes (desarrollo web, en torno a 87.750 millones de dólares en 2026, el mercado de agentes de IA, CRM, IA conversacional) en lugar de proyectado de arriba abajo, el caso base aterriza en una **categoría anual de 40.000–80.000 millones de dólares** a principios de la década de 2030.

El escenario optimista, por encima de los 100.000 millones, depende de que las webs se conviertan en endpoints de transacción a los que otros agentes compren directamente. Esa es la parte que aún está por confirmar. Pero la dirección es visible: Morgan Stanley sitúa a los compradores agénticos en 190.000–385.000 millones de dólares en el e-commerce de EE. UU. para 2030, y Gartner espera que el 90% de la compra B2B esté mediada por IA en 2028. Una empresa sin una capa legible por agentes simplemente no participa en eso.

No tomo esas cifras como un destino. Las tomo como evidencia de que no soy el único que ve el camino.

## Lo que realmente estoy apostando

Aquí está el núcleo honesto del asunto. No creo que las webs agénticas sustituyan a las webs. Creo que mejoran *para qué sirve* una web. La web ya ha cambiado de trabajo tres veces: folleto, luego embudo de captación, luego escaparate. Cada cambio la hizo valer más, no menos. El próximo trabajo es la web como interfaz autónoma que atiende a visitantes humanos y transacciona con agentes de IA.

Agentic Webs es mi intento de estudiar ese próximo trabajo con cuidado, en abierto, antes de que sea obvio. El proyecto publica su pensamiento como una referencia editorial y no como un argumento de venta, porque ahora mismo lo más útil que puedo hacer es cartografiar el territorio con claridad.

Puede que vaya pronto. Puede que me equivoque con el momento. Pero estoy bastante convencido de que no me equivoco con la dirección, y eso basta para seguir construyendo.

Si algo de esto resuena, los análisis más profundos están en [agenticwebs.com](https://agenticwebs.com/).
