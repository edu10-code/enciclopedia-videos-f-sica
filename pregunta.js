const bancoPreguntas = {
    1: {
        introLab: "Esta sesión introduce las unidades básicas del Sistema Internacional, la estimación de incertidumbres y el manejo de instrumentos de medición en el laboratorio de física.",
        objGeneral: "Comprender y aplicar el sistema de unidades y la propagación de errores en mediciones físicas directas e indirectas.",
        videos: [
            {
                id: "01-01",
                titulo: "01-01 Unidades básicas",
                tema: "Sistema Internacional de Unidades y mediciones fundamentales.",
                objetivoVideo: "Identificar las magnitudes fundamentales y el uso correcto de instrumentos de medida.",
                preguntas: [
                    {
                        pregunta: "¿Cuál es la unidad fundamental de longitud en el Sistema Internacional (SI)?",
                        opciones: ["El centímetro", "El metro", "El kilómetro", "El milímetro"],
                        correcta: 1,
                        explicacion: "En el Sistema Internacional de Unidades (SI), la unidad básica de longitud es el metro (m)."
                    },
                    {
                        pregunta: "¿Qué instrumento ofrece mayor precisión para medir diámetros internos pequeños en el laboratorio?",
                        opciones: ["La regla graduada convencional", "El calibrador vernier (pie de rey)", "La cinta métrica flexible", "El micrómetro de costura"],
                        correcta: 1,
                        explicacion: "El calibrador vernier permite mediciones de alta precisión al milímetro y fracción (décimas o centésimas)."
                    }
                ]
            }
        ]
    },
    2: {
        introLab: "Estudio del movimiento rectilíneo uniforme y uniformemente acelerado, analizando las gráficas de posición, velocidad y aceleración en función del tiempo.",
        objGeneral: "Analizar la cinemática de cuerpos en una dimensión mediante rieles de aire y sensores de posición.",
        videos: [
            {
                id: "02-01",
                titulo: "02-01 Movimiento rectilíneo uniforme",
                tema: "Cinemática en una dimensión con velocidad constante.",
                objetivoVideo: "Determinar la velocidad constante de un móvil mediante registros de posición y tiempo.",
                preguntas: [
                    {
                        pregunta: "En una gráfica de posición en función del tiempo para un MRU, ¿qué representa geométricamente la pendiente de la recta?",
                        opciones: ["La aceleración instantánea", "La velocidad constante del móvil", "La distancia total recorrida", "El tiempo de vuelo"],
                        correcta: 1,
                        explicacion: "La pendiente de la recta en la gráfica x vs. t corresponde analíticamente a la velocidad constante del movimiento."
                    },
                    {
                        pregunta: "¿Cómo es la aceleración de un móvil que experimenta un movimiento rectilíneo uniforme (MRU)?",
                        opciones: ["Constante y distinta de cero", "Nula (cero)", "Proporcional al tiempo transcurrido", "Inversamente proporcional a la posición"],
                        correcta: 1,
                        explicacion: "Al mantenerse la velocidad constante, la tasa de cambio de la velocidad es nula, por lo que la aceleración es igual a cero."
                    }
                ]
            }
        ]
    },
    3: {
        introLab: "Esta sesión aborda las leyes de Newton aplicadas a la dinámica traslacional. Se analizará la relación causal entre fuerza neta y aceleración, la respuesta de sistemas vinculados por cuerdas y poleas, la acción dinámica de resortes y el comportamiento inercial en marcos en caída libre.",
        objGeneral: "Validar experimentalmente la segunda ley de Newton y la equivalencia dinámica en sistemas mecánicos lineales mediante montajes con fuerzas constantes y variables.",
        videos: [
            {
                id: "03-01",
                titulo: "03-01 Aceleración por una cuerda con clip",
                tema: "Relación entre fuerza aplicada, masa inercial y aceleración resultante.",
                objetivoVideo: "Comprobar que la aceleración adquirida por un móvil es directamente proporcional a la fuerza neta e inversamente proporcional a su masa total.",
                preguntas: [
                    {
                        pregunta: "Al duplicar la fuerza a la cuerda en la polea manteniendo constante la masa total del sistema, ¿cómo se modifica cuantitativamente la aceleración observada?",
                        opciones: [
                            "Aumenta al cuádruple debido a la relación cuadrática entre fuerza y aceleración en sistemas lineales.",
                            "Se duplica, demostrando una relación de proporcionalidad directa con la fuerza aplicada según la segunda ley de Newton.",
                            "Permanece constante, ya que la aceleración de un sistema depende únicamente de su masa inercial y de la gravedad local.",
                            "Se reduce a la mitad para poder garantizar la conservación de la energía mecánica del mecanismo de tracción."
                        ],
                        correcta: 1,
                        explicacion: "Según la segunda ley de Newton, la aceleración es directamente proporcional a la fuerza neta aplicada cuando la masa permanece constante."
                    },
                    {
                        pregunta: "Si se añade masa al carro manteniendo la misma fuerza de tracción neta, ¿por qué disminuye la aceleración del sistema?",
                        opciones: [
                            "Porque la masa adicional aumenta el peso y, en consecuencia, genera mayor tracción a favor del movimiento.",
                            "Porque la fuerza aplicada debe invertirse en vencer el incremento de la gravedad en lugar de producir desplazamiento horizontal.",
                            "Porque la fricción cinética entre el carro y la pista se anula progresivamente al aumentar la carga vertical.",
                            "Porque la aceleración es inversamente proporcional a la inercia (masa total) del sistema que debe ser movida."
                        ],
                        correcta: 3,
                        explicacion: "A mayor masa (inercia), se requiere mayor resistencia al cambio de velocidad, por lo que la aceleración disminuye inversamente."
                    }
                ]
            },
            {
                id: "03-02",
                titulo: "03-02 La máquina de Atwood",
                tema: "Dinámica de masas acopladas y aceleración en sistemas con polea ideal.",
                objetivoVideo: "Determinar experimentalmente la aceleración de dos masas suspendidas vinculadas por una cuerda ligera y analizar la tensión del sistema.",
                preguntas: [
                    {
                        pregunta: "¿Cómo influye la diferencia de masas entre los dos cuerpos en la magnitud de la aceleración neta en la máquina de Atwood?",
                        opciones: [
                            "A mayor diferencia de masas (manteniendo la masa total constante), mayor será la aceleración neta del sistema al incrementar el desbalance de fuerza.",
                            "La diferencia de masas no altera la aceleración, ya que al estar unidas por una cuerda ambas caen exactamente bajo la misma gravedad.",
                            "A mayor diferencia de masas, la aceleración se reduce porque la tensión combinada de la polea aumenta de forma exponencial.",
                            "La aceleración neta solo es influenciada por el volumen físico de ambas masas suspendidas, pero no por su diferencia aritmética."
                        ],
                        correcta: 0,
                        explicacion: "El desbalance de peso entre ambas masas actúa como fuerza neta impulsora del sistema acoplado."
                    },
                    {
                        pregunta: "¿Por qué la tensión en la cuerda durante el movimiento acelerado es menor que el peso del cuerpo descendente y mayor que el del ascendente?",
                        opciones: [
                            "Porque la fricción estática de la polea absorbe exactamente esa fracción faltante de fuerza en ambos extremos de la cuerda.",
                            "Porque la cuerda necesita variar su propia masa dinámica entre los dos flancos para mantener el equilibrio en caída libre.",
                            "Para que de esta manera exista una fuerza neta no nula en la dirección del movimiento acelerado particular de cada bloque.",
                            "Porque la fuerza de tensión debe compensar íntegramente la pérdida de energía potencial que el sistema libera como calor."
                        ],
                        correcta: 2,
                        explicacion: "Para que el bloque más pesado descienda acelerando, su peso debe superar a la tensión; y para que el liviano ascienda, la tensión debe superar a su peso."
                    }
                ]
            },
            {
                id: "03-03",
                titulo: "03-03 Aceleración por un resorte",
                tema: "Dinámica unidimensional bajo fuerzas elásticas variables.",
                objetivoVideo: "Analizar el movimiento acelerado de un móvil impulsado por la fuerza restauradora variable originada al distender un resorte.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la aceleración del móvil no permanece constante a medida que el resorte recupera paulatinamente su longitud natural?",
                        opciones: [
                            "Porque la fuerza restauradora elástica es directamente proporcional a la elongación, y al acortarse esta, la fuerza (y la aceleración) disminuye.",
                            "Porque el centro de masa inercial del carrito va cambiando de posición continuamente tras liberarse la trampa elástica.",
                            "Porque el rozamiento sobre el riel experimenta picos intermitentes producto del impacto impulsivo inicial.",
                            "Porque la inercia del sistema contrarresta completamente al resorte forzándolo a adquirir velocidad constante de forma instantánea."
                        ],
                        correcta: 0,
                        explicacion: "La ley de Hooke establece que la fuerza elástica es variable y depende directamente de la deformación o elongación actual del resorte."
                    },
                    {
                        pregunta: "¿En qué posición de la trayectoria alcanza el móvil su velocidad máxima durante la fase de impulsión por el resorte?",
                        opciones: [
                            "Justo en el punto de compresión máxima extrema del resorte, instantes antes de ser liberado de su retén.",
                            "En el punto de liberación exacta de equilibrio estático de su longitud natural, donde la fuerza (y aceleración) se hace cero y ya no es impulsado.",
                            "Al final de la trayectoria parabólica, una vez que el carro ha frenado por efecto de la fricción cinética residual.",
                            "En el instante de medio recorrido, es decir, exactamente a la mitad de la elongación elástica total."
                        ],
                        correcta: 1,
                        explicacion: "La velocidad máxima se obtiene justo cuando la aceleración neta se anula en el punto de equilibrio, tras lo cual la fuerza cambia de sentido."
                    }
                ]
            },
            {
                id: "03-04",
                titulo: "03-04 Slinky que cae",
                tema: "Dinámica de medios continuos elásticos y propagación de tensión en caída libre.",
                objetivoVideo: "Observar el colapso gravitatorio de un resorte suspendido y comprender la transmisión de la onda de relajación elástica interna.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el extremo inferior del resorte suspendido permanece inmóvil en el aire hasta que el extremo superior colapsa sobre él?",
                        opciones: [
                            "Porque experimenta una fuerza aerodinámica de empuje vertical que neutraliza perfectamente el aumento de su masa inercial.",
                            "Porque el campo gravitacional pierde intensidad temporal en el extremo inferior debido a la oscilación armónica del alambre de acero.",
                            "Porque la fuerza de tensión que equilibra a su propio peso en esa base no desaparece hasta que la onda mecánica de relajación llega físicamente a ese punto.",
                            "Porque el momento angular intrínseco de las espiras enrolladas ancla la estructura frente al desplazamiento traslacional."
                        ],
                        correcta: 2,
                        explicacion: "La información de que el soporte superior ha sido soltado viaja a través del medio elástico mediante una onda longitudinal de relajación de tensión."
                    },
                    {
                        pregunta: "¿Cómo se compara el movimiento acelerado del centro de masa del resorte con la caída libre de una masa puntual convencional?",
                        opciones: [
                            "El centro de masa del resorte colapsa acelerando a una tasa equivalente a la de la gravedad, descendiendo igual que una masa puntual en caída libre.",
                            "Desciende visiblemente más despacio debido a que un gran porcentaje de la fuerza gravitatoria se agota enrollando internamente el resorte.",
                            "Cae considerablemente más rápido, ya que las espiras colisionando unas contra otras generan una aceleración neta adicional hacia el suelo.",
                            "El centro de masa se mantiene estacionario suspendido en el aire hasta el instante preciso en que los dos extremos se juntan para recién iniciar el descenso."
                        ],
                        correcta: 0,
                        explicacion: "Una vez soltado el sistema completo, la única fuerza externa neta que actúa sobre él es la gravedad, por lo que su centro de masa cae libremente con aceleración g."
                    }
                ]
            },
            {
                id: "03-05",
                titulo: "03-05 Vela en un frasco que cae",
                tema: "Principios de equivalencia y comportamiento de fluidos térmicos en caída libre.",
                objetivoVideo: "Evidenciar la anulación aparente del empuje de flotación hidrostática y la convección térmica dentro de un recinto en caída libre.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la llama de la vela tiende a extinguirse cuando el frasco hermético entra en caída libre?",
                        opciones: [
                            "Porque el violento rozamiento aerodinámico del aire al descender el frasco perturba y rompe directamente el sello interno.",
                            "Porque al entrar en estado de ingravidez, se anula el empuje por densidad y cesan las corrientes de convección que renuevan el oxígeno de la mecha.",
                            "Porque la aceleración descendente induce una fuerza hidrostática en la cera líquida impidiendo la generación por sublimación de nuevos vapores orgánicos.",
                            "Porque la velocidad terminal provoca una depresión barométrica instantánea dentro de la campana que congela térmicamente la combustión."
                        ],
                        correcta: 1,
                        explicacion: "Sin gravedad efectiva en el marco acelerado del frasco, los gases calientes no ascienden por diferencia de densidad, deteniendo la convección que alimenta oxígeno fresco."
                    },
                    {
                        pregunta: "¿Qué relación conceptual tiene la ausencia de corrientes convectivas en este experimento con el estado de microgravedad aparente?",
                        opciones: [
                            "La aparente microgravedad obliga a las moléculas del fluido a girar en torbellinos de Coriolis paralizando cualquier flujo vertical.",
                            "Significa que en microgravedad un gas caliente se vuelve instantáneamente más denso, imposibilitando físicamente que pueda fluir de manera alguna.",
                            "Demuestra que la caída libre es un marco inercial donde el peso relativo del gas por su temperatura desaparece, deteniendo el mecanismo de flotabilidad hidro-térmica.",
                            "Indica que la microgravedad provoca vacíos esféricos de gas denso aislados térmicamente alrededor de cualquier fuente incandescente puntual."
                        ],
                        correcta: 2,
                        explicacion: "En caída libre local, el principio de equivalencia anula los gradientes de peso efectivo, neutralizando los fenómenos impulsados por flotabilidad."
                    }
                ]
            }
        ]
    },
    4: {
        introLab: "Esta sesión experimental explora la cinemática y dinámica bidimensional, enfocándose en la independencia de movimientos ortogonales, el lanzamiento de proyectiles y el análisis de trayectorias parabólicas en sistemas inerciales y acelerados.",
        objGeneral: "Analizar la cinemática en dos dimensiones mediante montajes de proyectiles y colisiones parabólicas para verificar el principio de independencia de movimientos de Galileo.",
        videos: [
            {
                id: "04-01",
                titulo: "04-01 Disparo/caída",
                tema: "Independencia de los movimientos horizontal y vertical en el tiro parabólico.",
                objetivoVideo: "Demostrar que el tiempo de descenso vertical de un proyectil disparado horizontalmente es idéntico al de un cuerpo en caída libre vertical.",
                preguntas: [
                    {
                        pregunta: "¿Por qué dos proyectiles lanzados desde la misma altura (uno disparado horizontalmente y el otro soltado en reposo) impactan el suelo al mismo instante?",
                        opciones: [
                            "Porque la velocidad de disparo horizontal crea una fuerza de sustentación aerodinámica neutra que sincroniza ambas caídas.",
                            "Porque los movimientos horizontal y vertical son independientes, y ambos proyectiles inician con idéntica velocidad vertical (cero) y experimentan la misma aceleración descendente.",
                            "Porque el proyectil disparado posee mayor energía cinética, lo que compensa mecánicamente la distancia curva extra que debe recorrer.",
                            "Porque la curvatura parabólica de la trayectoria incrementa exponencialmente la aceleración de caída del proyectil disparado horizontalmente."
                        ],
                        correcta: 1,
                        explicacion: "La componente horizontal del movimiento no altera las leyes de la cinemática vertical gracias al principio de superposición e independencia de movimientos."
                    },
                    {
                        pregunta: "¿De qué manera afecta la velocidad inicial horizontal a la aceleración vertical que experimenta el proyectil durante su trayectoria?",
                        opciones: [
                            "Aumenta la aceleración vertical, siempre y cuando la velocidad del proyectil rompa la resistencia estática del aire.",
                            "Disminuye la aceleración vertical debido a la interacción cruzada de las fuerzas de arrastre.",
                            "La afecta inversamente: a mayor avance horizontal, se diluye el impacto neto de la gravedad, alargando el tiempo de vuelo.",
                            "No la afecta en absoluto; la aceleración vertical es siempre constante y está determinada de forma exclusiva por la atracción gravitatoria."
                        ],
                        correcta: 3,
                        explicacion: "En el eje vertical solo actúa la gravedad de forma independiente del avance horizontal uniforme."
                    }
                ]
            },
            {
                id: "04-02",
                titulo: "04-02 Cañón contra monos",
                tema: "Impacto balístico con blanco en caída libre y simultaneidad gravitatoria.",
                objetivoVideo: "Comprobar que un proyectil apuntado directamente hacia un blanco móvil impacta con éxito si el blanco se suelta en el instante del disparo.",
                preguntas: [
                    {
                        pregunta: "¿Por qué ambos objetos (el proyectil y el blanco) descienden la misma distancia vertical respecto a la línea de mira durante el tiempo de vuelo?",
                        opciones: [
                            "Porque el proyectil tiene una forma aerodinámica que imita exactamente el coeficiente de fricción atmosférica del blanco en reposo.",
                            "Porque ambos inician su descenso en caída libre justo en el mismo instante y están sujetos de manera idéntica a la aceleración de la gravedad.",
                            "Porque sus respectivos centros de masa convergen magnéticamente a lo largo del eje horizontal de disparo.",
                            "Porque el impacto percusivo del cañón perturba la columna de aire debajo del blanco forzando una caída controlada simétrica."
                        ],
                        correcta: 1,
                        explicacion: "Tanto el proyectil como el blanco caen bajo la acción exclusiva de la gravedad a partir del mismo instante inicial."
                    },
                    {
                        pregunta: "Si se incrementa la velocidad de salida del proyectil, ¿en qué punto de la trayectoria ocurrirá el impacto en relación con el suelo?",
                        opciones: [
                            "Ocurrirá en un punto mucho más cercano al suelo, porque una alta velocidad incrementa el factor inercial parabólico de caída libre.",
                            "Impactará de manera adelantada directamente en la base del piso al rebasar rápidamente la vertical inercial del blanco suspendido.",
                            "Ocurrirá en un punto de intersección más alto, ya que un proyectil más veloz requiere menos tiempo de vuelo y, por lo tanto, ambos caen menos distancia.",
                            "Ocurrirá exactamente en el mismo lugar intermedio que antes, puesto que el alcance vertical de impacto es totalmente invariante frente a impulsos horizontales."
                        ],
                        correcta: 2,
                        explicacion: "A mayor velocidad inicial, menor tiempo transcurre para recorrer la distancia horizontal hasta el blanco, por lo que este desciende menos metros antes del choque."
                    }
                ]
            },
            {
                id: "04-03",
                titulo: "04-03 Cañón vertical sobre un carro",
                tema: "Conservación del momento inercial horizontal en el lanzamiento vertical móvil.",
                objetivoVideo: "Verificar que una bola disparada verticalmente desde un carro con velocidad horizontal constante vuelve a caer dentro del cañón.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la bola conserva el mismo componente horizontal de velocidad que el carro mientras se encuentra en el aire?",
                        opciones: [
                            "Porque la aceleración de la gravedad arrastra a todos los cuerpos próximos hacia el mismo sentido en que avanza el mecanismo.",
                            "Porque, ignorando la resistencia del aire, una vez libre no actúan fuerzas neta horizontales sobre ella, por lo que su inercia de traslación permanece inalterada.",
                            "Porque el impulso vertical suministrado por el mecanismo del cañón se transfiere de manera gradual al eje de desplazamiento horizontal.",
                            "Porque la estela del aire dentro de la habitación avanza exactamente acoplada con la masa rodante del vehículo."
                        ],
                        correcta: 1,
                        explicacion: "Por la primera ley de Newton (inercia), al no haber fuerzas horizontales netas, la velocidad horizontal inicial heredada del carro se mantiene constante."
                    },
                    {
                        pregunta: "¿Qué forma tiene la trayectoria de la bola observada desde el sistema de referencia del laboratorio frente al sistema propio del carro?",
                        opciones: [
                            "Parabólica para un observador fijo en el laboratorio, y rectilínea (de subida y bajada vertical) para un observador estacionado en el carro.",
                            "Rectilínea e inclinada hacia adelante en el laboratorio, y parabólica pero invertida para el observador montado sobre la plataforma móvil.",
                            "Semielíptica en el ambiente inercial del laboratorio, y enteramente circular si se toma como marco al punto de eyección del cañón.",
                            "Ascenso estrictamente vertical para el observador del laboratorio, y parábola de alcance asimétrico en el carro móvil."
                        ],
                        correcta: 0,
                        explicacion: "Para el observador inercial externo es un tiro parabólico, mientras que para el observador solidario al carro se desplaza solo en el eje vertical."
                    }
                ]
            },
            {
                id: "04-04",
                titulo: "04-04 Cañón vertical sobre un carro acelerado",
                tema: "Movimiento relativo en marcos de referencia acelerados (no inerciales).",
                objetivoVideo: "Analizar la desviación en el punto de impacto de un proyectil disparado verticalmente cuando el carro experimenta aceleración horizontal constante.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la bola no cae dentro del cañón cuando el carro acelera horizontalmente durante el tiempo de vuelo del proyectil?",
                        opciones: [
                            "Porque el disparo origina una reacción en cadena donde el vehículo es frenado de manera irreversible por el impulso vertical de la bola.",
                            "Porque la aceleración motriz súbita engendra capas de aire transversales que descarrilan a la bola suspendida obligándola a planear erráticamente.",
                            "Porque la bola hereda y mantiene inalterable la velocidad inicial de aquel preciso instante del disparo, mientras que el vehículo la va aumentando y alejándose.",
                            "Porque el proyectil libre también sufre una aceleración propia adicional que sobrepasa sistemáticamente la capacidad tractora de las ruedas inferiores."
                        ],
                        correcta: 2,
                        explicacion: "Al acelerar el carro, su velocidad aumenta constantemente, mientras que la bola en el aire mantiene una velocidad horizontal constante (menor), adelantándose o quedando atrás el carro."
                    },
                    {
                        pregunta: "¿Hacia dónde se desplaza el punto de caída de la bola (adelante o atrás del carro) si el vehículo frena en lugar de acelerar?",
                        opciones: [
                            "Cae justo detrás de la boquilla del cañón, ya que la fricción del frenado produce fuerzas inerciales de retroceso en toda la masa del entorno superior.",
                            "Caen simultáneamente en el mismo origen de disparo, pues el centro de masa acoplado del equipo frena y desciende conservando un equilibrio cinético estable.",
                            "Se desvía perpendicularmente de la pista hacia los laterales del carrito, producto de las fuerzas ficticias giroscópicas inherentes a un frenado en seco.",
                            "Cae delante del carro, porque el proyectil en el aire continúa imperturbable con la velocidad alta original, mientras que el vehículo ha frenado y marcha rezagado."
                        ],
                        correcta: 3,
                        explicacion: "Al frenar el carro, este reduce su velocidad rápidamente, mientras que el proyectil conserva por inercia la velocidad mayor que traía, cayendo por delante del vehículo."
                    }
                ]
            },
            {
                id: "04-05",
                titulo: "04-05 Parábolas en una mesa de aire",
                tema: "Trayectorias parabólicas continuas en dos dimensiones sin fricción.",
                objetivoVideo: "Registrar experimentalmente la trayectoria parabólica descrita por un disco en una mesa de aire inclinada y contrastar con el modelo analítico.",
                preguntas: [
                    {
                        pregunta: "¿Cómo influye la componente de la gravedad a lo largo de la inclinación de la mesa en la curvatura de la trayectoria del disco?",
                        opciones: [
                            "Se encarga de definir la aceleración efectiva que actúa únicamente en el eje inclinado, originando la componente cuadrática que deforma el movimiento en una curva parabólica.",
                            "Incrementa directamente el alcance parabólico neto al disolver gradualmente el coeficiente de fricción estática de la superficie perforada.",
                            "Carece de influencia directa en el perfil geométrico de la curva ya que el flujo de aire elimina por completo la fuerza de atracción en todas sus direcciones vectoriales.",
                            "Opera ortogonalmente en el plano impidiendo un avance puro y transformando los vectores del movimiento directo en secciones hiperbólicas truncadas."
                        ],
                        correcta: 0,
                        explicacion: "La inclinación desacopla una componente constante de la gravedad sobre el plano, la cual imprime aceleración uniforme en dicha dirección y genera la parábola."
                    },
                    {
                        pregunta: "¿Qué magnitudes cinemáticas se mantienen constantes a lo largo del eje perpendicular a la pendiente de la mesa (eje horizontal de la superficie)?",
                        opciones: [
                            "Solo la aceleración centrífuga aparente del disco obtenida al curvar su avance.",
                            "La componente de velocidad rectilínea a lo largo de este eje, dado que aquí no existe aceleración neta alguna (movimiento inercial uniforme).",
                            "Exclusivamente la posición inicial proyectada ya que el disco solo desciende imitando la caída libre de un cuerpo plano.",
                            "El torque de rozamiento y la aceleración cosenoidal proyectada a lo largo del plano pulido del disco experimental."
                        ],
                        correcta: 1,
                        explicacion: "Al no haber fuerzas ni aceleraciones componentes en la dirección transversal pura de la pendiente, la velocidad en ese eje permanece constante."
                    }
                ]
            },
            {
                id: "04-06",
                titulo: "04-06 Cañón de alcance variable",
                tema: "Dependencia del alcance horizontal respecto al ángulo de elevación.",
                objetivoVideo: "Determinar experimentalmente el ángulo de disparo que maximiza el alcance horizontal y comprobar la complementariedad de ángulos.",
                preguntas: [
                    {
                        pregunta: "¿Por qué teóricamente dos disparos efectuados a ángulos complementarios (por ejemplo, 30° y 60°) logran el mismo alcance horizontal?",
                        opciones: [
                            "Porque al sumar sus ángulos complementan el total, donde se sabe que la aceleración gravitacional experimenta refracciones aerodinámicas equivalentes.",
                            "Porque el disparo con un gran ángulo alcanza una zona alta con menor resistencia viscosa que el impacto de bajo ángulo amortigua.",
                            "Porque las trayectorias concéntricas equilibran recíprocamente sus aceleraciones tangenciales empatando geométricamente en el medio vértice.",
                            "Porque en el disparo más bajo la velocidad horizontal es mayor pero su tiempo de vuelo es corto, mientras que en el disparo empinado ocurre exactamente a la inversa, igualándose sus productos totales."
                        ],
                        correcta: 3,
                        explicacion: "Matemáticamente el alcance depende de sen(2θ), el cual arroja el mismo resultado para ángulos θ y (90° - θ) debido a identidades trigonométricas."
                    },
                    {
                        pregunta: "¿Qué combinación de factores entre el tiempo de vuelo y la velocidad horizontal explica que el alcance óptimo ideal se produzca a 45°?",
                        opciones: [
                            "A este ángulo, la gravedad entra en una neutralidad relativa en su componente transversal que permite acumular velocidad horizontal hasta su cenit límite.",
                            "A este ángulo se cruzan las líneas isotermas de arrastre aerodinámico donde tanto proyectiles ligeros como pesados encuentran cero arrastre.",
                            "Matemáticamente a 45° se maximiza el producto cruzado de la componente vertical de la velocidad y la velocidad de desplazamiento horizontal.",
                            "Porque estadísticamente a 45° exactos, el punto de máxima altura de vuelo y la distancia horizontal conseguida adquieren siempre el idéntico valor escalar."
                        ],
                        correcta: 2,
                        explicacion: "El ángulo de 45° ofrece la combinación perfecta y simétrica entre la velocidad horizontal de avance y el tiempo de permanencia en el aire proporcionado por la componente vertical."
                    }
                ]
            }
        ]
    },
    5: {
        introLab: "Esta sesión de laboratorio se centra en la primera ley de Newton: el principio de inercia. Se examinarán sistemas en movimiento relativo y cuerpos sometidos a perturbaciones súbitas para evidenciar cómo la masa mide cuantitativamente la resistencia de un cuerpo a modificar su estado de reposo o movimiento rectilíneo uniforme.",
        objGeneral: "Evidenciar de forma práctica la manifestación de la inercia mecánica en cuerpos en reposo y en movimiento para consolidar la primera ley del movimiento de Newton.",
        videos: [
            {
                id: "05-01",
                titulo: "05-01 Inercia en un riel de aire que se desplaza",
                tema: "Persistencia del estado de reposo en marcos inerciales libres de fricción.",
                objetivoVideo: "Comprobar que un deslizador sobre un colchón de aire no es arrastrado por el desplazamiento uniforme de la base sobre la que reposa.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el deslizador permanece en reposo relativo respecto al laboratorio mientras el riel se desplaza por debajo de él?",
                        opciones: [
                            "Porque el colchón de aire genera una fuerza aerodinámica de empuje horizontal en sentido contrario que cancela el movimiento del riel.",
                            "Porque la ausencia de fricción mecánica impide que el movimiento del riel le transfiera una fuerza horizontal, permitiendo que conserve su estado inercial de reposo.",
                            "Porque el elevado peso del deslizador ancla su centro de masa al marco de referencia del laboratorio por atracción gravitacional pura.",
                            "Porque la viscosidad aerodinámica de la habitación frena instantáneamente cualquier intento de traslación del objeto impulsado."
                        ],
                        correcta: 1,
                        explicacion: "Al no existir fricción horizontal significativa sobre el colchón de aire, el riel se desliza por debajo sin aplicarle fuerzas tangenciales que alteren su inercia."
                    },
                    {
                        pregunta: "¿Qué fuerza neta horizontal actúa sobre el deslizador durante el movimiento del riel y cómo se refleja esto en la primera ley de Newton?",
                        opciones: [
                            "Actúa una fuerza inercial ficticia equivalente a su masa multiplicada por la velocidad del riel, equilibrando y estabilizando mecánicamente el sistema.",
                            "Actúa la fuerza normal proyectada lateralmente, lo que obliga al cuerpo a cumplir estrictamente la ley de inercia rotacional en contra de su voluntad.",
                            "Actúa una fuerza neta igual a cero; y según la primera ley, ante la ausencia de una fuerza no balanceada, el cuerpo preserva su estado de reposo inicial inalterado.",
                            "Actúa una fuerza de arrastre elástica impuesta por el escape de la corriente de aire que empata milimétricamente con su propia aceleración inercial."
                        ],
                        correcta: 2,
                        explicacion: "La primera ley de Newton postula que un objeto en reposo permanece en reposo si la fuerza neta externa sobre él es cero."
                    }
                ]
            },
            {
                id: "05-02",
                titulo: "05-02 Cilindro de inercia",
                tema: "Resistencia inercial ante aceleraciones angulares y traslacionales.",
                objetivoVideo: "Comparar la respuesta dinámica de cilindros con idéntica geometría exterior pero distinta masa o distribución inercial.",
                preguntas: [
                    {
                        pregunta: "Si se tira de la barra hacia abajo de manera lenta y gradual, ¿por qué se rompe la cuerda superior en lugar de la inferior?",
                        opciones: [
                            "Porque al aplicar la fuerza lentamente, el cilindro entra en un estado de resonancia elástica que transfiere toda la energía directamente a su punto de anclaje en el techo.",
                            "Porque la cuerda superior soporta al mismo tiempo la fuerza del tirón que se está aplicando más el peso gravitatorio del pesado cilindro, alcanzando su límite de ruptura antes que la inferior.",
                            "Porque la tensión prolongada genera un torque rotacional en la base del cilindro que desestabiliza los nudos superiores del sistema de suspensión.",
                            "Porque la cuerda inferior absorbe el impacto de manera hidrostática, mientras que la superior queda expuesta a la fricción transversal paralela."
                        ],
                        correcta: 1,
                        explicacion: "Al jalar lentamente, el sistema está prácticamente en equilibrio estático, por lo que la tensión en la cuerda superior suma el tirón aplicado más el peso del cilindro."
                    },
                    {
                        pregunta: "¿Por qué se rompe la cuerda inferior y el cilindro apenas se mueve cuando se da un tirón rápido y brusco hacia abajo?",
                        opciones: [
                            "Porque la gran masa del cilindro le otorga una alta inercia (resistencia al cambio), provocando que la cuerda inferior alcance su punto máximo de tensión y se rompa antes de que el cilindro tenga tiempo de moverse y jalar la cuerda de arriba.",
                            "Porque la velocidad del tirón induce una onda de choque ascendente que empuja al cilindro hacia arriba, aliviando la tensión de la cuerda superior de forma instantánea.",
                            "Porque a altas velocidades de impacto, la fuerza de gravedad se anula localmente, dejando a la cuerda inferior como el único elemento que absorbe todo el trabajo mecánico del tirón.",
                            "Porque la cuerda inferior, al ser jalada bruscamente, experimenta un descenso exponencial en su constante elástica, volviéndose quebradiza como el vidrio."
                        ],
                        correcta: 0,
                        explicacion: "La inercia de la masa del cilindro se opone a cambiar bruscamente su estado de reposo, concentrando el esfuerzo en la cuerda inferior antes de que el cuerpo acelere."
                    }
                ]
            },
            {
                id: "05-03",
                titulo: "05-03 Roca de hule espuma",
                tema: "Diferenciación entre apariencia geométrica y masa inercial real.",
                objetivoVideo: "Demostrar que la aceleración y la fuerza de impacto dependen exclusivamente de la masa inercial y no del volumen o aspecto del cuerpo.",
                preguntas: [
                    {
                        pregunta: "Si aplicamos exactamente la misma fuerza para empujar la roca de hule espuma y una roca de piedra real del mismo tamaño, ¿por qué la de hule espuma acelera mucho más rápido?",
                        opciones: [
                            "Porque el material sintético del hule espuma posee propiedades aerodinámicas que absorben la fricción del aire, impulsando el bloque hacia adelante con mayor facilidad.",
                            "Porque tiene una masa inercial mucho menor; al tener muy poca masa, opone casi nula resistencia al cambio de movimiento y adquiere gran aceleración.",
                            "Porque las leyes de la inercia rotacional solo aplican a objetos de alta densidad mineral, dejando a la roca falsa libre de fricción estática contra el piso.",
                            "Porque la roca de hule espuma tiene un centro de gravedad hueco que invierte los vectores de peso, multiplicando internamente la fuerza aplicada."
                        ],
                        correcta: 1,
                        explicacion: "Dado que la aceleración es inversamente proporcional a la masa para una fuerza dada (segunda ley), menor masa implica una aceleración mucho mayor."
                    },
                    {
                        pregunta: "¿Por qué la roca gigante de hule espuma choca inofensivamente contra la persona sin derribarla, a diferencia de lo que ocurriría con una roca de piedra real de ese mismo tamaño?",
                        opciones: [
                            "Porque los poros del hule espuma generan corrientes de aire en retroceso que actúan como un escudo aerodinámico, disipando la energía antes del contacto frontal.",
                            "Porque, a pesar de su enorme volumen visual, posee una masa inercial muy pequeña; al tener tan poca masa, la fuerza que logra transmitir durante el impacto es mínima.",
                            "Porque el excesivo volumen del bloque desestabiliza su centro de gravedad en el trayecto, obligando a que la fuerza de choque se desvíe perpendicularmente hacia el suelo.",
                            "Porque los materiales sintéticos alteran la constante de rozamiento del aire, provocando que el objeto pierda toda su velocidad de caída un segundo antes del golpe."
                        ],
                        correcta: 1,
                        explicacion: "El momento lineal y la fuerza de impacto son extremadamente bajos debido a la ínfima masa inercial del hule espuma a pesar de su gran tamaño."
                    }
                ]
            },
            {
                id: "05-04",
                titulo: "05-04 Sacudida del mantel",
                tema: "Interacción por fricción de corta duración e inercia de objetos en reposo.",
                objetivoVideo: "Analizar las condiciones dinámicas que permiten retirar rápidamente un mantel sin desplazar la vajilla colocada sobre él.",
                preguntas: [
                    {
                        pregunta: "¿Por qué un tirón rápido (tiempo de contacto muy breve) reduce el impulso transmitido por la fuerza de fricción a la vajilla?",
                        opciones: [
                            "Porque a grandes magnitudes de velocidad tangencial los hilos del tejido pierden mágicamente sus capacidades microscópicas de roce cinético o dinámico.",
                            "Porque el impulso mecánico se calcula como el producto de la fuerza por el tiempo de acción; al acortarse tan severamente ese tiempo, el momentum inyectado no alcanza para alterar el reposo de la vajilla.",
                            "Porque el estallido repentino de la tensión irradia ondas acústicas a través del mantel que expulsan momentáneamente el aire rompiendo la gravitación local.",
                            "Porque bajo aceleraciones extremas de tracción las polaridades del roce se invierten anclando férreamente las piezas al soporte de la madera subyacente."
                        ],
                        correcta: 1,
                        explicacion: "El impulso depende directamente del tiempo de aplicación; si el tiempo es casi cero, el cambio de momento sobre la vajilla es despreciable."
                    },
                    {
                        pregunta: "¿Qué sucedería con la vajilla si el mantel se retira lentamente y cómo influye el coeficiente de fricción estática?",
                        opciones: [
                            "La vajilla se trasladaría invariablemente a cuestas del mantel, dado que, sin tirones, la fricción estática se conserva y cuenta con tiempo suficiente para dotarla de esa misma aceleración.",
                            "Las piezas rodarían anárquicamente en diversas orientaciones debido a la falta de armonía y a los torques originados por el deslizamiento seco.",
                            "Se quedaría inmóvil con total certidumbre, porque a ritmos bajos el poder de retención inercial que ostentan los cuerpos opaca todo coeficiente de superficie.",
                            "La fricción estática experimentaría una falla de fatiga inminente causando que las unidades de vidrio se despeguen levitando levemente."
                        ],
                        correcta: 0,
                        explicacion: "Al tirar con lentitud, hay tiempo suficiente para que la fuerza de fricción estática acelere los objetos junto con el mantel."
                    }
                ]
            },
            {
                id: "05-05",
                titulo: "05-05 Huevos y plato de pizza",
                tema: "Inercia de cuerpos suspendidos ante el retiro impulsivo de su base de apoyo.",
                objetivoVideo: "Observar la caída vertical por gravedad de objetos cuando el soporte horizontal intermedio es expulsado bruscamente.",
                preguntas: [
                    {
                        pregunta: "¿Qué fuerza horizontal neta actúa sobre los huevos en el breve instante en que el plato y los tubos son desalojados lateralmente?",
                        opciones: [
                            "Una fuerza impulsiva de amortiguación lateral que pretende relanzarlos como catapulta contra la dirección vectorizada del golpe.",
                            "Una presión masiva de agarre viscoso que busca adherirlos cinéticamente con la velocidad destructora del elemento hueco.",
                            "La acción de la plataforma proyectada horizontalmente, la cual despliega un frente de resistencia aerodinámica que frena al proyectil.",
                            "Prácticamente no existe ninguna fuerza horizontal; el choque extirpa los apoyos con tal celeridad que fracasa en su intento de transmitirles momento en dicho eje."
                        ],
                        correcta: 3,
                        explicacion: "El retiro instantáneo del soporte evita que se aplique una fuerza horizontal prolongada capaz de alterar su posición en ese eje."
                    },
                    {
                        pregunta: "¿Por qué los huevos caen verticalmente directo dentro de los vasos de agua en lugar de seguir la trayectoria del plato?",
                        opciones: [
                            "Porque la primera ley preserva estático su estado horizontal primitivo, y en el instante en que sus bases desparecen, solo la constante aceleración de la gravedad asume el control obligándolos a hundirse hacia abajo.",
                            "Porque los enlaces intermoleculares polares del agua provocan fuerzas invisibles de succión hidrostática enfocadas sobre el material calcáreo de los huevos.",
                            "Porque la fuerza de la percusión entrega componentes rotacionales cruzadas que nulifican definitivamente los vectores de vuelo en parábola para todo el grupo.",
                            "Porque las corrientes de vacío generadas al escapar raudamente los tubos plásticos obran como anclas neumáticas forzándolos a ignorar sus tendencias inerciales clásicas."
                        ],
                        correcta: 0,
                        explicacion: "Por inercia conservan su posición horizontal nula y solo experimentan la fuerza vertical de la gravedad."
                    }
                ]
            },
            {
                id: "05-06",
                titulo: "05-06 Lápiz y madera terciada",
                tema: "Inercia mecánica local y penetración a altas velocidades de impacto.",
                objetivoVideo: "Explicar cómo la inercia de un material sólido impide su deformación global inmediata ante una colisión de muy alta velocidad.",
                preguntas: [
                    {
                        pregunta: "¿Por qué un proyectil ligero como un lápiz puede perforar una tabla sólida si es lanzado a una velocidad sumamente elevada?",
                        opciones: [
                            "Porque a regímenes hipersónicos la fricción perimetral pre-funde la lámina leñosa antes de que ocurra siquiera una conexión superficial directa con el cuerpo intruso.",
                            "Porque al chocar con ese exceso de celeridad, las leyes de repulsión moleculares ceden y cambian su orientación facilitando una ruptura limpia y fluida del sustrato de madera.",
                            "Porque la inercia concentrada de las fibras impide a la tabla replegarse o ceder como conjunto ante un impacto tan expedito, lo que confina toda la devastadora energía en un milímetro, cortándolo nítidamente.",
                            "Porque basándose estrictamente en las ecuaciones inerciales la propia masa intrínseca del lápiz se densifica igualando las prestaciones estructurales del plomo metálico denso."
                        ],
                        correcta: 2,
                        explicacion: "La altísima velocidad hace que la inercia de la madera impida que las zonas circundantes respondan a tiempo, localizando el corte de forma frágil y nítida."
                    },
                    {
                        pregunta: "¿Cómo se relaciona el tiempo característico de respuesta inercial de la madera con la concentración del esfuerzo de corte?",
                        opciones: [
                            "Si la agresión ocurre de forma más vertiginosa que el margen inercial necesario para propagar la fuerza y hacer retroceder el madero, dicha fuerza no alcanza a disiparse; se condensa agudamente y termina superando la tolerancia de fractura de ese pequeñísimo punto local.",
                            "Realmente se descarta cualquier rol para la variable inercial del tiempo; el agujero resulta única y exclusivamente factible si el coeficiente elástico del invasor puntudo supera holgadamente a la fibra estacionaria.",
                            "Una ventana temporal amplia es garantía suficiente para generar el clímax destructivo instantáneo causando rebotes elásticos impecables.",
                            "Las dos magnitudes obedecen una relación inversa del orden del cuadrado de los espesores, indicando inequívocamente que únicamente tablones con gran masa logran absorber con tiempo y en su totalidad este impacto mortal."
                        ],
                        correcta: 0,
                        explicacion: "Cuando el impacto es más rápido que el tiempo de relajación o deformación elástica global de la tabla, el esfuerzo se concentra localmente provocando la perforación."
                    }
                ]
            }
        ]
    },
    6: {
        introLab: "Esta sesión explora la tercera ley de Newton y el principio fundamental de conservación de la cantidad de movimiento lineal. A través de sistemas de propulsión a reacción, carros acoplados y colisiones aisladas, se estudiará cómo las fuerzas ocurren siempre en pares interactivos de igual magnitud y sentido opuesto.",
        objGeneral: "Comprobar empíricamente el principio de acción y reacción y la conservación del momento lineal en sistemas aislados y propulsados por eyección de masa.",
        videos: [
            {
                id: "06-01",
                titulo: "06-01 Deslizadores de reacción",
                tema: "Fuerzas mutuas de interacción en un sistema aislado sin fricción.",
                objetivoVideo: "Comprobar que cuando dos deslizadores interactúan mediante un resorte o explosión interna, experimentan fuerzas de igual magnitud y sentidos opuestos.",
                preguntas: [
                    {
                        pregunta: "¿Por qué los dos deslizadores adquieren aceleraciones en sentidos contrarios al liberarse el mecanismo propulsor interno?",
                        opciones: [
                            "Porque la energía elástica se divide aleatoriamente dependiendo del coeficiente de fricción individual de cada deslizador sobre el riel.",
                            "Porque el mecanismo interno ejerce fuerzas simultáneas de igual magnitud y sentidos opuestos sobre cada deslizador, cumpliendo el principio de acción y reacción de Newton.",
                            "Porque el aire comprimido que provee el riel fluye forzosamente hacia los extremos, generando un arrastre aerodinámico divergente.",
                            "Porque la inercia rotacional del resorte, al liberarse, se transforma inevitablemente en torques lineales orientados en sentidos opuestos."
                        ],
                        correcta: 1,
                        explicacion: "La tercera ley de Newton garantiza que las fuerzas mutuas de interacción son iguales y opuestas, generando aceleraciones divergentes."
                    },
                    {
                        pregunta: "Si los dos deslizadores poseen masas diferentes, ¿cómo se relacionan sus aceleraciones instantáneas durante la interacción?",
                        opciones: [
                            "Ambas aceleraciones resultan ser idénticas en todo momento, pues están generadas exactamente por el mismo par de fuerzas de la tercera ley.",
                            "Son inversamente proporcionales a sus respectivas masas; a pesar de recibir idéntica fuerza, el deslizador de mayor masa experimenta una menor aceleración inercial.",
                            "Son directamente proporcionales a la masa; el objeto más pesado logra acelerar más rápido en la etapa inicial debido a su mayor acumulación de momento latente.",
                            "La aceleración del deslizador ligero exhibe un perfil exponencial, mientras que la del pesado permanece rígidamente constante a lo largo de la expansión del resorte."
                        ],
                        correcta: 1,
                        explicacion: "Como a = F / m, al ser la fuerza de interacción igual para ambos, la aceleración es inversamente proporcional a la masa de cada cuerpo."
                    }
                ]
            },
            {
                id: "06-02",
                titulo: "06-02 Conservación del momento de deslizadores de reacción",
                tema: "Conservación del momento lineal total en procesos de repulsión interna.",
                objetivoVideo: "Medir cuantitativamente las velocidades adquiridas por dos cuerpos repelidos para verificar que la cantidad de movimiento total se mantiene nula.",
                preguntas: [
                    {
                        pregunta: "¿Cuál es el valor del momento lineal total del sistema antes de la liberación y por qué permanece inalterado tras la repulsión?",
                        opciones: [
                            "Es máximo, y se conserva invariable a causa de que toda la fuerza liberada procede de un mecanismo estrictamente elástico o conservativo.",
                            "Es numéricamente igual al peso total sumado de ambas masas, un factor que no sufre alteraciones ya que la gravedad local es una constante inmutable.",
                            "Es igual a cero; y permanece constante porque el sistema está aislado en la dirección horizontal, sin fuerzas externas netas que puedan inyectar o extraer cantidad de movimiento.",
                            "Inicia valiendo cero, pero una vez activada la repulsión, aumenta progresivamente al registrarse la suma de las velocidades crecientes en ambos cuerpos masivos."
                        ],
                        correcta: 2,
                        explicacion: "Al encontrarse en reposo inicial, el momento total es cero y se conserva constante porque no hay fuerzas externas netas horizontales."
                    },
                    {
                        pregunta: "¿Qué relación matemática existe entre el cociente de las velocidades finales y el cociente de las masas de los dos deslizadores?",
                        opciones: [
                            "El cociente de las velocidades finales es directamente proporcional al de sus masas.",
                            "El cociente o razón entre las velocidades adquiridas es inversamente proporcional a la razón de sus masas (v1/v2 = m2/m1).",
                            "Es una relación puramente exponencial, cuyo grado está dictaminado en exclusiva por el cuadrado del coeficiente de restitución.",
                            "No es posible establecer una relación matemática sólida, ya que las velocidades finales son producto azaroso de la tolerancia de rozamiento."
                        ],
                        correcta: 1,
                        explicacion: "Por la conservación del momento lineal (m1·v1 + m2·v2 = 0), se deduce que las velocidades son inversamente proporcionales a sus masas."
                    }
                ]
            },
            {
                id: "06-03",
                titulo: "06-03 Carro sobre una tabla que rueda",
                tema: "Fuerzas de reacción por fricción entre cuerpos de un sistema acoplado.",
                objetivoVideo: "Analizar el desplazamiento en sentido opuesto de una plataforma de apoyo móvil cuando un vehículo rueda sobre ella.",
                preguntas: [
                    {
                        pregunta: "¿Hacia dónde ejerce la fuerza de tracción del carro sobre la tabla y en qué sentido empuja la tabla las ruedas del carro?",
                        opciones: [
                            "El carro ejerce fuerza tractora hacia adelante sobre la tabla girando en banda, y la tabla termina succionando las ruedas hacia atrás.",
                            "El carro, mediante la fricción rotacional de sus llantas, empuja la tabla hacia atrás; como reacción a esto, la tabla aplica una fuerza empujando las ruedas del carro hacia adelante.",
                            "Ambas fuerzas apuntan exactamente en el mismo sentido del avance del carro, posibilitando así que el tablero gane impulso secundario.",
                            "El empuje mecánico de los neumáticos colapsa sobre el baricentro vertical del propio automóvil, anulando virtualmente cualquier respuesta reactiva."
                        ],
                        correcta: 1,
                        explicacion: "Las llantas del carro empujan la tabla hacia atrás por fricción, y por la tercera ley, la tabla empuja al carro hacia adelante con la misma fuerza."
                    },
                    {
                        pregunta: "¿Por qué la tabla retrocede mientras el vehículo avanza y cómo se verifica la conservación del centro de masa del sistema conjunto?",
                        opciones: [
                            "Por la ley de acción y reacción actuando como fuerza interna del acoplamiento; al carecer de fuerzas horizontales netas desde el exterior, el centro de masa conjunto de carro y tabla permanece incólume en su posición de reposo inicial.",
                            "Retrocede a causa de un marcado rebote inercial de la superficie lisa; el centro de masa del grupo global se desplaza lentamente hacia atrás.",
                            "Porque la fricción cinética superficial impera en el experimento; la conservación recién se constata analíticamente al observar el centro de masas.",
                            "Debido al teorema de superposición vectorial; las fuerzas centrífugas de las llantas rebanan el baricentro general."
                        ],
                        correcta: 0,
                        explicacion: "Al ser fuerzas internas al sistema, no alteran la posición del centro de masa general del conjunto carro-tabla."
                    }
                ]
            },
            {
                id: "06-04",
                titulo: "06-04 Carro de ventilador con vela",
                tema: "Cancelación de fuerzas internas frente al empuje de fuerzas externas.",
                objetivoVideo: "Demostrar que el flujo de aire de un ventilador montado sobre un carro no produce aceleración neta si choca contra una vela solidaria al vehículo.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el carro no se acelera cuando el aire expulsado por el ventilador rebota directamente contra la vela montada sobre el mismo carro?",
                        opciones: [
                            "Porque el fluido de aire, al estrellarse contra el paño cóncavo, se quiebra en un flujo turbulento aleatorio perdiendo toda eficacia.",
                            "Porque el carro incrementa excesivamente su peso total inercial al fijarle la vela perpendicular, frustrando así los escasos Newtons.",
                            "Porque la fuerza de retroceso que experimenta el ventilador al arrojar el aire, y la fuerza con que ese mismo aire impacta la vela, son fuerzas opuestas internas del mismo sistema estructural que se anulan en la sumatoria neta.",
                            "Porque el teorema del reposo de Galileo impide expresamente la traslación de aquellos cuerpos cuya fuente de empuje gaste simultáneamente la velocidad."
                        ],
                        correcta: 2,
                        explicacion: "Ambas fuerzas (impulso del ventilador y frenado de la vela) ocurren dentro del mismo sistema cerrado, por lo que constituyen fuerzas internas que se cancelan."
                    },
                    {
                        pregunta: "¿Qué ocurre con el movimiento del carro si se retira la vela y el chorro de aire es expulsado libremente hacia el entorno exterior?",
                        opciones: [
                            "Queda petrificado en su punto inercial inicial, dado que la atmósfera natural resulta demasiado vaporosa.",
                            "El móvil acelera decididamente en sentido contrario al chorro eyectado, esto empujado por la contundente fuerza de reacción que surge sobre el ventilador al haber impulsado toda esa masa fluida al ambiente libre.",
                            "Arranca avanzando en estricta sincronía con el sentido direccional en el cual se sopló el chorro.",
                            "Experimenta tan saludablemente una rotación sobre su eje geométrico vertical."
                        ],
                        correcta: 1,
                        explicacion: "Al salir el aire del sistema hacia el entorno, el ventilador experimenta una fuerza de reacción neta que acelera el carro en sentido opuesto."
                    }
                ]
            },
            {
                id: "06-05",
                titulo: "06-05 Cohete de CO2",
                tema: "Propulsión a reacción mediante eyección de gas comprimido a alta presión.",
                objetivoVideo: "Estudiar la propulsión de un proyectil por escape de gas y aplicar la ecuación del empuje reactivo de masa variable.",
                preguntas: [
                    {
                        pregunta: "¿Cuál es el mecanismo físico que genera la fuerza de empuje hacia adelante en el cohete al liberarse el dióxido de carbono comprimido?",
                        opciones: [
                            "La vigorosa percusión expansiva que logra ejecutar la columna de gas en contra del obstáculo físico representado por el aire estancado.",
                            "El salto térmico endógeno originado que convierte subitamente a la boquilla en un frente rígido cristalizado.",
                            "La expulsión masiva y continua del chorro de gas hacia la retaguardia, fenómeno que, mediante la inquebrantable conservación del momento lineal (acción-reacción), detona el empuje propulsor simétrico dirigido al frente sobre el armazón.",
                            "El perfil hidrodinámico superior de la estructura, capaz de captar energía de las corrientes succionadoras externas."
                        ],
                        correcta: 2,
                        explicacion: "El cohete expulsa masa (gas) a gran velocidad hacia atrás, lo que genera por conservación del momento lineal una fuerza de reacción (empuje) hacia adelante."
                    },
                    {
                        pregunta: "¿Cómo depende la aceleración máxima alcanzada por el cohete de la velocidad de salida del chorro de gas expulsado?",
                        opciones: [
                            "Presentan una relación de proporcionalidad inversa; al maximizar la violencia terminal de escape, el cohete sacrifica aceleración frontal.",
                            "La dependencia es directa y proporcional: entre mayor resulte ser la velocidad relativa con la que se desecha violentamente esa masa de gas, sustancialmente más grande será la fuerza reactiva aplicada y por ende su aceleración global.",
                            "Carecen totalmente de una conexión matemática causal, ya que la capacidad aceleradora reposa excluyentemente en la cabeza aerodinámica.",
                            "Adquiere un pico inicial estándar completamente ajeno a las estadísticas de velocidad del fluido."
                        ],
                        correcta: 1,
                        explicacion: "Según la ecuación del cohete de Tsiolkovski y la fórmula de empuje, la fuerza es directamente proporcional a la velocidad de expulsión."
                    }
                ]
            },
            {
                id: "06-07",
                titulo: "06-07 Carro movido por un extinguidor de fuego",
                tema: "Tercera ley de Newton en sistemas de transporte a reacción macroscópicos.",
                objetivoVideo: "Evidenciar la aceleración de un vehículo cargado con una persona propulsado por la fuerza reactiva generada por un extintor de gas.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el carro se mueve hacia atrás en el instante en que se acciona el extinguidor de fuego hacia adelante?",
                        opciones: [
                            "Porque el chorro de gas a alta presión choca contra el aire del entorno, utilizándolo como una pared invisible.",
                            "Porque al expulsar el gas hacia adelante con gran fuerza, el gas ejerce simultáneamente una fuerza de reacción de igual magnitud pero en sentido contrario sobre el extinguidor y el carro.",
                            "Porque la rápida pérdida de masa del extinguidor al vaciarse altera el centro de gravedad del sistema.",
                            "Porque la baja temperatura del CO2 liberado enfría el entorno, reduciendo a cero la fricción estática de las ruedas."
                        ],
                        correcta: 1,
                        explicacion: "Es una aplicación directa del principio de acción y reacción: la eyección del gas en un sentido impulsa el carro en el sentido opuesto."
                    },
                    {
                        pregunta: "¿Por qué la masa total decreciente del vehículo favorece un aumento progresivo en su aceleración a lo largo del tiempo de descarga?",
                        opciones: [
                            "Porque asumiendo que el empuje reactivo se mantiene en márgenes estables, el paulatino aligeramiento inercial del vehículo engendra ineludiblemente una escalada continua de la aceleración obtenida.",
                            "Porque en ausencia de tanto gravamen de carga, los rodajes abandonan temporalmente su contacto microscópico normal.",
                            "Porque el dióxido carbónico al gozar de vastos volúmenes sobrantes incrementa espontáneamente sus ondas compresivas.",
                            "Porque las válvulas reguladoras del envase reconocen la merma interior respondiendo con una expansión mecánica de seguridad."
                        ],
                        correcta: 0,
                        explicacion: "Al disminuir continuamente la masa total del sistema (m) mientras el empuje se mantiene, la aceleración (a = F / m) aumenta de forma progresiva."
                    }
                ]
            }
        ]
    },
    7: {
        introLab: "Esta sesión de laboratorio se dedica al análisis de las fuerzas de rozamiento en interfaces sólidas y sistemas neumáticos. Se caracterizarán experimentalmente los coeficientes de fricción estática y cinética, evaluando su dependencia con la fuerza normal, el área de contacto aparente y la naturaleza microscópica de las superficies.",
        objGeneral: "Determinar experimentalmente las leyes empíricas de la fricción sólida por deslizamiento y cuantificar los coeficientes de rozamiento estático y cinético en diversas configuraciones.",
        videos: [
            {
                id: "07-01",
                titulo: "07-01 Fricción en un riel de aire",
                tema: "Mecánica / Dinámica y fuerzas de fricción.",
                objetivoVideo: "Comparar el efecto de la fricción por contacto frente a un sistema de colchón de aire para evidenciar cómo su minimización permite extender la distancia de recorrido en el movimiento.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el deslizador se detiene con rapidez cuando se pone en movimiento sobre el riel sin el sistema de aire?",
                        opciones: [
                            "Porque la fricción por contacto directo sólido-sólido entre los metales genera una fuerza no conservativa que disipa rápidamente la energía cinética del sistema.",
                            "Porque al no inyectar aire, la presión atmosférica circundante aprisiona el deslizador incrementando de forma drástica su masa inercial.",
                            "Porque las corrientes de Foucault magnéticas del aluminio interactúan agresivamente con el armazón fijo de la pista.",
                            "Porque, de acuerdo a la ley de inercia, todos los cuerpos poseen una inercia rotacional intrínseca que debe agotar su velocidad."
                        ],
                        correcta: 0,
                        explicacion: "La fricción por contacto directo entre superficies sólidas desnudas genera fuerzas disipativas tangenciales que transforman la energía cinética en calor."
                    },
                    {
                        pregunta: "¿De qué manera el colchón de aire modifica las fuerzas de resistencia y el comportamiento dinámico del deslizador?",
                        opciones: [
                            "Aumenta el coeficiente de arrastre aerodinámico obligando al cuerpo a describir exclusivamente movimientos rectilíneos uniformemente acelerados.",
                            "Minimiza severamente la fricción de contacto, logrando que las fuerzas horizontales netas sean casi nulas y el movimiento se aproxime al modelo ideal de velocidad constante.",
                            "Bloquea temporalmente el vector de gravedad, creando un marco de ingravidez que le permite al deslizador anular su peso operativo.",
                            "Condensa la película de rozamiento estático logrando una resonancia vibratoria que empuja activamente al bloque hacia adelante."
                        ],
                        correcta: 1,
                        explicacion: "Al separar los sólidos mediante una fina capa de aire presurizado, se elimina prácticamente el rozamiento por contacto, permitiendo velocidad constante."
                    },
                    {
                        pregunta: "¿Qué relación física se observa entre la reducción de la fricción y el incremento en la distancia recorrida por el objeto?",
                        opciones: [
                            "Al reducirse la fricción, se reduce el trabajo negativo que extrae energía del sistema, lo que le permite mantener su velocidad y recorrer mucha más distancia inercial.",
                            "Una menor fricción concentra el calor térmico del impulso original en el eje longitudinal.",
                            "No existe relación física válida; el deslizador recorre más distancia únicamente cuando la masa volumétrica se evapora.",
                            "La reducción de fricción aumenta la aceleración de caída constante lo cual multiplica invariablemente el radio del alcance."
                        ],
                        correcta: 0,
                        explicacion: "Menor fuerza de fricción significa menor disipación de energía mecánica por unidad de distancia, prolongando el movimiento inercial."
                    }
                ]
            },
            {
                id: "07-02",
                titulo: "07-02 Fricción estática vs. Fricción cinética",
                tema: "Estática y Dinámica / Fuerzas de fricción.",
                objetivoVideo: "Medir y comparar experimentalmente la fuerza de fricción estática máxima frente a la fricción cinética utilizando un dinamómetro.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la lectura del dinamómetro alcanza un valor pico justo antes de que el bloque comience a deslizarse?",
                        opciones: [
                            "Porque el resorte interno del instrumento experimenta un engarrotamiento mecánico temporal frente a las aceleraciones.",
                            "Porque la fuerza de tracción debe igualar el punto máximo de la fricción estática, que es el umbral de tensión de los enlaces microscópicos justo antes de romperse para iniciar el movimiento.",
                            "Porque la energía cinética de tracción atraviesa un cambio de fase instantáneo provocando una interferencia en la escala.",
                            "Porque toda la aceleración gravitacional debe anularse a cero para habilitar geométricamente las leyes estáticas."
                        ],
                        correcta: 1,
                        explicacion: "La fuerza estática máxima es el límite de resistencia que oponen las asperezas superficiales entrelazadas antes de ceder y dar paso al deslizamiento."
                    },
                    {
                        pregunta: "¿Qué diferencia práctica se observa en la fuerza registrada por el dinamómetro entre el momento previo al movimiento y cuando el bloque ya se encuentra deslizando a velocidad constante?",
                        opciones: [
                            "Son idénticas matemáticamente, demostrando empíricamente que la estática y la cinemática son unificados.",
                            "La fuerza en deslizamiento es exponencialmente mayor a la inicial por culpa de la turbulencia macroscópica.",
                            "Se registra oscilando erráticamente entre el peso absoluto del bloque de madera y la tensión centrífuga del dinamómetro.",
                            "La fuerza registrada justo antes del movimiento (fricción estática máxima) es consistentemente mayor que la fuerza constante que se requiere para mantenerlo deslizando (fricción cinética)."
                        ],
                        correcta: 3,
                        explicacion: "Una vez que el cuerpo está en movimiento, los puntos de contacto microscópicos no alcanzan a trabarse con la misma profundidad, por lo que la fricción cinética es menor que la estática máxima."
                    },
                    {
                        pregunta: "¿Cómo se relaciona la magnitud de la fuerza de fricción estática máxima y la cinética con las propiedades de las superficies en contacto?",
                        opciones: [
                            "Son determinadas exclusivamente por el área volumétrica proyectada de las bases intervinientes.",
                            "Sus coeficientes crecen proporcionalmente a medida que la temperatura ambiente debilita las fibras elásticas.",
                            "Dependen de forma directa del coeficiente de rozamiento de las superficies (su rugosidad, adhesión intermolecular e impurezas), siendo este un factor propio de cada pareja de materiales que interactúan.",
                            "Se dictaminan inversamente al coeficiente elástico de Young."
                        ],
                        correcta: 2,
                        explicacion: "Los coeficientes de fricción dependen de la naturaleza química y física de ambos materiales en contacto y del estado de sus superficies."
                    }
                ]
            },
            {
                id: "07-03",
                titulo: "07-03 Dependencia de la fricción con respecto al área",
                tema: "Leyes empíricas de la fricción por deslizamiento.",
                objetivoVideo: "Demostrar si el área aparente de contacto afecta o es independiente de la fuerza de fricción total.",
                preguntas: [
                    {
                        pregunta: "¿Qué relación matemática existe entre el área de contacto y la fuerza de fricción según las leyes empíricas clásicas?",
                        opciones: [
                            "Existe una fuerte proporcionalidad inversa; al disminuir el área el sistema se clava como punzón.",
                            "Muestran una relación exponencial cruzada donde la fricción estática duplica sus vectores de oposición.",
                            "Según el modelo clásico, la fuerza total de fricción es matemáticamente independiente de la magnitud del área geométrica aparente de contacto entre los sólidos.",
                            "Tienen una correspondencia directa, de tal suerte que si rotamos un prisma bloqueando una cara de triple grosor su capacidad se multiplica por tres."
                        ],
                        correcta: 2,
                        explicacion: "En las leyes clásicas de Coulomb-Amontons, la fricción por deslizamiento es independiente del área aparente de contacto."
                    },
                    {
                        pregunta: "¿Qué se observa en los valores medidos al cambiar la orientación del bloque de área pequeña a área grande?",
                        opciones: [
                            "Se constata que los valores de tracción medidos no experimentan un cambio significativo comprobando empíricamente la independencia del área macroscópica.",
                            "La magnitud de fricción se va reduciendo drásticamente a la mitad evidenciando una ventaja aerodinámica fundamental.",
                            "Los dinamómetros marcan sobrecargas por roturas de tensiones cruzadas invalidando cualquier comparación teórica.",
                            "La lectura se multiplica por diez al verse involucrados nuevos perfiles de volumen de masa."
                        ],
                        correcta: 0,
                        explicacion: "Los experimentos demuestran que al apoyar el bloque sobre distintas caras, la fuerza de fricción requerida permanece prácticamente igual."
                    },
                    {
                        pregunta: "¿Por qué a nivel microscópico el área real de contacto difiere del área geométrica aparente?",
                        opciones: [
                            "Porque microscópicamente el rozamiento genera densos campos electromagnéticos que obligan a las superficies a levitar.",
                            "Porque absolutamente todas las superficies son rugosas a nivel atómico, de manera que solo los puntos salientes o 'crestas' entran realmente en contacto íntimo y soportan la carga estructural.",
                            "Porque las deformaciones debidas a la fuerza tangencial empujan a las moléculas formando una delgada película elástica.",
                            "Porque el cálculo del área aparente comete sistemáticamente un error vectorial perdiendo las componentes de arrastre."
                        ],
                        correcta: 1,
                        explicacion: "Las superficies reales tienen irregularidades microscópicas, por lo que el contacto real ocurre únicamente en puntos discretos (asperezas), cuya área sumada es mucho menor que el área aparente."
                    }
                ]
            },
            {
                id: "07-04",
                titulo: "07-04 Dependencia de la fricción con respecto al peso",
                tema: "Fuerza normal y fricción.",
                objetivoVideo: "Comprobar la proporcionalidad directa entre la fuerza normal (peso) y la fuerza de fricción.",
                preguntas: [
                    {
                        pregunta: "¿Cómo varía la fuerza de fricción si se duplica el peso del objeto sobre la superficie?",
                        opciones: [
                            "Incrementa a la cuarta potencia ya que debe asimilar simultáneamente el cuadrado de la masa.",
                            "También se duplica, demostrando que la fricción mantiene una estricta proporcionalidad directa de primer grado con la magnitud de la fuerza normal impuesta al sistema.",
                            "Queda exactamente en su mismo valor, dado que las fuerzas perpendiculares se cancelan ortogonalmente.",
                            "Desciende casi hasta la mitad como un efecto de alisado natural producido por la intensa compresión."
                        ],
                        correcta: 1,
                        explicacion: "Dado que la fuerza de fricción es F_r = μ · N, al duplicar el peso (y por ende la fuerza normal N), la fricción se duplica proporcionalmente."
                    },
                    {
                        pregunta: "¿Qué representa físicamente la pendiente de la gráfica de fuerza de fricción en función de la fuerza normal?",
                        opciones: [
                            "Representa la aceleración inercial sostenida de la estructura a lo largo del intervalo lineal cronometrado.",
                            "El valor de la energía de trabajo disipativa máxima convertida irreversiblemente en un fluido de calor estático.",
                            "Simboliza exactamente al coeficiente de fricción empírico (sea estático o cinético, según los datos) para la combinación particular de materiales graficados en el experimento.",
                            "Expresa la magnitud escalar del área geométrica efectiva por donde se propaga toda la presión estática."
                        ],
                        correcta: 2,
                        explicacion: "En una gráfica de F_fricción vs. N, la ecuación lineal F = μN indica que la pendiente de la recta corresponde directamente al coeficiente de rozamiento μ."
                    },
                    {
                        pregunta: "¿Se mantiene constante el coeficiente de fricción al alterar la carga vertical?",
                        opciones: [
                            "No, crece dramáticamente producto de que las presiones superlativas introducen fusiones en frío atípicas.",
                            "Disminuye asintóticamente ya que las deformaciones mecánicas elastoplásticas destrozan la estructura base.",
                            "El coeficiente sí se mantiene constante al constituir una propiedad de la interfaz que no varía, la que resulta afectada e incrementada proporcionalmente por la normal es la magnitud final de la fricción como tal.",
                            "Se altera de una forma oscilatoria cíclica porque los módulos de Young jamás soportan compresiones rígidas."
                        ],
                        correcta: 2,
                        explicacion: "El coeficiente de fricción es una propiedad característica de la interacción entre las dos superficies y permanece constante para rangos normales de carga."
                    }
                ]
            },
            {
                id: "07-05",
                titulo: "07-05 Dependencia de la fricción con respecto a la superficie",
                tema: "Estática y Dinámica / Coeficiente de fricción estática en planos inclinados.",
                objetivoVideo: "Demostrar cómo las superficies de contacto afectan el coeficiente de fricción estática y el ángulo crítico de deslizamiento.",
                preguntas: [
                    {
                        pregunta: "¿Qué relación existe entre el ángulo de inclinación en el que comienza el deslizamiento y el coeficiente de fricción estática del material?",
                        opciones: [
                            "El coeficiente es idéntico a la componente senoidal del ángulo crítico escalado.",
                            "Se comprueba estáticamente que la magnitud del coeficiente de rozamiento crítico equivale con exactitud a la función tangente trigonométrica del ángulo máximo de vuelco o caída (μ_s = tan θ).",
                            "Tienen la proporcionalidad cuadrática cruzada; un ángulo cerrado multiplica al exponencial rotacional.",
                            "Carecen de todo vínculo analítico, el coeficiente tan solo corresponde al cálculo perimetral de presiones."
                        ],
                        correcta: 1,
                        explicacion: "En el plano inclinado al ángulo crítico de deslizamiento (θ), la componente del peso iguala a la fricción estática máxima, cumpliéndose que μ_s = tan(θ)."
                    },
                    {
                        pregunta: "¿Por qué los bloques de latón no empiezan a deslizarse al mismo tiempo a pesar de tener la misma masa y dimensiones?",
                        opciones: [
                            "Porque el proceso de micro dilatación térmica varía aleatoriamente en sus bases de carga ocasionando descarrilamientos.",
                            "Porque aunque sus pesos gravitatorios inerciales calcen perfecto la fuerza impulsora neta experimenta fluctuaciones turbinas.",
                            "Porque las caras en contacto han sido forradas con distintos materiales (madera, caucho, etc.), dándole a cada unidad un coeficiente de roce estático único que demandará distintos ángulos para romperse y deslizar.",
                            "Porque los momentos magnéticos intrínsecos del latón generan atracciones anárquicas disparejas hacia la tabla de ensayo."
                        ],
                        correcta: 2,
                        explicacion: "La diferencia en los materiales de recubrimiento cambia el coeficiente de fricción estática de cada bloque, requiriendo un ángulo de inclinación diferente para iniciar el deslizamiento."
                    },
                    {
                        pregunta: "¿Cuál de las superficies probadas (caucho, madera, lija o teflón) requiere un mayor ángulo de inclinación para vencer la fricción estática y por qué?",
                        opciones: [
                            "La madera, debido a su extrema absorción de la humedad que funciona como ventosa neumática.",
                            "El teflón, ya que al ser un recubrimiento ultra liso obliga a la tabla a elevarse exageradamente.",
                            "Materiales como el caucho o la lija, en virtud de poseer coeficientes estáticos sumamente altos dados por sus propiedades de encaje microscópico rugoso o elevada tenacidad elástica intermolecular para aferrarse con fuerza al soporte.",
                            "Ninguno destaca; de manera predecible, los cuatro resbalan simultáneos alrededor del cuadragésimo grado."
                        ],
                        correcta: 2,
                        explicacion: "Superficies de gran rugosidad o alto coeficiente de adhesión (como la lija o el caucho) tienen un coeficiente μ_s elevado, lo que exige una pendiente mayor (mayor ángulo tan θ) para deslizar."
                    }
                ]
            },
            {
                id: "07-06",
                titulo: "07-06 Estabilidad de un carro que rueda",
                tema: "Dinámica de cuerpos rígidos, fricción y estabilidad de vehículos.",
                objetivoVideo: "Analizar cómo el bloqueo de diferentes conjuntos de ruedas afecta la estabilidad direccional y el control de desplazamiento de un objeto rodante en una pendiente.",
                preguntas: [
                    {
                        pregunta: "¿Por qué razón el carro patina y pierde la trayectoria cuando se bloquean exclusivamente las ruedas traseras?",
                        opciones: [
                            "Porque sus ruedas posteriores transitan violentamente de fricción estática de rodadura a fricción cinética resbaladiza, extirpando el agarre posterior con lo que la inercia transforma cualquier pequeña fuerza lateral en un indeseado trompo (sobreviraje).",
                            "Porque al apretar férreamente los frenos el baricentro general de la masa gravitatoria transita raudamente hacia adelante levantando al armazón.",
                            "Porque la sumatoria vectorial de las normales ascendentes en la pendiente de la mesa colapsa por rotura de simetría.",
                            "Porque esto obliga al tren posterior a transpolar inercia hacia adelante en forma de fricción hidrostática."
                        ],
                        correcta: 0,
                        explicacion: "Al bloquear el eje trasero, se pierde la fuerza de guía lateral en la parte posterior, provocando que la inercia impulse la cola del vehículo hacia adelante (efecto sobreviraje o trompo)."
                    },
                    {
                        pregunta: "¿Qué efecto físico produce el bloqueo de las ruedas delanteras en comparación con las traseras al descender por el plano inclinado?",
                        opciones: [
                            "Genera volcaduras repentinas sobre el eje frontal puesto que las ruedas que quedaron libres arrollan la masa inercial.",
                            "Provoca que el carro alcance una velocidad exponencial tipo caída libre ignorando las rugosidades base.",
                            "El carro logra conservar una trayectoria en esencia rectilínea descendiendo sólidamente (subviraje), dado que las ruedas traseras mantienen su agarre estático natural operando como estabilizadores inerciales o 'plumas de cola' que impiden que el tren trasero se desvíe en rotación indeseada.",
                            "Desencadena vibraciones transversales en serie que parten la estabilidad dinámica y producen un zigzag caótico."
                        ],
                        correcta: 2,
                        explicacion: "Con las ruedas delanteras bloqueadas (subviraje), el vehículo tiende a deslizarse en línea recta hacia abajo debido a que las ruedas traseras libres mantienen la estabilidad direccional."
                    },
                    {
                        pregunta: "¿Cómo se relaciona la fricción por deslizamiento y el momento de inercia direccional con el comportamiento de estabilidad del carro en este experimento?",
                        opciones: [
                            "En pleno descenso plano la fricción rotatoria desvía el momento angular frontal logrando que el carro patine siempre en perfectas parábolas.",
                            "Cuando un eje derrapa la fricción se hace puramente cinética y pierde control contra desplazamientos de lado; si esto pasa atrás, la inercia del vehículo que sigue moviéndose tratará de adelantar y pivotear sobre el frente con agarre, desestabilizando completamente al móvil por acción de su propio inercial giro empujador.",
                            "Se acoplan para producir un torque compensatorio perfecto en las ruedas derechas e izquierdas, manteniendo la estabilidad inercial incólume.",
                            "La relación es inversamente cuadrática frente al momento inercial debido a que la fricción lateral empuja hacia arriba el centro magnético."
                        ],
                        correcta: 1,
                        explicacion: "La pérdida de tracción trasera reduce el rozamiento estático lateral a cinético, permitiendo que el momento de inercia del vehículo actúe como un par de giro desestabilizador (trompo)."
                    }
                ]
            }
        ]
    },
    8: {
        introLab: "En esta sesión se estudiarán los conceptos fundamentales de trabajo, energía y potencia mediante la transformación continua de la energía potencial en energía cinética, aplicando la conservación de la energía mecánica en sistemas ideales y reales.",
        objGeneral: "Comprobar experimentalmente el principio de conservación de la energía mecánica a través de la transformación e intercambio cíclico entre energía potencial gravitatoria, energía potencial elástica y energía cinética.",
        videos: [
            {
                id: "08-01",
                titulo: "08-01 Martinete",
                tema: "Conservación y transferencia de energía mecánica / Trabajo y energía.",
                objetivoVideo: "Ilustrar la conversión de energía potencial gravitatoria en energía cinética y su posterior trabajo de penetración al impactar sobre los clavos.",
                preguntas: [
                    {
                        pregunta: "¿Cómo influye la altura de caída del martinete en la energía cinética acumulada justo antes del impacto con los clavos?",
                        opciones: [
                            "A mayor altura, el martinete acumula mayor energía potencial gravitatoria inicial, la cual se transforma en una mayor energía cinética justo en el instante previo al impacto.",
                            "La altura no influye en la energía cinética acumulada; esta depende exclusivamente de la masa inercial del bloque metálico empleado.",
                            "Una caída desde mayor altura incrementa la fricción aerodinámica de manera desproporcionada, restando energía cinética.",
                            "La altura provoca que la aceleración gravitacional aumente exponencialmente, multiplicando la energía del martinete."
                        ],
                        correcta: 0,
                        explicacion: "Por conservación de la energía mecánica, toda la energía potencial gravitatoria inicial (m·g·h) se convierte en energía cinética en el punto más bajo de la caída."
                    },
                    {
                        pregunta: "¿Qué formas de energía se manifiestan y se transforman durante el choque entre el martinete y el sistema de clavos?",
                        opciones: [
                            "Se conserva una energía mecánica puramente elástica donde ambos cuerpos rebotan sin experimentar pérdida cinética.",
                            "La energía potencial gravitatoria pura se transfiere directamente a los clavos transformándolos temporalmente en imanes.",
                            "La energía de repulsión electrostática del metal frena al martinete e induce la entrada de los clavos.",
                            "La energía cinética de caída del martinete se transforma en trabajo mecánico (hundir los clavos), deformación estructural y se disipa en energía térmica y acústica (sonido)."
                        ],
                        correcta: 3,
                        explicacion: "El choque es inelástico: parte de la energía cinética se invierte en el trabajo de penetración y deformación, mientras que otra fracción se disipa como calor y ondas sonoras."
                    }
                ]
            },
            {
                id: "08-02",
                titulo: "08-02 Cañón de resorte",
                tema: "Energía potencial elástica y relación entre masa, fuerza y aceleración.",
                objetivoVideo: "Analizar cómo influye la masa de un proyectil en la respuesta dinámica y en la altura o alcance alcanzado cuando se le transfiere una misma cantidad de energía potencial elástica.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se almacena inicialmente la energía mecánica en el mecanismo del cañón de resorte antes de efectuar el disparo?",
                        opciones: [
                            "Como energía cinética microscópica dentro de las moléculas de acero en fricción estática interna.",
                            "Como energía térmica condensada inducida por el rozamiento mecánico del émbolo contra las paredes.",
                            "Como energía potencial gravitatoria latente, aguardando la rotura del seguro inercial del tubo base.",
                            "Como energía potencial elástica, producida al realizar trabajo mecánico para comprimir o deformar las espiras metálicas del resorte."
                        ],
                        correcta: 3,
                        explicacion: "El trabajo realizado al comprimir el resorte se almacena internamente en forma de energía potencial elástica."
                    },
                    {
                        pregunta: "¿Por qué la esfera hueca (de menor masa) alcanza una altura mayor que la esfera de mayor masa si el resorte se comprime exactamente igual en ambos casos?",
                        opciones: [
                            "Porque el resorte, al detectar una menor resistencia inercial superficial, transfiere un mayor porcentaje.",
                            "Porque al transferir la misma cantidad de energía a ambas, la esfera de menor masa requiere gastar menos energía para vencer su propio peso, logrando ascender a mayor altura.",
                            "Porque la esfera maciza y pesada altera la constante elástica del resorte aplastando de manera irreversible los niveles energéticos.",
                            "Porque el objeto hueco se vale del flujo aerodinámico atrapado en su centro para flotar térmicamente hacia arriba."
                        ],
                        correcta: 1,
                        explicacion: "Dado que la energía inicial transferida es idéntica para ambas masas, la esfera de menor masa alcanza una mayor velocidad y, por ende, mayor altura potencial."
                    },
                    {
                        pregunta: "¿Cómo se refleja la segunda ley de Newton en la aceleración que adquiere cada esfera al momento de ser liberadas por el resorte?",
                        opciones: [
                            "La aceleración inicial se mantiene inmutable en ambas pruebas debido a que la magnitud impulsora es constante.",
                            "Ante una misma fuerza elástica aplicada, la esfera con mayor masa exhibe una mayor aceleración inercial.",
                            "La aceleración sufre retrasos logarítmicos porque ninguna fuerza real puede perturbar la inercia instantánea.",
                            "Al aplicarles la misma fuerza de impulso, la aceleración resulta inversamente proporcional a la masa (a = F / m); por ende, la esfera más ligera adquiere una aceleración inicial mucho mayor."
                        ],
                        correcta: 3,
                        explicacion: "La segunda ley de Newton establece que a una fuerza dada, la aceleración es inversamente proporcional a la masa del cuerpo acelerado."
                    }
                ]
            },
            {
                id: "08-03",
                titulo: "08-03 El saltarín",
                tema: "Energía potencial elástica y conservación de la energía mecánica.",
                objetivoVideo: "Analizar la conversión de la energía potencial elástica almacenada en energía cinética y gravitatoria mediante la liberación súbita de un mecanismo de retención.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se almacena la energía potencial elástica en el dispositivo justo antes de producirse el salto?",
                        opciones: [
                            "Al deformar el material del muñeco comprimiendo su estructura plástica contra el suelo y asegurándola para impedir su liberación inmediata.",
                            "Invirtiendo el centro de flotación del dispositivo mediante giros axiales rápidos sobre el plano de prueba.",
                            "Concentrando energía potencial estática en los apoyos de caucho para evadir la atracción gravitacional local.",
                            "Transfiriendo energía cinética remanente del impacto previo directamente a la boquilla aerodinámica."
                        ],
                        correcta: 0,
                        explicacion: "La compresión manual o mecánica del cuerpo elástico acumula energía potencial en su estructura hasta que el pestillo o ventosa la retiene."
                    },
                    {
                        pregunta: "¿Qué función cumple la ventosa como mecanismo de retención y cómo afecta el tiempo de liberación de la energía?",
                        opciones: [
                            "Incrementa la energía cinética succionando paulatinamente moléculas superficiales hasta saturar la balanza inercial.",
                            "Evita que la fuerza restauradora actúe inmediatamente; al ceder la ventosa, permite que toda la energía potencial acumulada se libere en un instante extremadamente breve (alta potencia).",
                            "Funciona como un regulador disipador que asegura un despegue a velocidad constante y sin aceleraciones bruscas.",
                            "Intercambia fluidos de baja presión con la madera inferior, provocando vacíos de densidad acústica."
                        ],
                        correcta: 1,
                        explicacion: "La ventosa mantiene temporalmente la energía potencial elástica retenida; al liberarse de golpe, transfiere esa energía en un intervalo de tiempo muy corto, generando alta potencia."
                    },
                    {
                        pregunta: "¿De qué manera la energía cinética inicial, obtenida tras el disparo, se convierte en energía potencial gravitatoria conforme el muñeco asciende?",
                        opciones: [
                            "A medida que gana altura contra el campo gravitacional, el muñeco va perdiendo velocidad, transformando el movimiento (energía cinética) directamente en energía de posición (potencial gravitatoria).",
                            "Ambas magnitudes energéticas aumentan sincrónicamente dado que la inercia acumulada nutre un pozo de potencial ascendente.",
                            "La velocidad se mantiene inalterada y todo el trabajo mecánico se canaliza hacia la rotación del centro de masas.",
                            "Se transfiere mediante una red de rozamientos cinéticos que anulan el avance de altitud forzando a rebotar la energía."
                        ],
                        correcta: 0,
                        explicacion: "Durante el ascenso, la gravedad realiza trabajo negativo, disminuyendo la velocidad (energía cinética) y aumentando la altura (energía potencial gravitatoria)."
                    }
                ]
            },
            {
                id: "08-04",
                titulo: "08-04 Conservación de energía en un resorte y riel inclinado",
                tema: "Conservación de la energía mecánica y elasticidad.",
                objetivoVideo: "Analizar cómo la energía potencial almacenada en el resorte, que es proporcional al cuadrado de su compresión, se convierte en energía potencial gravitatoria en función de la altura alcanzada por el deslizador.",
                preguntas: [
                    {
                        pregunta: "¿De qué manera la compresión inicial del resorte determina la energía potencial elástica almacenada antes de efectuar el lanzamiento?",
                        opciones: [
                            "La energía almacenada disminuye radicalmente si el resorte permanece comprimido por largos periodos.",
                            "Únicamente logra establecer la tensión de ruptura máxima y no cuantifica ni determina los factores energéticos iniciales.",
                            "De forma directa y cuadrada; a mayor deformación o acortamiento de la longitud original (x), se almacena una cantidad de energía proporcional al cuadrado de esa compresión (E_pe = 1/2 · k · x^2).",
                            "Posee una relación inversamente lineal: mientras más se oprimen las espiras del metal contra sí, menor es la fuerza elástica."
                        ],
                        correcta: 2,
                        explicacion: "La fórmula de la energía potencial elástica demuestra que esta depende de la constante del resorte y del cuadrado de su desplazamiento o compresión (1/2 k x^2)."
                    },
                    {
                        pregunta: "¿Por qué la altura máxima que alcanza el deslizador sobre el riel inclinado aumenta de forma no lineal (proporcional al cuadrado) conforme se incrementa la compresión del resorte?",
                        opciones: [
                            "Porque el rozamiento superficial cambia asintóticamente a lo largo de las pistas alterando el roce lineal.",
                            "Porque al subir el ángulo de ataque la constante gravitacional terrestre ejerce componentes de fuerza parabólicas.",
                            "Porque la energía potencial final alcanzada (que depende de la altura lineal h) debe igualar exactamente a la energía inicial aportada, la cual depende del cuadrado de la deformación elástica (1/2 k x^2).",
                            "Porque el riel, al flectar geométricamente bajo la masa del móvil propulsado, origina combaduras curvas en la trayectoria."
                        ],
                        correcta: 2,
                        explicacion: "Por conservación de la energía, 1/2 k x^2 = m·g·h, de modo que la altura h es directamente proporcional al cuadrado de la compresión x del resorte."
                    },
                    {
                        pregunta: "¿Qué transformaciones energéticas experimenta el sistema desde el instante en que se libera el deslizador hasta que se detiene momentáneamente en su punto más alto?",
                        opciones: [
                            "La energía de compresión elástica se transmutará al cien por ciento en energía térmica que frena al objeto antes de completar su vuelo.",
                            "El deslizador viaja impulsado por energía potencial que súbitamente transmuta a momentos de inercia y vuelve a estabilizarse únicamente como potencial térmica acústica.",
                            "Arranca con energía potencial gravitatoria que se disuelve en energía cinética intermedia, finalizando como un empuje elástico de resortes rebotados.",
                            "La energía potencial elástica inicial se convierte de golpe en energía cinética (velocidad máxima), la cual se va transformando gradualmente en energía potencial gravitatoria a medida que el cuerpo asciende y frena en la cima."
                        ],
                        correcta: 3,
                        explicacion: "El sistema evoluciona convirtiendo energía potencial elástica en cinética al descomprimirse el resorte, y posteriormente dicha cinética se transforma en potencial gravitatoria en el ascenso."
                    }
                ]
            },
            {
                id: "08-05",
                titulo: "08-05 Pelota saltarina o popper",
                tema: "Energía potencial elástica y conservación de la energía mecánica.",
                objetivoVideo: "Analizar cómo la conversión y liberación súbita de energía potencial elástica almacenada por inversión geométrica permite incrementar la altura de rebote más allá de la altura inicial.",
                preguntas: [
                    {
                        pregunta: "¿De qué manera se almacena energía en la semiesfera elástica al ser volteada de adentro hacia afuera antes de dejarla caer?",
                        opciones: [
                            "La tensión térmica de los dedos traspasa energía en forma de gradiente electrostática focalizada netamente en el ápice circular.",
                            "Forzando la curvatura natural geométrica del polímero; esta inversión del casquete elástico acumula energía potencial elástica en su estructura debido a las tensiones internas de flexión.",
                            "Generando un vacío hidrostático hermético interno que succiona el aire del ambiente incrementando la presión barométrica.",
                            "Disminuyendo el peso atómico del caucho por compresión de sus moléculas frente a la palma de la mano."
                        ],
                        correcta: 1,
                        explicacion: "Al invertir mecánicamente el casquete de goma, se introducen tensiones de flexión internas que almacenan energía potencial elástica lista para liberarse."
                    },
                    {
                        pregunta: "¿Cómo logra el popper saltar a una altura considerablemente mayor que la altura desde la cual fue soltado inicialmente?",
                        opciones: [
                            "Porque absorbe calor del aire circundante transformándolo instantáneamente en trabajo mecánico de propulsión vertical hacia arriba.",
                            "Porque al impactar contra el suelo, el casquete regresa violentamente a su forma original, liberando de forma explosiva la energía potencial elástica acumulada junto con la energía del impacto.",
                            "Gracias a un campo magnético residual en el suelo que repele violentamente al polímero sintético hacia la atmósfera superior.",
                            "Porque la inercia de rotación del giro de caída multiplica exponencialmente el vector de gravedad en el rebote exacto."
                        ],
                        correcta: 1,
                        explicacion: "Al chocar contra el piso, la energía potencial elástica almacenada por la inversión del casquete se libera de forma abrupta sumándose a la energía cinética del rebote, superando la altura de caída inicial."
                    }
                ]
            }
        ]
    },
    9: {
        introLab: "Esta sesión explora las propiedades cinemáticas y estáticas del centro de masa de sistemas rígidos e irregulares. Se examinarán las condiciones de estabilidad del equilibrio mecánico, la localización del baricentro mediante puntos de suspensión y el comportamiento dinámico de cuerpos asimétricos.",
        objGeneral: "Determinar experimentalmente la posición del centro de masa en objetos regulares e irregulares y analizar su vinculación directa con la estabilidad del equilibrio estático.",
        videos: [
            {
                id: "09-01",
                titulo: "09-01 Estabilidad",
                tema: "Equilibrio estable, inestable e indiferente en función de la línea de gravedad.",
                objetivoVideo: "Identificar los tipos de equilibrio mecánico analizando la posición del centro de masa respecto a la base de sustentación y al perturbar el sistema.",
                preguntas: [
                    {
                        pregunta: "¿Qué condición geométrica debe cumplir la proyección vertical del centro de masa respecto a la base de apoyo para que un cuerpo no vuelque?",
                        opciones: [
                            "Su proyección debe ser paralela al plano de apoyo independientemente de dónde descanse el sólido.",
                            "La línea de acción del peso (proyección vertical del centro de masa) debe caer obligatoriamente dentro de los límites de la base de sustentación o apoyo.",
                            "Debe situarse estrictamente en el punto de contacto más alto, maximizando la inercia rotacional del sólido.",
                            "Debe caer siempre en el borde externo de la base geométrica para mantener una reacción normal perpendicular."
                        ],
                        correcta: 1,
                        explicacion: "Para que un cuerpo permanezca en equilibrio estable sin volcar, la línea de acción de su peso debe pasar por dentro de su base de sustentación."
                    },
                    {
                        pregunta: "¿Cómo se define el equilibrio estable en términos de la variación de la energía potencial del centro de masa ante un desplazamiento infinitesimal?",
                        opciones: [
                            "Ante un pequeño desplazamiento, el centro de masa se eleva incrementando la energía potencial del sistema, y la gravedad genera un torque que tiende a regresarlo a su posición original de mínima energía.",
                            "El desplazamiento infinitesimal anula por completo la energía cinética, forzando un pozo de potencial asintótico.",
                            "La energía potencial permanece constante para cualquier desplazamiento angular debido a la conservación estricta.",
                            "El centro de masa desciende disminuyendo drásticamente su energía potencial, lo que acelera el volcamiento."
                        ],
                        correcta: 0,
                        explicacion: "En el equilibrio estable, cualquier desplazamiento eleva el centro de masa y aumenta la energía potencial, generando un torque restaurador."
                    }
                ]
            },
            {
                id: "09-02",
                titulo: "09-02 Centro de masa de un objeto irregular",
                tema: "Determinación geométrica experimental del baricentro por suspensión plomada.",
                objetivoVideo: "Localizar el centro de masa de una placa de geometría arbitraria mediante la intersección de líneas verticales trazadas desde puntos de pivote.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la vertical que pasa por el punto de suspensión contiene obligatoriamente al centro de masa del cuerpo suspendido libremente?",
                        opciones: [
                            "Porque la fuerza centrífuga de la suspensión elimina temporalmente las inercias transversales.",
                            "Porque en el punto de suspensión el peso del cuerpo se divide simétricamente por arrastre atmosférico.",
                            "Porque el cuerpo oscila y rota hasta alcanzar un equilibrio estable donde el torque neto es cero, lo cual se cumple exclusivamente cuando la fuerza de gravedad y la tensión están alineadas sobre la misma línea vertical.",
                            "Porque la plomada induce un campo giroscópico local que atrae al baricentro."
                        ],
                        correcta: 2,
                        explicacion: "En el equilibrio estático de suspensión, la línea de acción del peso y la tensión del pivote deben ser colineales para que el torque neto sea cero."
                    },
                    {
                        pregunta: "¿Cuántas líneas de plomada como mínimo se requieren trazar para fijar con certeza la posición del centro de masa en el plano bidimensional de un objeto irregular?",
                        opciones: [
                            "Se requieren al menos dos líneas de suspensión (desde puntos distintos); el centro de masa se localiza exactamente en la intersección geométrica de ambas plomadas.",
                            "Con una sola línea trazada es suficiente, siempre y cuando se asuma que el objeto posee un espesor regular.",
                            "Cuatro líneas ortogonales, debido a la necesidad de ubicar los cuatro cuadrantes del centroide.",
                            "Son indispensables como mínimo tres líneas que formen un triángulo de fuerzas para asegurar el equilibrio estático."
                        ],
                        correcta: 0,
                        explicacion: "La intersección de dos líneas de suspensión desde diferentes puntos de pivote determina un punto único: el centro de masa."
                    }
                ]
            },
            {
                id: "09-05",
                titulo: "09-05 Payaso en la cuerda floja",
                tema: "Estabilidad por descenso forzado del centro de masa por debajo del apoyo.",
                objetivoVideo: "Analizar cómo el uso de una barra curvada lastrada desciende el centro de masa total por debajo de la cuerda de apoyo, logrando equilibrio estable automático.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el sistema permanece estable sobre la cuerda incluso al oscilar lateralmente sin caer?",
                        opciones: [
                            "Porque las inercias giroscópicas de la barra curva repelen las caídas de lado.",
                            "Porque los brazos extendidos aumentan exponencialmente la inercia rotacional aerodinámica.",
                            "Porque el payaso se ubica en el centro exacto de la cuerda impidiendo vibraciones modales.",
                            "Porque el uso de los contrapesos prolongados logra que el centro de masa total del sistema descienda por debajo de la propia cuerda de apoyo, ubicando la carga en un estado natural de equilibrio estable."
                        ],
                        correcta: 3,
                        explicacion: "Al ubicar el centro de masa por debajo del punto de apoyo mediante la barra contrapesada, el sistema se comporta como un péndulo invertido estable."
                    },
                    {
                        pregunta: "¿Cómo cambia el torque restaurador gravitatorio cuando el centro de masa del conjunto se ubica por debajo del punto de contacto?",
                        opciones: [
                            "El torque restaurador se invierte obligando al sistema a dar un giro completo por inestabilidad de la normal.",
                            "Ante cualquier desviación lateral de la vertical, el peso genera un torque neto en la dirección opuesta al giro que obliga al centro de masa a regresar a su posición de reposo y mínima energía.",
                            "Al descender el baricentro, el torque gravitatorio se vuelve nulo provocando un equilibrio indiferente.",
                            "El torque incrementa la altura del sistema exponencialmente multiplicando la energía cinética."
                        ],
                        correcta: 1,
                        explicacion: "Cualquier inclinación lateral genera un torque restaurador dirigido hacia la posición de equilibrio, garantizando estabilidad."
                    }
                ]
            },
            {
                id: "09-06",
                titulo: "09-06 Cono doble en una pendiente",
                tema: "Movimiento aparente contra la pendiente y descenso real del centro de masa.",
                objetivoVideo: "Explicar la aparente paradoja de un cono doble que rueda cuesta arriba en una rampa divergente demostrando que su baricentro desciende.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el eje central del cono doble desciende verticalmente mientras el objeto avanza hacia el extremo más elevado de los rieles abiertos?",
                        opciones: [
                            "Porque la rotación de los ejes induce un empuje hacia adelante causado por el arrastre de fuerzas centrípetas.",
                            "Porque los ángulos cruzados de la pendiente obligan a la figura a ganar altitud inercial.",
                            "Debido a que la fricción cinética entre la madera y los rieles invierte artificialmente los vectores.",
                            "Porque los rieles se separan progresivamente o abren en forma de 'V', lo que permite que el perfil del doble cono encaje más profundamente y su centro de masas baje hacia el suelo por gravedad, aunque el armazón soporte parezca subir."
                        ],
                        correcta: 3,
                        explicacion: "Aunque el cuerpo ruede hacia una zona donde los rieles son más altos, la apertura en V hace que el radio de apoyo disminuya tanto que el centro de masa desciende en altura respecto al suelo."
                    },
                    {
                        pregunta: "¿Qué criterio energético determina la dirección espontánea del movimiento de cualquier sistema mecánico libre de restricciones externas?",
                        opciones: [
                            "La tendencia inercial espontánea exige mantener constante toda aceleración angular.",
                            "El sistema tiende espontáneamente a reorientarse, girar o trasladarse hacia aquella configuración que reduzca y minimice lo más posible su energía potencial total (descendiendo su centro de masa).",
                            "Los sistemas mecánicos puros buscan maximizar su energía cinética y potencial simultáneamente.",
                            "El criterio rector requiere disipar invariablemente todo su trabajo de avance lineal."
                        ],
                        correcta: 1,
                        explicacion: "Por los principios de la mecánica, los sistemas conservativos evolucionan espontáneamente hacia estados de mínima energía potencial."
                    }
                ]
            },
            {
                id: "09-07",
                titulo: "09-07 Disco cargado",
                tema: "Desplazamiento del centro de masa mediante distribución de masa asimétrica.",
                objetivoVideo: "Analizar la cinemática y las oscilaciones de un disco cuyo baricentro no coincide con su centro geométrico debido a una masa excéntrica interna.",
                preguntas: [
                    {
                        pregunta: "¿Qué tipo de oscilación realiza el disco cargado cuando se perturba ligeramente desde su posición de reposo más baja?",
                        opciones: [
                            "Desarrolla vibraciones torsionales microscópicas audibles que no varían su ubicación estática.",
                            "Presenta oscilaciones caóticas debido a que el peso desbalanceado rompe el momento simétrico.",
                            "Efectúa oscilaciones rotacionales armónicas (vaivén), análogas a las de un péndulo físico simple, dado que su masa excéntrica intenta recuperar su punto de energía mínima en la zona inferior.",
                            "Ninguna; la carga excéntrica detiene la figura, aplastando el perímetro contra la mesa."
                        ],
                        correcta: 2,
                        explicacion: "Al estar el centro de masa descentrado, el sistema actúa como un péndulo físico que oscila armónicamente alrededor de su punto de equilibrio estable."
                    },
                    {
                        pregunta: "¿Por qué el disco puede subir espontáneamente una ligera pendiente cuando la masa excéntrica se encuentra orientada estratégicamente?",
                        opciones: [
                            "Porque inicialmente la masa pesada excéntrica se ubica en la parte superior; al girar el disco rodando 'cuesta arriba', esa masa desciende más distancia de lo que el centro sube, logrando que el centro de masa total descienda globalmente según dicta la energía potencial.",
                            "Porque la asimetría le inyecta una rotación de avance infinito gracias a momentos angulares.",
                            "Porque el roce estático y la goma rugosa empujan en solitario a los átomos pesados en contra de la gravedad.",
                            "Porque al perder su simetría polar, el disco redondo engendra focos ficticios de repulsión gravitacional."
                        ],
                        correcta: 0,
                        explicacion: "El movimiento aparente cuesta arriba es posible porque el centro de masa global del sistema realmente desciende en altura gracias al giro de la masa excéntrica."
                    }
                ]
            },
            {
                id: "09-09",
                titulo: "09-09 Centro de masa en una mesa de aire",
                tema: "Cinemática del centro de masa en cuerpos rígidos en rotación y traslación libre.",
                objetivoVideo: "Observar la trayectoria rectilínea uniforme que describe el centro de masa de una llave o cuerpo asimétrico que gira sobre una mesa de aire.",
                preguntas: [
                    {
                        pregunta: "Cuando el objeto (o el sistema de masas) se lanza girando sobre la mesa de aire sin fricción, ¿cómo se mueve el punto específico que marca su centro de masa en comparación con el resto de la estructura?",
                        opciones: [
                            "El centro de masa traza un patrón de bucles y curvas cerradas, moviéndose de forma mucho más caótica.",
                            "El centro de masa avanza en una línea recta perfecta y constante, mientras que los demás puntos del objeto giran y se mueven de forma compleja a su alrededor.",
                            "El centro de masa es el único punto que interactúa con el aire, provocando que se detenga de golpe.",
                            "El centro de masa avanza dando rebotes en forma de zigzag."
                        ],
                        correcta: 1,
                        explicacion: "En ausencia de fuerzas externas netas, el centro de masa de un cuerpo en movimiento libre se desplaza en línea recta con velocidad constante."
                    },
                    {
                        pregunta: "¿Qué principio físico fundamental nos demuestra visualmente el movimiento rectilíneo del centro de masa en este experimento?",
                        opciones: [
                            "Que cualquier objeto que gira sobre sí mismo pierde su peso, levitando ligeramente.",
                            "Que las fuerzas centrífugas de los extremos siempre terminan cancelando la velocidad.",
                            "Que si no hay fuerzas externas (como la fricción), el centro de masa de un sistema se moverá con velocidad constante en línea recta, sin importar cómo giren o se muevan sus partes internas.",
                            "Que el centro de masa de un cuerpo en movimiento siempre se desplazará hacia el lado más pesado."
                        ],
                        correcta: 2,
                        explicacion: "Ilustra la primera ley de Newton aplicada al centro de masa de un sistema de partículas o cuerpo rígido libre."
                    }
                ]
            }
        ]
    }
};
