const bancoPreguntas = {
    1: {
        titulo: "Capítulo 1: Unidades y vectores",
        introduccion: "Esta sesión introduce los fundamentos metrológicos y el cálculo vectorial aplicados a la física experimental. Se trabajará con patrones de medida, magnitudes fundamentales y operaciones vectoriales gráficas y analíticas para la resolución cuantitativa de sistemas mecánicos en el laboratorio.",
        objetivoGeneral: "Comprender y aplicar los conceptos de sistemas de unidades y álgebra vectorial mediante montajes experimentales para modelar magnitudes físicas orientadas en dos y tres dimensiones.",
        videos: [
            {
                id: "01-01",
                titulo: "01-01 Unidades básicas",
                tema: "Sistemas de unidades y magnitudes fundamentales.",
                objetivoVideo: "Identificar las unidades fundamentales y comprender la importancia de los patrones universales de medida.",
                preguntas: [
                    {
                        pregunta: "¿Cuál es la principal finalidad de establecer patrones universales de medida?",
                        opciones: [
                            "Permitir que cada laboratorio utilice unidades diferentes según sus necesidades.",
                            "Garantizar la reproducibilidad, consistencia y comparación de las mediciones.",
                            "Eliminar la necesidad de utilizar instrumentos de medición.",
                            "Reemplazar las magnitudes fundamentales por magnitudes derivadas."
                        ],
                        correcta: 1,
                        explicacion: "Los patrones universales permiten que las mediciones sean reproducibles, consistentes y comparables entre distintos laboratorios."
                    },
                    {
                        pregunta: "¿Cómo se obtienen las unidades derivadas dentro de un sistema de unidades?",
                        opciones: [
                            "Mediante la combinación arbitraria de símbolos y valores numéricos.",
                            "A partir de unidades que no tienen relación con las magnitudes fundamentales.",
                            "Mediante combinaciones algebraicas de las unidades fundamentales.",
                            "Únicamente mediante la conversión de unidades de temperatura."
                        ],
                        correcta: 2,
                        explicacion: "Las unidades derivadas se forman mediante operaciones algebraicas con las unidades fundamentales, como ocurre con la velocidad y la aceleración."
                    }
                ]
            },
            {
                id: "01-02",
                titulo: "01-02 Suma de vectores (paralelogramo)",
                tema: "Suma gráfica de vectores mediante el método del paralelogramo.",
                objetivoVideo: "Determinar gráficamente la magnitud y dirección de la resultante de dos vectores.",
                preguntas: [
                    {
                        pregunta: "¿Qué sucede con la magnitud de la resultante de dos vectores cuando el ángulo entre ellos aumenta de 0° a 180°, manteniendo sus magnitudes constantes?",
                        opciones: [
                            "La resultante aumenta continuamente.",
                            "La resultante disminuye progresivamente.",
                            "La resultante permanece constante.",
                            "La resultante siempre es igual a cero."
                        ],
                        correcta: 1,
                        explicacion: "Cuando el ángulo aumenta de 0° a 180°, la magnitud de la resultante disminuye desde la suma de ambos vectores hasta la diferencia de sus magnitudes."
                    },
                    {
                        pregunta: "¿Qué sucede cuando dos vectores tienen la misma dirección y el mismo sentido?",
                        opciones: [
                            "La resultante es siempre cero.",
                            "La resultante es igual a la diferencia de sus magnitudes.",
                            "La resultante es perpendicular a ambos vectores.",
                            "La magnitud de la resultante es igual a la suma de las magnitudes de ambos vectores."
                        ],
                        correcta: 3,
                        explicacion: "Cuando dos vectores tienen la misma dirección y sentido, sus magnitudes se suman directamente."
                    }
                ]
            },
            {
                id: "01-03",
                titulo: "01-03 Suma de vectores (puntas con colas)",
                tema: "Suma gráfica de vectores mediante el método punta-cola.",
                objetivoVideo: "Aplicar el método punta-cola para obtener la resultante de varios vectores.",
                preguntas: [
                    {
                        pregunta: "¿Qué sucede con el vector resultante cuando se cambia el orden de los vectores en el método punta-cola?",
                        opciones: [
                            "La resultante cambia completamente de dirección.",
                            "La resultante permanece igual porque representa el mismo desplazamiento total.",
                            "La resultante se convierte en un vector nulo.",
                            "La resultante aumenta proporcionalmente al número de vectores."
                        ],
                        correcta: 1,
                        explicacion: "La suma vectorial es conmutativa, por lo que cambiar el orden de los vectores no modifica la resultante."
                    },
                    {
                        pregunta: "¿Qué significa que un polígono vectorial esté completamente cerrado?",
                        opciones: [
                            "Que todos los vectores tienen la misma magnitud.",
                            "Que todos los vectores son paralelos.",
                            "Que la resultante vectorial es cero.",
                            "Que todos los vectores tienen dirección vertical."
                        ],
                        correcta: 2,
                        explicacion: "Cuando el polígono vectorial se cierra, el desplazamiento total es nulo y, por tanto, la suma de los vectores es cero."
                    }
                ]
            },
            {
                id: "01-04",
                titulo: "01-04 Componentes de un vector",
                tema: "Descomposición de vectores en componentes rectangulares.",
                objetivoVideo: "Calcular las componentes horizontal y vertical de un vector mediante funciones trigonométricas.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se calculan las componentes de un vector de magnitud A que forma un ángulo θ con el eje horizontal positivo?",
                        opciones: [
                            "Ax = A sen θ; Ay = A cos θ.",
                            "Ax = A cos θ; Ay = A sen θ.",
                            "Ax = A tan θ; Ay = A cot θ.",
                            "Ax = A + cos θ; Ay = A + sen θ."
                        ],
                        correcta: 1,
                        explicacion: "La componente horizontal se obtiene con el coseno y la componente vertical con el seno del ángulo medido desde el eje horizontal positivo."
                    },
                    {
                        pregunta: "¿En qué cuadrante se encuentra un vector cuando sus componentes horizontal y vertical son negativas?",
                        opciones: [
                            "Primer cuadrante.",
                            "Segundo cuadrante.",
                            "Tercer cuadrante.",
                            "Cuarto cuadrante."
                        ],
                        correcta: 2,
                        explicacion: "Cuando ambas componentes son negativas, el vector se encuentra en el tercer cuadrante."
                    }
                ]
            },
            {
                id: "01-05",
                titulo: "01-05 Producto punto de vectores",
                tema: "Producto escalar entre vectores y su interpretación geométrica.",
                objetivoVideo: "Comprender y calcular el producto punto de dos vectores mediante sus magnitudes y el ángulo entre ellos.",
                preguntas: [
                    {
                        pregunta: "¿Cuál es el resultado del producto punto entre dos vectores perpendiculares?",
                        opciones: [
                            "Es igual al producto de sus magnitudes.",
                            "Es siempre positivo.",
                            "Es siempre negativo.",
                            "Es igual a cero."
                        ],
                        correcta: 3,
                        explicacion: "El producto punto se calcula como A·B = |A||B| cos θ. Si los vectores son perpendiculares, el coseno de 90° es cero."
                    },
                    {
                        pregunta: "¿Cómo se calcula el ángulo entre dos vectores cuando se conoce su producto punto?",
                        opciones: [
                            "θ = sen⁻¹[(A·B)/(|A||B|)].",
                            "θ = cos⁻¹[(A·B)/(|A||B|)].",
                            "θ = tan⁻¹[(A·B)/(|A||B|)].",
                            "θ = (A·B)(|A||B|)."
                        ],
                        correcta: 1,
                        explicacion: "El ángulo se obtiene despejando la expresión del producto punto: θ = cos⁻¹[(A·B)/(|A||B|)]."
                    }
                ]
            },
            {
                id: "01-06",
                titulo: "01-06 Producto cruz de vectores",
                tema: "Producto vectorial y su interpretación geométrica.",
                objetivoVideo: "Calcular el producto cruz de dos vectores y reconocer su dirección y magnitud.",
                preguntas: [
                    {
                        pregunta: "¿Qué propiedad cumple el producto cruz cuando se invierte el orden de los vectores?",
                        opciones: [
                            "A × B = −(B × A).",
                            "A × B = B × A.",
                            "A × B = A + B.",
                            "A × B = 0 en todos los casos."
                        ],
                        correcta: 0,
                        explicacion: "El producto cruz es anticonmutativo: al invertir el orden de los vectores, el resultado cambia de sentido."
                    },
                    {
                        pregunta: "¿Qué representa geométricamente la magnitud del producto cruz de dos vectores?",
                        opciones: [
                            "El volumen de un cubo.",
                            "La longitud de la diagonal de un rectángulo.",
                            "La distancia entre los extremos de los vectores.",
                            "El área del paralelogramo formado por ambos vectores."
                        ],
                        correcta: 3,
                        explicacion: "La magnitud del producto cruz es |A||B| sen θ, que representa el área del paralelogramo formado por los dos vectores."
                    }
                ]
            },
            {
                id: "01-07",
                titulo: "01-07 Componentes de vectores en 3 dimensiones",
                tema: "Descomposición de vectores en tres dimensiones.",
                objetivoVideo: "Identificar y analizar las componentes de un vector en los ejes coordenados X, Y y Z.",
                preguntas: []
            }
        ]
    },

    2: {
        titulo: "Capítulo 2: Cinemática lineal",
        introduccion: "El estudio del movimiento en una dimensión constituye la base de la mecánica clásica. En esta sesión de laboratorio analizaremos el movimiento rectilíneo uniforme (MRU) y el movimiento rectilíneo uniformemente acelerado (MRUA), contrastando el desplazamiento ideal con la caída libre de cuerpos bajo la acción de la aceleración gravitatoria.",
        objetivoGeneral: "Determinar experimentalmente las relaciones cinemáticas entre posición, velocidad y aceleración en movimientos unidimensionales para caracterizar el MRU y la aceleración uniforme producida por la gravedad.",
        videos: [
            {
                id: "02-01",
                titulo: "02-01 Velocidad constante",
                tema: "Movimiento rectilíneo uniforme y velocidad constante.",
                objetivoVideo: "Analizar la relación entre posición, tiempo y velocidad en un movimiento rectilíneo uniforme.",
                preguntas: [
                    {
                        pregunta: "¿Qué representa la pendiente de una gráfica posición-tiempo en un movimiento con velocidad constante?",
                        opciones: [
                            "La aceleración del objeto.",
                            "La distancia total recorrida.",
                            "La velocidad del objeto.",
                            "La fuerza neta aplicada."
                        ],
                        correcta: 2,
                        explicacion: "La pendiente de la gráfica posición-tiempo representa la velocidad del objeto."
                    },
                    {
                        pregunta: "¿Qué condición dinámica permite que un objeto mantenga una velocidad constante en línea recta?",
                        opciones: [
                            "Que exista una fuerza neta creciente.",
                            "Que la fuerza de gravedad sea siempre cero.",
                            "Que la fuerza aplicada sea mayor que la fricción.",
                            "Que la fuerza neta externa sea cero."
                        ],
                        correcta: 3,
                        explicacion: "De acuerdo con la primera ley de Newton, un objeto mantiene su velocidad constante cuando la fuerza neta que actúa sobre él es cero."
                    }
                ]
            },
            {
                id: "02-02",
                titulo: "02-02 Buldócer sobre una hoja en movimiento",
                tema: "Movimiento relativo y composición de velocidades.",
                objetivoVideo: "Comprender cómo se combinan las velocidades de distintos cuerpos según el sistema de referencia.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se calcula la velocidad relativa entre dos objetos que se desplazan en la misma línea recta y en el mismo sentido?",
                        opciones: [
                            "Mediante la suma algebraica de sus velocidades, considerando sus sentidos.",
                            "Mediante la multiplicación de ambas velocidades.",
                            "Mediante la división de la velocidad mayor entre la menor.",
                            "Mediante la suma de sus masas."
                        ],
                        correcta: 0,
                        explicacion: "Las velocidades relativas se combinan algebraicamente, considerando el sentido de cada movimiento."
                    },
                    {
                        pregunta: "¿Qué velocidad relativa observa un observador cuando dos objetos se desplazan con velocidades iguales en magnitud y opuestas en sentido?",
                        opciones: [
                            "El doble de la velocidad de cualquiera de los objetos.",
                            "Una velocidad infinita.",
                            "Una velocidad relativa igual a cero.",
                            "Una velocidad igual a la mitad de la velocidad inicial."
                        ],
                        correcta: 2,
                        explicacion: "Cuando las velocidades tienen igual magnitud y sentidos opuestos, la velocidad relativa entre los objetos puede ser cero según el sistema de referencia considerado."
                    }
                ]
            },
            {
                id: "02-03",
                titulo: "02-03 Plano inclinado con pelota que rueda",
                tema: "Movimiento acelerado sobre un plano inclinado.",
                objetivoVideo: "Analizar la influencia de la inclinación de una superficie sobre la aceleración de una pelota que rueda.",
                preguntas: [
                    {
                        pregunta: "¿Por qué una pelota rueda hacia abajo por un plano inclinado?",
                        opciones: [
                            "Porque la fuerza normal aumenta la gravedad.",
                            "Porque una componente del peso paralela al plano impulsa el movimiento.",
                            "Porque la fuerza de gravedad desaparece.",
                            "Porque la pelota no tiene inercia."
                        ],
                        correcta: 1,
                        explicacion: "El peso tiene una componente paralela al plano inclinado que impulsa el movimiento. La componente perpendicular es contrarrestada por la fuerza normal."
                    },
                    {
                        pregunta: "¿Qué sucede con la aceleración de una pelota sobre un plano inclinado cuando aumenta el ángulo de inclinación?",
                        opciones: [
                            "La aceleración siempre disminuye.",
                            "La aceleración permanece constante para cualquier ángulo.",
                            "La aceleración se vuelve cero.",
                            "La aceleración aumenta y, en el límite de 90°, se aproxima al comportamiento de caída libre ideal."
                        ],
                        correcta: 3,
                        explicacion: "Al aumentar la inclinación, aumenta la componente del peso paralela al plano. En el límite de 90°, el movimiento se aproxima a la caída libre, aunque la rotación influye en una pelota que rueda."
                    }
                ]
            },
            {
                id: "02-04",
                titulo: "02-04 Aceleración constante",
                tema: "Movimiento rectilíneo uniformemente acelerado.",
                objetivoVideo: "Comprobar las relaciones entre desplazamiento, velocidad, tiempo y aceleración constante.",
                preguntas: [
                    {
                        pregunta: "¿Qué relación existe entre las distancias recorridas durante intervalos de tiempo iguales por un objeto que parte del reposo con aceleración constante?",
                        opciones: [
                            "Las distancias son siempre iguales.",
                            "Las distancias disminuyen siguiendo una secuencia par.",
                            "Las distancias siguen una secuencia proporcional a 1, 3, 5, 7, etc.",
                            "Las distancias no dependen de la aceleración."
                        ],
                        correcta: 2,
                        explicacion: "Para un objeto que parte del reposo con aceleración constante, las distancias recorridas en intervalos iguales siguen la proporción de números impares consecutivos."
                    },
                    {
                        pregunta: "¿Cómo se obtiene la aceleración a partir de una gráfica velocidad-tiempo?",
                        opciones: [
                            "Mediante el área bajo la curva.",
                            "Mediante la pendiente de la gráfica.",
                            "Mediante la distancia inicial.",
                            "Mediante el producto de la velocidad por el tiempo."
                        ],
                        correcta: 1,
                        explicacion: "La aceleración es la variación de la velocidad respecto al tiempo y corresponde a la pendiente de la gráfica velocidad-tiempo."
                    }
                ]
            },
            {
                id: "02-05",
                titulo: "02-05 Caída de una cuerda con tuercas",
                tema: "",
                objetivoVideo: "",
                preguntas: []
            },
            {
                id: "02-06",
                titulo: "02-06 Tiempo de reacción a la caída de un metro",
                tema: "Caída libre y medición del tiempo de reacción.",
                objetivoVideo: "Determinar el tiempo de reacción de una persona mediante la distancia recorrida por una regla en caída libre.",
                preguntas: [
                    {
                        pregunta: "¿Qué expresión permite calcular el tiempo de caída libre de un objeto que parte del reposo desde una altura d?",
                        opciones: [
                            "t = √(2d/g).",
                            "t = d/g.",
                            "t = 2d/g.",
                            "t = √(g/2d)."
                        ],
                        correcta: 0,
                        explicacion: "A partir de la ecuación d = (1/2)gt², se despeja el tiempo y se obtiene t = √(2d/g)."
                    },
                    {
                        pregunta: "En condiciones ideales de caída libre, ¿el tiempo de caída de una regla depende de su masa?",
                        opciones: [
                            "Sí, cuanto mayor es la masa, mayor es el tiempo.",
                            "Sí, cuanto menor es la masa, menor es la gravedad.",
                            "Depende exclusivamente de la longitud de la regla.",
                            "No, porque todos los cuerpos tienen la misma aceleración gravitatoria ideal."
                        ],
                        correcta: 3,
                        explicacion: "En caída libre ideal, todos los cuerpos tienen la misma aceleración gravitatoria, independientemente de su masa."
                    }
                ]
            },
            {
                id: "02-07",
                titulo: "02-07 Guinea y pluma",
                tema: "Caída libre y resistencia del aire.",
                objetivoVideo: "Comparar la caída de objetos de distinta forma y masa en presencia y ausencia de resistencia del aire.",
                preguntas: [
                    {
                        pregunta: "¿Por qué una pluma cae más lentamente que un objeto compacto en presencia de aire?",
                        opciones: [
                            "Porque la resistencia del aire ejerce una fuerza que afecta considerablemente su movimiento.",
                            "Porque la gravedad no actúa sobre la pluma.",
                            "Porque la pluma tiene una masa gravitatoria negativa.",
                            "Porque la pluma no posee aceleración."
                        ],
                        correcta: 0,
                        explicacion: "La resistencia del aire afecta proporcionalmente más a la pluma debido a su forma y baja masa."
                    },
                    {
                        pregunta: "¿Qué sucede cuando una pluma y un objeto compacto se dejan caer simultáneamente en el vacío?",
                        opciones: [
                            "El objeto compacto llega primero.",
                            "La pluma llega primero.",
                            "Ambos caen con la misma aceleración y llegan al mismo tiempo.",
                            "Ambos permanecen suspendidos."
                        ],
                        correcta: 2,
                        explicacion: "En el vacío no existe resistencia del aire, por lo que ambos objetos caen con la misma aceleración gravitatoria."
                    }
                ]
            }
        ]
    },

    3: {
        titulo: "Capítulo 3: Dinámica lineal",
        introduccion: "Esta sesión aborda las leyes de Newton aplicadas a la dinámica traslacional. Se analizará la relación causal entre fuerza neta y aceleración, la respuesta de sistemas vinculados por cuerdas y poleas, la acción dinámica de resortes y el comportamiento inercial en marcos en caída libre.",
        objetivoGeneral: "Validar experimentalmente la segunda ley de Newton y la equivalencia dinámica en sistemas mecánicos lineales mediante montajes con fuerzas constantes y variables.",
        videos: [
            {
                id: "03-01",
                titulo: "03-01 Aceleración por una cuerda con clip",
                tema: "Relación entre fuerza, masa y aceleración.",
                objetivoVideo: "Comprobar experimentalmente la segunda ley de Newton mediante un sistema de tracción.",
                preguntas: [
                    {
                        pregunta: "¿Qué sucede con la aceleración de un objeto cuando se duplica la fuerza neta aplicada y su masa permanece constante?",
                        opciones: [
                            "La aceleración se reduce a la mitad.",
                            "La aceleración se duplica.",
                            "La aceleración permanece constante.",
                            "La aceleración se vuelve cero."
                        ],
                        correcta: 1,
                        explicacion: "Según la segunda ley de Newton, la aceleración es directamente proporcional a la fuerza neta cuando la masa permanece constante."
                    },
                    {
                        pregunta: "¿Qué sucede con la aceleración cuando aumenta la masa de un sistema y la fuerza neta permanece constante?",
                        opciones: [
                            "La aceleración aumenta.",
                            "La aceleración permanece constante.",
                            "La aceleración se vuelve infinita.",
                            "La aceleración disminuye."
                        ],
                        correcta: 3,
                        explicacion: "La aceleración es inversamente proporcional a la masa cuando la fuerza neta permanece constante."
                    }
                ]
            },
            {
                id: "03-02",
                titulo: "03-02 La máquina de Atwood",
                tema: "Dinámica de masas conectadas mediante una polea.",
                objetivoVideo: "Analizar la aceleración y la tensión en un sistema de dos masas conectadas por una cuerda.",
                preguntas: [
                    {
                        pregunta: "¿Qué sucede con la aceleración de una máquina de Atwood cuando aumenta la diferencia entre las masas, manteniendo constante la masa total?",
                        opciones: [
                            "La aceleración aumenta.",
                            "La aceleración disminuye.",
                            "La aceleración permanece constante.",
                            "La aceleración se vuelve cero."
                        ],
                        correcta: 0,
                        explicacion: "Al aumentar la diferencia entre las masas, aumenta la fuerza neta que impulsa el sistema y, por tanto, su aceleración."
                    },
                    {
                        pregunta: "En una máquina de Atwood ideal, ¿cómo se compara la tensión de la cuerda con el peso de la masa que desciende y el de la masa que asciende?",
                        opciones: [
                            "La tensión es mayor que ambos pesos.",
                            "La tensión es menor que ambos pesos.",
                            "La tensión es menor que el peso de la masa que desciende y mayor que el peso de la masa que asciende.",
                            "La tensión siempre es igual a ambos pesos."
                        ],
                        correcta: 2,
                        explicacion: "La masa que desciende acelera hacia abajo, por lo que su peso supera la tensión. La masa que asciende acelera hacia arriba, por lo que la tensión supera su peso."
                    }
                ]
            },
            {
                id: "03-03",
                titulo: "03-03 Aceleración por un resorte",
                tema: "Fuerza elástica y ley de Hooke.",
                objetivoVideo: "Estudiar la relación entre la deformación de un resorte y la aceleración de un cuerpo conectado a él.",
                preguntas: [
                    {
                        pregunta: "¿Qué sucede con la aceleración de un cuerpo unido a un resorte cuando este se va relajando?",
                        opciones: [
                            "La aceleración disminuye porque la fuerza restauradora depende de la elongación.",
                            "La aceleración aumenta indefinidamente.",
                            "La aceleración permanece siempre constante.",
                            "La aceleración no depende de la deformación del resorte."
                        ],
                        correcta: 0,
                        explicacion: "Según la ley de Hooke, la fuerza restauradora es proporcional a la elongación. Al disminuir la elongación, disminuyen la fuerza y la aceleración."
                    },
                    {
                        pregunta: "¿En qué posición alcanza su velocidad máxima un cuerpo que oscila unido a un resorte ideal?",
                        opciones: [
                            "En la máxima elongación.",
                            "En la posición de equilibrio, donde el resorte tiene fuerza neta restauradora nula.",
                            "En el punto donde el resorte alcanza su máxima compresión.",
                            "En cualquier posición, porque la velocidad es constante."
                        ],
                        correcta: 1,
                        explicacion: "En la posición de equilibrio la fuerza restauradora es cero y la rapidez del oscilador alcanza su valor máximo."
                    }
                ]
            },
            {
                id: "03-04",
                titulo: "03-04 Slinky que cae",
                tema: "Propagación de perturbaciones y caída libre.",
                objetivoVideo: "Observar el comportamiento de un resorte extendido cuando se suelta y comienza a caer.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el extremo inferior de un Slinky puede permanecer momentáneamente casi inmóvil después de soltar el extremo superior?",
                        opciones: [
                            "Porque la gravedad deja de actuar sobre el extremo inferior.",
                            "Porque el extremo inferior está fijado al suelo.",
                            "Porque la perturbación de relajación del resorte todavía no ha llegado al extremo inferior.",
                            "Porque el resorte pierde completamente su masa."
                        ],
                        correcta: 2,
                        explicacion: "La información sobre la liberación del extremo superior se propaga a lo largo del resorte. Hasta que la perturbación llega, el extremo inferior puede permanecer momentáneamente casi inmóvil."
                    },
                    {
                        pregunta: "¿Cómo se mueve el centro de masa de un Slinky cuando cae libremente?",
                        opciones: [
                            "Con la aceleración gravitatoria, como cualquier cuerpo en caída libre ideal.",
                            "Con aceleración igual a cero durante toda la caída.",
                            "Con una aceleración opuesta a la gravedad.",
                            "Con una velocidad necesariamente constante."
                        ],
                        correcta: 0,
                        explicacion: "El centro de masa de un sistema en caída libre se acelera por la gravedad, independientemente de las fuerzas internas del resorte."
                    }
                ]
            },
            {
                id: "03-05",
                titulo: "03-05 Vela en un frasco que cae",
                tema: "Gravedad aparente, flotabilidad y convección.",
                objetivoVideo: "Observar los efectos de la caída libre sobre la forma de la llama y los procesos de convección.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la llama de una vela cambia de forma cuando el frasco que la contiene se encuentra en caída libre?",
                        opciones: [
                            "Porque la temperatura de la llama desaparece.",
                            "Porque la gravedad aumenta considerablemente.",
                            "Porque el oxígeno deja de existir dentro del frasco.",
                            "Porque la microgravedad aparente reduce la flotabilidad y la convección natural, modificando la forma de la llama."
                        ],
                        correcta: 3,
                        explicacion: "Durante la caída libre, la flotabilidad y la convección natural se reducen considerablemente, por lo que la llama puede adoptar una forma más esférica y su combustión puede alterarse."
                    },
                    {
                        pregunta: "¿Qué fenómeno explica la reducción de la convección natural durante la caída libre?",
                        opciones: [
                            "La desaparición de la masa del aire.",
                            "La reducción de la flotabilidad debido a la ausencia de gravedad aparente.",
                            "El aumento de la presión atmosférica.",
                            "La desaparición de la energía térmica."
                        ],
                        correcta: 1,
                        explicacion: "La convección natural depende de diferencias de densidad y de la flotabilidad gravitatoria. En caída libre, la gravedad aparente se reduce y la convección natural disminuye."
                    }
                ]
            }
        ]
    },

    4: {
        titulo: "Capítulo 4: Movimiento en un plano",
        introduccion: "Esta sesión experimental explora la cinemática y dinámica bidimensional, enfocándose en la independencia de movimientos ortogonales, el lanzamiento de proyectiles y el análisis de trayectorias parabólicas en sistemas inerciales y acelerados.",
        objetivoGeneral: "Analizar la cinemática en dos dimensiones mediante montajes de proyectiles y colisiones parabólicas para verificar el principio de independencia de movimientos de Galileo.",
        videos: [
            {
                id: "04-01",
                titulo: "04-01 Disparo/caída",
                tema: "Independencia de los movimientos horizontal y vertical.",
                objetivoVideo: "Comprobar que dos cuerpos que parten de la misma altura llegan al suelo simultáneamente cuando uno se lanza horizontalmente y el otro se deja caer.",
                preguntas: [
                    {
                        pregunta: "¿Por qué dos objetos que parten de la misma altura, uno lanzado horizontalmente y otro dejado caer, llegan al suelo al mismo tiempo?",
                        opciones: [
                            "Porque ambos tienen la misma velocidad horizontal.",
                            "Porque sus movimientos verticales son independientes y parten con la misma velocidad vertical inicial y aceleración gravitatoria.",
                            "Porque el objeto lanzado horizontalmente pierde toda su velocidad.",
                            "Porque la gravedad actúa únicamente sobre el objeto que se deja caer."
                        ],
                        correcta: 1,
                        explicacion: "El movimiento horizontal no modifica el movimiento vertical. Ambos objetos tienen la misma condición vertical inicial y la misma aceleración gravitatoria."
                    },
                    {
                        pregunta: "¿Qué efecto tiene la velocidad horizontal inicial sobre la aceleración vertical de un proyectil?",
                        opciones: [
                            "La aumenta proporcionalmente.",
                            "La reduce a la mitad.",
                            "La convierte en cero.",
                            "No la modifica; la aceleración vertical depende de la gravedad."
                        ],
                        correcta: 3,
                        explicacion: "La componente horizontal de la velocidad no afecta la aceleración vertical, que está determinada por la gravedad."
                    }
                ]
            },
            {
                id: "04-02",
                titulo: "04-02 Cañón contra monos",
                tema: "Movimiento parabólico y caída simultánea de proyectiles.",
                objetivoVideo: "Demostrar la independencia del movimiento vertical en un proyectil y un objeto que cae simultáneamente.",
                preguntas: [
                    {
                        pregunta: "¿Por qué un proyectil dirigido hacia un objeto que comienza a caer simultáneamente puede alcanzarlo?",
                        opciones: [
                            "Porque el proyectil deja de estar sometido a la gravedad.",
                            "Porque el objeto que cae permanece inmóvil verticalmente.",
                            "Porque ambos experimentan el mismo desplazamiento vertical debido a la gravedad durante el mismo intervalo de tiempo.",
                            "Porque la velocidad horizontal del objeto que cae aumenta."
                        ],
                        correcta: 2,
                        explicacion: "Tanto el proyectil como el objeto que cae experimentan la misma aceleración gravitatoria y el mismo desplazamiento vertical durante el tiempo transcurrido."
                    },
                    {
                        pregunta: "Si se aumenta la velocidad inicial del proyectil y se mantiene la misma dirección de lanzamiento, ¿qué ocurre con el tiempo de vuelo y la caída vertical antes del impacto?",
                        opciones: [
                            "El tiempo de vuelo disminuye y el proyectil cae menos verticalmente antes del impacto.",
                            "El tiempo de vuelo aumenta y el proyectil cae más.",
                            "El tiempo de vuelo permanece constante para cualquier velocidad.",
                            "El proyectil deja de experimentar aceleración gravitatoria."
                        ],
                        correcta: 0,
                        explicacion: "Al aumentar la velocidad inicial, el proyectil alcanza al objetivo en menos tiempo; por ello, ambos han descendido menos verticalmente antes del encuentro."
                    }
                ]
            },
            {
                id: "04-03",
                titulo: "04-03 Cañón vertical sobre un carro",
                tema: "Movimiento relativo y conservación de la velocidad horizontal.",
                objetivoVideo: "Analizar el movimiento de un proyectil lanzado verticalmente desde un vehículo en movimiento uniforme.",
                preguntas: [
                    {
                        pregunta: "¿Por qué una pelota lanzada verticalmente desde un carro en movimiento uniforme regresa al cañón?",
                        opciones: [
                            "Porque la gravedad aumenta la velocidad horizontal.",
                            "Porque la pelota conserva la velocidad horizontal del carro durante el vuelo, al no existir una fuerza horizontal neta significativa.",
                            "Porque el carro se detiene durante el lanzamiento.",
                            "Porque la pelota pierde completamente su velocidad horizontal."
                        ],
                        correcta: 1,
                        explicacion: "Por inercia, la pelota conserva la velocidad horizontal que tenía antes de ser lanzada, por lo que permanece alineada con el carro."
                    },
                    {
                        pregunta: "¿Cómo se observa la trayectoria de la pelota desde el laboratorio y desde el sistema de referencia del carro que se mueve con velocidad constante?",
                        opciones: [
                            "Es una línea horizontal en ambos sistemas.",
                            "Es una línea vertical en ambos sistemas.",
                            "Es una parábola desde el laboratorio y una línea vertical desde el carro.",
                            "Es una parábola en ambos sistemas."
                        ],
                        correcta: 2,
                        explicacion: "Desde el laboratorio se observa el movimiento horizontal y vertical, formando una parábola. Desde el carro, la pelota se mueve verticalmente."
                    }
                ]
            },
            {
                id: "04-04",
                titulo: "04-04 Cañón vertical sobre un carro acelerado",
                tema: "Movimiento relativo en sistemas de referencia acelerados.",
                objetivoVideo: "Observar cómo la aceleración de un vehículo modifica la posición relativa de un proyectil lanzado verticalmente.",
                preguntas: [
                    {
                        pregunta: "¿Por qué una pelota lanzada verticalmente desde un carro que acelera puede no regresar al cañón?",
                        opciones: [
                            "Porque la pelota pierde su masa durante el vuelo.",
                            "Porque la gravedad deja de actuar sobre la pelota.",
                            "Porque la pelota conserva inicialmente su velocidad horizontal mientras el carro aumenta su velocidad y se adelanta.",
                            "Porque la pelota adquiere una aceleración vertical hacia arriba."
                        ],
                        correcta: 2,
                        explicacion: "La pelota conserva su velocidad horizontal inicial, mientras que el carro acelera y se desplaza hacia adelante respecto a ella."
                    },
                    {
                        pregunta: "¿Qué sucede si el carro frena después de lanzar verticalmente la pelota?",
                        opciones: [
                            "La pelota se queda suspendida en el aire.",
                            "La pelota pierde su velocidad vertical.",
                            "La pelota regresa automáticamente al cañón.",
                            "La pelota puede caer por delante del carro porque conserva una velocidad horizontal mayor que la del vehículo que frena."
                        ],
                        correcta: 3,
                        explicacion: "La pelota conserva aproximadamente su velocidad horizontal inicial mientras el carro reduce la suya, por lo que puede quedar adelantada respecto al cañón."
                    }
                ]
            },
            {
                id: "04-05",
                titulo: "04-05 Parábolas en una mesa de aire",
                tema: "Movimiento bidimensional sobre una superficie inclinada.",
                objetivoVideo: "Analizar las componentes del movimiento de un objeto sobre una mesa de aire inclinada.",
                preguntas: [
                    {
                        pregunta: "¿Qué componente de la gravedad produce la aceleración de un objeto que se desplaza sobre una superficie inclinada?",
                        opciones: [
                            "La componente paralela al plano, equivalente a g sen θ.",
                            "La componente perpendicular al plano, equivalente a g cos θ.",
                            "La gravedad completa en dirección horizontal.",
                            "Una componente independiente del ángulo de inclinación."
                        ],
                        correcta: 0,
                        explicacion: "La componente de la gravedad paralela al plano inclinado es g sen θ y produce la aceleración sobre la superficie."
                    },
                    {
                        pregunta: "En el movimiento sobre una mesa de aire inclinada, ¿qué sucede con la componente de velocidad perpendicular a la dirección de máxima pendiente, suponiendo que no existe fuerza neta en esa dirección?",
                        opciones: [
                            "Aumenta constantemente.",
                            "Permanece constante.",
                            "Disminuye hasta cero.",
                            "Se convierte en aceleración gravitatoria."
                        ],
                        correcta: 1,
                        explicacion: "Si no existe fuerza neta en esa dirección, la velocidad perpendicular a la pendiente permanece constante."
                    }
                ]
            },
            {
                id: "04-06",
                titulo: "04-06 Cañón de alcance variable",
                tema: "Alcance horizontal de proyectiles y ángulo de lanzamiento.",
                objetivoVideo: "Determinar cómo influye el ángulo de lanzamiento en el alcance horizontal de un proyectil.",
                preguntas: [
                    {
                        pregunta: "¿Por qué dos proyectiles lanzados con ángulos complementarios, como 30° y 60°, pueden alcanzar la misma distancia horizontal si parten con la misma rapidez y desde la misma altura?",
                        opciones: [
                            "Porque ambos tienen exactamente la misma velocidad vertical.",
                            "Porque ambos permanecen el mismo tiempo en el aire.",
                            "Porque la gravedad es diferente para cada ángulo.",
                            "Porque los ángulos complementarios producen el mismo valor de sen(2θ), generando el mismo alcance ideal."
                        ],
                        correcta: 3,
                        explicacion: "La fórmula del alcance es R = (v₀² sen 2θ)/g. Los ángulos complementarios tienen el mismo valor de sen(2θ)."
                    },
                    {
                        pregunta: "¿Qué ángulo de lanzamiento produce el alcance horizontal máximo en condiciones ideales, cuando el proyectil parte y llega a la misma altura?",
                        opciones: [
                            "30°.",
                            "60°.",
                            "45°.",
                            "90°."
                        ],
                        correcta: 2,
                        explicacion: "El alcance es máximo a 45°, porque sen(2θ) alcanza su valor máximo de 1 cuando 2θ = 90°."
                    }
                ]
            },
            {
                id: "04-07",
                titulo: "04-07 Suma vectorial de velocidades",
                tema: "",
                objetivoVideo: "",
                preguntas: []
            },
            {
                id: "04-08",
                titulo: "04-08 Buldócer sobre una hoja en movimiento 2 dimensiones",
                tema: "",
                objetivoVideo: "",
                preguntas: []
            },
            {
                id: "04-09",
                titulo: "04-09 Pesas que se deslizan en un triángulo",
                tema: "",
                objetivoVideo: "",
                preguntas: []
            },
            {
                id: "04-10",
                titulo: "04-10 Navegando contra el viento",
                tema: "",
                objetivoVideo: "",
                preguntas: []
            },
            {
                id: "04-11",
                titulo: "04-11 Vertical local con aceleración",
                tema: "",
                objetivoVideo: "",
                preguntas: []
            }
        ]
    },

    5: {
        titulo: "Capítulo 5: Inercia",
        introduccion: "Esta sesión de laboratorio se centra en la primera ley de Newton: el principio de inercia. Se examinarán sistemas en movimiento relativo y cuerpos sometidos a perturbaciones súbitas para evidenciar cómo la masa mide cuantitativamente la resistencia de un cuerpo a modificar su estado de reposo o movimiento rectilíneo uniforme.",
        objetivoGeneral: "Evidenciar de forma práctica la manifestación de la inercia mecánica en cuerpos en reposo y en movimiento para consolidar la primera ley del movimiento de Newton.",
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
                        explicacion: "La ausencia de fricción mecánica impide que el movimiento del riel transfiera una fuerza horizontal al deslizador. Por ello, conserva su estado inicial de reposo."
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
                        explicacion: "La primera ley de Newton establece que, si la fuerza neta sobre un cuerpo es cero, este mantiene su estado de reposo o movimiento rectilíneo uniforme."
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
                        pregunta: "¿Cómo influye la masa inercial del cilindro en la fuerza requerida para provocar un cambio súbito en su velocidad de traslación?",
                        opciones: [
                            "A mayor masa inercial, mayor es la fuerza externa necesaria que se debe aplicar sobre el objeto para lograr provocar esa misma aceleración o cambio de estado.",
                            "La magnitud de la fuerza requerida disminuye progresivamente si el cilindro tiene mucha masa, ya que el momento intrínseco de esta favorece el movimiento espontáneo.",
                            "No existe ninguna influencia medible de la masa, pues la fuerza requerida para la traslación depende exclusivamente del coeficiente de contacto de rodadura.",
                            "A mayor masa, la fuerza disminuye drásticamente porque la alta energía de cohesión atómica rompe más fácilmente la resistencia del reposo absoluto."
                        ],
                        correcta: 0,
                        explicacion: "Según la segunda ley de Newton, para producir la misma aceleración, un cuerpo de mayor masa requiere una fuerza neta mayor."
                    },
                    {
                        pregunta: "¿Qué diferencia práctica se observa entre la inercia traslacional de un cuerpo y su resistencia a ser puesto en rotación?",
                        opciones: [
                            "La inercia traslacional depende principalmente del volumen geométrico del objeto, mientras que su inercia rotacional depende únicamente del peso en la balanza.",
                            "Ambas respuestas mecánicas son idénticas en la práctica empírica, ya que cilindros macizos y huecos de masas iguales resisten por igual tanto los empujes como los giros.",
                            "La inercia de traslación depende únicamente de la masa total; en cambio, su resistencia a rotar depende tanto de la masa como de la forma en que esta se distribuye respecto a su eje.",
                            "La resistencia rotacional es un efecto ilusorio que solo aparece a altas velocidades angulares límite, mientras que la traslacional siempre afecta al cuerpo inmóvil."
                        ],
                        correcta: 2,
                        explicacion: "La inercia traslacional depende de la masa total, mientras que el momento de inercia rotacional también depende de cómo se distribuye la masa respecto al eje de giro."
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
                        pregunta: "¿Por qué una roca ficticia de hule espuma transmite una fuerza de impacto mínima a pesar de su gran tamaño aparente?",
                        opciones: [
                            "Porque su enorme envolvente visual exacerba la resistencia aerodinámica logrando frenarla por completo antes del roce efectivo.",
                            "Porque en la dinámica de colisiones, la fuerza del impacto depende enteramente de la aceleración y de la masa inercial real del cuerpo, pero en ningún momento de su volumen físico.",
                            "Porque el polímero sintético del hule espuma adolece de fricción de contacto, imposibilitando la transferencia del vector energía cinética.",
                            "Porque al incrementar su estructura dimensional el cuerpo es capaz de fraccionar e invertir los embates de la gravedad cancelando los torques internos."
                        ],
                        correcta: 1,
                        explicacion: "La masa inercial, junto con la aceleración, determina la fuerza mediante la segunda ley de Newton. El tamaño o apariencia externa no determina por sí solo la fuerza de impacto."
                    },
                    {
                        pregunta: "¿Cómo se define físicamente la masa inercial a partir del cociente entre la fuerza aplicada y la aceleración resultante?",
                        opciones: [
                            "Como una variable en constante degradación cinemática a medida que las aceleraciones del bloque tienden al valor referencial de la gravedad terrestre.",
                            "Como una proporción matemática abstracta que dicta qué tanta temperatura se generará superficialmente por causa del roce acelerado.",
                            "Como la constante de proporcionalidad que evalúa cuantitativamente qué tanta resistencia opone un cuerpo al tratar de que se le modifique su velocidad actual.",
                            "Como la simple derivación fraccional que se obtiene al contrastar numéricamente el peso baricéntrico del objetivo con la sustentación normal del experimento."
                        ],
                        correcta: 2,
                        explicacion: "La masa inercial es la medida de la resistencia de un cuerpo a cambiar su estado de movimiento. Se obtiene mediante la relación m = F/a cuando se considera la fuerza neta."
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
                        explicacion: "El impulso es el producto de la fuerza por el intervalo de tiempo durante el cual actúa. Un tirón rápido reduce el tiempo de interacción y, por tanto, el impulso transferido a la vajilla."
                    },
                    {
                        pregunta: "¿Qué sucedería con la vajilla si el mantel se retira lentamente y cómo influye el coeficiente de fricción estática?",
                        opciones: [
                            "La vajilla se trasladaría invariablemente a cuestas del mantel, dado que, sin tirones, la fricción estática se conserva y cuenta con tiempo suficiente para dotarla de esa misma aceleración.",
                            "Las piezas rodarían anárquicamente en diversas orientaciones debido a la falta de armonía y a los torques originados por el deslizamiento seco.",
                            "Se quedaría inmóvil con total certidumbre, porque a ritmos bajos el poder de retención inercial que ostentan los cuerpos opaca todo coeficiente de superficie.",
                            "La fricción estática experimentaría una falla de fatiga inminente causando que las unidades de vidrio se despeguen levitando levemente del recubrimiento textil."
                        ],
                        correcta: 0,
                        explicacion: "Al retirar lentamente el mantel, la fricción estática puede transmitir aceleración a la vajilla y hacer que se desplace junto con él."
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
                        explicacion: "Al retirar rápidamente el soporte, se transmite muy poco impulso horizontal a los huevos. Por ello, conservan aproximadamente su estado de reposo horizontal."
                    },
                    {
                        pregunta: "¿Por qué los huevos caen verticalmente directo dentro de los vasos de agua en lugar de seguir la trayectoria del plato?",
                        opciones: [
                            "Porque la primera ley preserva estático su estado horizontal primitivo, y en el instante en que sus bases desaparecen, solo la constante aceleración de la gravedad asume el control obligándolos a hundirse hacia abajo.",
                            "Porque los enlaces intermoleculares polares del agua provocan fuerzas invisibles de succión hidrostática enfocadas sobre el material calcáreo de los huevos.",
                            "Porque la fuerza de la percusión entrega componentes rotacionales cruzadas que nulifican definitivamente los vectores de vuelo en parábola para todo el grupo.",
                            "Porque las corrientes de vacío generadas al escapar raudamente los tubos plásticos obran como anclas neumáticas forzándolos a ignorar sus tendencias inerciales clásicas."
                        ],
                        correcta: 0,
                        explicacion: "Los huevos conservan su posición horizontal inicial debido a la inercia. Al desaparecer el soporte, la gravedad provoca su caída vertical."
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
                        explicacion: "El impacto rápido concentra el esfuerzo en una región pequeña de la madera. La resistencia del material a responder globalmente durante el breve impacto favorece la penetración local."
                    },
                    {
                        pregunta: "¿Cómo se relaciona el tiempo característico de respuesta inercial de la madera con la concentración del esfuerzo de corte?",
                        opciones: [
                            "Si la agresión ocurre de forma más vertiginosa que el margen inercial necesario para propagar la fuerza y hacer retroceder el madero, dicha fuerza no alcanza a disiparse; se condensa agudamente y termina superando la tolerancia de fractura de ese pequeñísimo punto local.",
                            "Realmente se descarta cualquier rol para la variable inercial del tiempo; el agujero resulta única y exclusivamente factible si el coeficiente elástico del invasor puntudo supera holgadamente a la fibra estacionaria.",
                            "Una ventana temporal amplia es garantía suficiente para generar el clímax destructivo instantáneo causando rebotes elásticos impecables que devuelven la flecha sin ocasionar mella a la cubierta de madera sólida.",
                            "Las dos magnitudes obedecen una relación inversa del orden del cuadrado de los espesores, indicando inequívocamente que únicamente tablones con gran masa logran absorber con tiempo y en su totalidad este impacto mortal."
                        ],
                        correcta: 0,
                        explicacion: "Cuando el impacto ocurre en un tiempo muy corto, la fuerza se concentra en una zona pequeña antes de que la respuesta mecánica se propague por toda la madera, pudiendo superar localmente su resistencia."
                    }
                ]
            }
        ]
    },
    6: {
        titulo: "Capítulo 6: Acción y reacción",
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
                id: "06-06",
                titulo: "06-06 Cohete de agua",
                tema: "Analizar.",
                objetivoVideo: "",
               preguntas: []
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
        titulo: "Capítulo 7: Fricción",
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
        titulo: "Capítulo 8: Trabajo,energía y potencia",
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
        titulo: "Capítulo 9: Centro de masa",
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
                id: "09-03",
                titulo: "09-03 Centro de masa de un disco",
                tema: "",
                objetivoVideo: "",
                preguntas: []
            },
            {
                id: "09-04",
                titulo: "09-04 Silla en un pedestal",
                tema: "",
                objetivoVideo: "",
                preguntas: []
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
                id: "09-08",
                titulo: "09-08 Cilindros que caen",
                tema: "",
                objetivoVideo: "",
                preguntas: []
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
    },
    10: {
        titulo: "Capítulo 10: Estática",
        introduccion: "Esta sesión de laboratorio se dedica al análisis riguroso de las dos condiciones de equilibrio de los cuerpos rígidos: el equilibrio traslacional (suma de fuerzas igual a cero) y el equilibrio rotacional (suma de torques igual a cero). A través de tableros de fuerzas, máquinas simples, palancas y sistemas articulados, se comprobarán experimentalmente las ecuaciones vectoriales de la estática.",
        objetivoGeneral: "Analizar experimentalmente las condiciones fundamentales del equilibrio estático de partículas y cuerpos rígidos mediante montajes prácticos de fuerzas concurrentes, torques y máquinas simples.",
        videos: [
            {
                id: "10-01",
                titulo: "10-01 Tablero de fuerzas",
                tema: "Equilibrio traslacional de fuerzas coplanares concurrentes.",
                objetivoVideo: "Demostrar experimentalmente la condición de equilibrio estático mediante la anulación vectorial de las tensiones concurrentes sobre un anillo central.",
                preguntas: [
                    {
                        pregunta: "¿Qué condición vectorial y matemática debe satisfacer la suma de tensiones para que el anillo central permanezca en reposo absoluto?",
                        opciones: [
                            "Todas las tensiones aplicadas deben ser de magnitud exactamente idéntica y mantener una separación angular simétrica perfecta.",
                            "La suma vectorial de todas las fuerzas o tensiones coplanares aplicadas sobre el anillo debe ser estrictamente igual al vector nulo.",
                            "El producto cruz de las componentes espaciales de la fuerza resultante debe igualar al peso absoluto total del anillo metálico central.",
                            "La sumatoria aritmética o escalar de los valores numéricos de cada hilo debe resultar cero para satisfacer el estado estático inercial plano."
                        ],
                        correcta: 1,
                        explicacion: "La primera condición de equilibrio estático establece que la resultante de todas las fuerzas concurrentes aplicadas sobre un cuerpo debe ser cero."
                    },
                    {
                        pregunta: "¿Cómo se redistribuyen las componentes ortogonales de tensión si se altera la posición angular de una de las poleas en el tablero?",
                        opciones: [
                            "Se modifican las proyecciones ortogonales (seno y coseno) de esa tensión en los ejes, lo que rompe el equilibrio y obliga a reajustar las demás fuerzas o ángulos para volver a sumar cero.",
                            "Las componentes se mantienen constantes siempre que la masa colgada no varíe, ya que la tensión de la cuerda es inmune a las modificaciones de su orientación direccional.",
                            "La componente ortogonal de mayor magnitud absorbe todo el peso, anulando instantáneamente a las poleas restantes de acuerdo al principio rotacional de superposición.",
                            "El cambio de ángulo invierte los signos de todas las proyecciones trasladando el baricentro asimétrico del anillo hasta que impacta los bordes metálicos de contención."
                        ],
                        correcta: 0,
                        explicacion: "Al cambiar el ángulo, las componentes rectangulares cambian de valor, alterando el equilibrio vectorial y requiriendo un nuevo ajuste para restablecer la nulidad de la fuerza neta."
                    }
                ]
            },
            {
                id: "10-02",
                titulo: "10-02 Tendedero",
                tema: "Tensión en cuerdas y componentes de fuerza",
                objetivoVideo: "Analizar la distribución de fuerzas y tensiones en un sistema de cuerda inclinada.",
                preguntas: []
            },
            {
                id: "10-03",
                titulo: "10-03 Carro en un plano inclinado removible",
                tema: "Componentes del peso en plano inclinado",
                objetivoVideo: "Estudiar el equilibrio de fuerzas en cuerpos sobre superficies inclinadas.",
                preguntas: []
            },
            {
                id: "10-04",
                titulo: "10-04 Ventaja de una polea",
                tema: "Ventaja mecánica y distribución de cargas en sistemas de poleas fijas y móviles.",
                objetivoVideo: "Medir cuantitativamente la reducción en la fuerza de tracción requerida para sostener una carga pesada mediante arreglos de poleas.",
                preguntas: [
                    {
                        pregunta: "¿Cuál es la ventaja mecánica ideal de una polea móvil individual en comparación con una polea fija de soporte?",
                        opciones: [
                            "Ambas poleas exhiben la misma ventaja mecánica, ya que operan bajo tensiones idénticas sin alterar perfiles de fuerza en reposo estático prolongado.",
                            "La polea móvil ideal divide a la mitad la fuerza de tracción necesaria para sostener la carga (ventaja mecánica de 2), mientras que la polea fija únicamente invierte la dirección de la fuerza aplicada (ventaja mecánica de 1).",
                            "La polea móvil elimina la aceleración de la gravedad, reduciendo el esfuerzo a un valor infinitesimal no disipativo sobre los rodajes de tracción.",
                            "La polea fija multiplica la fuerza de entrada por el cuadrado del espesor del hilo, superando contundentemente a la móvil en capacidades elevadoras."
                        ],
                        correcta: 1,
                        explicacion: "La polea fija solo cambia la dirección de la fuerza (VM = 1), mientras que la polea móvil distribuye el peso en dos segmentos de cuerda, reduciendo la fuerza a la mitad (VM = 2)."
                    },
                    {
                        pregunta: "¿Cómo se relaciona la disminución en la fuerza aplicada con el aumento en la longitud de cuerda que debe ser recogida para elevar la carga?",
                        opciones: [
                            "Actúan de forma totalmente aleatoria, ya que en el mundo de las poleas reales se transgrede frecuentemente el teorema unificado inercial del movimiento.",
                            "Muestran una proporcionalidad de origen térmico donde la cuerda cede y se alarga asintóticamente absorbiendo el estrés mecánico traccional aplicado longitudinalmente.",
                            "Según el principio de conservación del trabajo y la energía mecánica, al reducir a la mitad la fuerza necesaria para elevar una carga, el operario debe recoger forzosamente el doble de distancia de cuerda.",
                            "Al exigir menos tracción manual a lo largo de las poleas, la cuerda se contrae y reduce consecuentemente el metraje recogido debido a las holguras en la línea elástica."
                        ],
                        correcta: 2,
                        explicacion: "Por conservación de la energía, el trabajo se mantiene constante. Si la fuerza se reduce a la mitad, la distancia de tracción debe duplicarse."
                    }
                ]
            },
            {
                id: "10-05",
                titulo: "10-05 Polea y dinamómetro",
                tema: "Medición de tensión en sistemas de poleas",
                objetivoVideo: "Determinar el valor de las fuerzas de tracción mediante instrumentos de medición directa.",
                preguntas: []
            },
            {
                id: "10-06",
                titulo: "10-06 Máquinas simples",
                tema: "Principio de conservación del trabajo en máquinas simples",
                objetivoVideo: "Evaluar el comportamiento mecánico de dispositivos de transmisión de fuerza.",
                preguntas: []
            },
            {
                id: "10-07",
                titulo: "10-07 Palancas",
                tema: "Ley de la palanca y equilibrio de torques respecto a un punto de apoyo.",
                objetivoVideo: "Comprobar la condición de equilibrio rotacional variando la posición del fulcro y los brazos de palanca de la fuerza aplicada y la resistencia.",
                preguntas: [
                    {
                        pregunta: "¿Cómo define el producto de la fuerza por su brazo de momento la condición de balance rotacional en una palanca de primer género?",
                        opciones: [
                            "Exige que el brazo de palanca mantenga vibraciones asimétricas armónicas para cancelar la rigidez estructural originada por cuerpos densos.",
                            "Establece que, para lograr el equilibrio perfecto, el torque generado en sentido horario debe ser exactamente equivalente y opuesto al torque de sentido antihorario.",
                            "Impone que las masas a los lados guarden obligatoria y estricta correspondencia simétrica de longitud anulando cualquier cálculo derivado del momento.",
                            "Indica que la adición vectorial de todas las cotas métricas debe ofrecer por resultado exacto un escalar puro desprovisto de masa gravitacional."
                        ],
                        correcta: 1,
                        explicacion: "El equilibrio rotacional requiere que la sumatoria de torques sea cero, es decir, que el torque horario iguale al antihorario."
                    },
                    {
                        pregunta: "¿Qué ventaja o desventaja mecánica caracteriza a las palancas de tercer género donde la fuerza motriz se aplica entre el fulcro y la resistencia?",
                        opciones: [
                            "Poseen una descomunal ventaja mecánica capaz de multiplicar a gran escala la fuerza de entrada, consolidándolas para mover masas monumentales.",
                            "Ostentan propiedades neutras, operando como sólidos de agarre puro que ignoran longitudes o distancias respecto del tornillo pivote.",
                            "Tienen la desventaja evidente de exigir una fuerza motriz muy superior al valor de la carga final (ventaja mecánica menor a 1), pero ofrecen la ganancia y ventaja innegable de incrementar la amplitud, la distancia y la velocidad de desplazamiento del extremo libre y operativo.",
                            "Condensan la energía potencial albergada en sus centros baricéntricos extirpando la fricción y operando en equilibrios ingrávidos indiferentes."
                        ],
                        correcta: 2,
                        explicacion: "En las palancas de tercer género el esfuerzo es mayor que la carga, pero se gana velocidad y mayor amplitud de movimiento."
                    }
                ]
            },
            {
                id: "10-08",
                titulo: "10-08 Barra horizontal",
                tema: "Equilibrio de fuerzas paralelas en barras",
                objetivoVideo: "Analizar las condiciones de equilibrio estático en una viga horizontal.",
                preguntas: []
            },
            {
                id: "10-09",
                titulo: "10-09 Modelo de un brazo",
                tema: "Sistemas biomecánicos y palancas óseas",
                objetivoVideo: "Aplicar los conceptos de torque al funcionamiento mecánico del brazo humano.",
                preguntas: []
            },
            {
                id: "10-10",
                titulo: "10-10 Barra de torques",
                tema: "Equilibrio rotacional con múltiples fuerzas no perpendiculares.",
                objetivoVideo: "Calcular y medir los momentos de fuerza ejercidos por pesos suspendidos a lo largo de una barra rígida horizontal articulada.",
                preguntas: [
                    {
                        pregunta: "¿Por qué es imprescindible considerar la componente perpendicular de la fuerza al calcular el torque efectivo sobre la barra?",
                        opciones: [
                            "Porque el empuje en diagonal introduce fracturas de corte por pandeo excesivo invalidando la solidez de las tablas.",
                            "Porque las fuerzas de compresión lateral repelen de facto toda proyección tridimensional incrementando perimetralmente la rotación del centroide.",
                            "Porque las leyes inerciales básicas solo aplican en ángulos ortogonales mayores a ochenta grados sobre perfiles geométricos sólidos regulares.",
                            "Porque las componentes orientadas paralelamente a la barra se limitan a empujar o jalar directamente contra el eje sin generar brazo de palanca ni tendencia rotacional alguna, mientras que solo la porción verdaderamente perpendicular al radio puede provocar giro."
                        ],
                        correcta: 3,
                        explicacion: "El torque se define multiplicando la fuerza por su componente perpendicular al radio de giro; las fuerzas paralelas no producen rotación."
                    },
                    {
                        pregunta: "¿Cómo influye la elección del punto de referencia (eje de momentos) al formular la ecuación de equilibrio de la barra?",
                        opciones: [
                            "Elegir el baricentro es un requisito sine qua non sin el cual se incorporan ruidos sísmicos y torques erráticos incontrolables.",
                            "Seleccionar astutamente el eje de momentos directamente encima del punto de aplicación de una fuerza problemática o desconocida permite que su brazo sea cero y quede algebraicamente anulada, simplificando así de forma notable la solución matemática.",
                            "Condena la ecuación a resultados imaginarios al ignorar la refracción gravitatoria ejercida sobre pivotes.",
                            "Determina de forma exponencial el margen de torques elásticos cruzados provocando lecturas desequilibradas."
                        ],
                        correcta: 1,
                        explicacion: "Ubicar el eje de rotación en el punto de aplicación de una fuerza desconocida hace que su distancia sea cero, anulando su término en la ecuación."
                    }
                ]
            },
            {
                id: "10-11",
                titulo: "10-11 Tabla con bisagras",
                tema: "Torques y reacciones en sistemas articulados",
                objetivoVideo: "Estudiar el equilibrio rotacional de placas sujetas por bisagras.",
                preguntas: []
            },
            {
                id: "10-12",
                titulo: "10-12 Llave de torques",
                tema: "Momento de torsión y brazo de palanca",
                objetivoVideo: "Comprender la relación entre la fuerza aplicada, el radio de giro y el torque resultante.",
                preguntas: []
            },
            {
                id: "10-13",
                titulo: "10-13 Rueda de torques",
                tema: "Cancelación de torques en poleas concéntricas de radios escalonados.",
                objetivoVideo: "Validar matemáticamente la suma nula de momentos emparejando fuerzas desiguales aplicadas a distintos radios de una misma polea escalonada.",
                preguntas: [
                    {
                        pregunta: "¿Por qué una pesa de 500 g colocada a un radio de 20 cm equilibra perfectamente a una pesa de 1000 g situada a un radio de 10 cm?",
                        opciones: [
                            "Porque la gravedad disminuye simétricamente conforme nos distanciamos del cubo central.",
                            "Porque bajo la ley universal del momento de una fuerza para sostener balance rotacional, basta con que los torques concéntricos a ambos flancos se igualen; aquí 500 multiplicados por 20 resultan la idéntica magnitud que 1000 por 10.",
                            "Porque actúan poleas de doble compensación estática frenando la masa de mayor volumen.",
                            "Porque el momento centrípeto angular presiona el peso masivo fuertemente reduciendo a la mitad su impacto."
                        ],
                        correcta: 1,
                        explicacion: "El torque se calcula como producto de la fuerza por su radio. Ambos lados dan un momento de 10000 g·cm, contrarrestándose."
                    },
                    {
                        pregunta: "¿Qué ocurriría con el estado de rotación del disco si ambas cargas se desplazan simultáneamente a radios mayores en una proporción no simétrica?",
                        opciones: [
                            "El equipo asimilará las diferencias relocalizando la tensión inercial.",
                            "El soporte perderá la simetría multiplicando a infinito los errores inerciales.",
                            "Al carecer de proporcionalidad equilibrada, la condición estática inercial se rompería inevitablemente causando que el disco comience a rotar acelerando con fuerza a favor de aquel vector que haya acumulado un torque neto de mayor supremacía y dominancia.",
                            "Permanecerá mudo y estable siempre y cuando los hilos soporten los jalones."
                        ],
                        correcta: 2,
                        explicacion: "Si se altera la proporción de los radios, los torques ya no suman cero y se genera un torque neto desequilibrado que produce rotación acelerada."
                    }
                ]
            },
            {
                id: "10-14",
                titulo: "10-14 Balanceo de una regla de un metro",
                tema: "Centro de gravedad y torques equilibrados",
                objetivoVideo: "Determinar el punto de apoyo óptimo para lograr el balance estático de una regla.",
                preguntas: []
            },
            {
                id: "10-15",
                titulo: "10-15 Regla de un metro sobre dos dedos",
                tema: "Fuerzas normales y fricción en puntos de apoyo móviles",
                objetivoVideo: "Observar el desplazamiento del punto de equilibrio al deslizar los soportes.",
                preguntas: []
            },
            {
                id: "10-16",
                titulo: "10-16 Puente y caminón",
                tema: "Distribución de cargas en estructuras de puentes",
                objetivoVideo: "Analizar las reacciones estáticas en los apoyos de una estructura ante cargas móviles.",
                preguntas: []
            },
            {
                id: "10-17",
                titulo: "10-17 Balanza de Roberval",
                tema: "Equilibrio en balanzas de doble plato",
                objetivoVideo: "Comprobar el principio de palancas simétricas en el diseño de balanzas.",
                preguntas: []
            },
            {
                id: "10-18",
                titulo: "10-18 Fuerzas en una escalera",
                tema: "Equilibrio estático completo de un cuerpo rígido apoyado con fricción.",
                objetivoVideo: "Analizar la interacción entre las fuerzas normales, de gravedad y de fricción en la base y la pared para evitar el deslizamiento de una escalera inclinada.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el riesgo de deslizamiento de la escalera se incrementa a medida que una persona asciende hacia los peldaños superiores?",
                        opciones: [
                            "Porque al avanzar la masa humana hacia arriba, también asciende el centro gravitacional extendiendo considerablemente el brazo de palanca del peso, el cual genera un torque que empuja cada vez con más brutalidad la pared, requiriendo un incremento idéntico de fricción estática a nivel de suelo para evitar que sus bases patinen sin remedio.",
                            "Porque al subir, la inercia angular disipa los encajes y reduce drásticamente el peso directo.",
                            "Porque transgrede los ángulos geométricos enclavados provocando descargas elásticas.",
                            "Porque las paredes lisas no devuelven normales vectoriales estáticas."
                        ],
                        correcta: 0,
                        explicacion: "A medida que la persona sube, aumenta el torque generado por su peso respecto a la base, exigiendo una mayor fuerza de fricción en el piso para evitar deslizamientos."
                    },
                    {
                        pregunta: "¿Qué papel desempeña la fuerza de fricción estática en el suelo para contrarrestar la fuerza normal horizontal ejercida por la pared lisa?",
                        opciones: [
                            "Solo funciona absorbiendo impactos de compresión paralela.",
                            "Refleja como resorte térmico a la normal inferior propulsando al armazón de regreso.",
                            "Cumple una función secundaria al carecer de vectores aplicados perpendiculares.",
                            "Juega el papel más vital del montaje al presentarse como la única e insustituible fuerza orientada de manera horizontal (en la base) con la capacidad de confrontar y equilibrar milimétricamente el empuje lateral opuesto de rechazo expedido desde el muro liso sin agarres."
                        ],
                        correcta: 3,
                        explicacion: "En el eje horizontal, la única fuerza que se opone y equilibra el empuje de la pared lisa es la fricción estática en el suelo."
                    }
                ]
            },
            {
                id: "10-19",
                titulo: "10-19 Escoba parada",
                tema: "Centro de gravedad y estabilidad de objetos verticales",
                objetivoVideo: "Explicar las condiciones geométricas para mantener un objeto en equilibrio precario.",
                preguntas: []
            },
            {
                id: "10-20",
                titulo: "10-20 Cama de clavos",
                tema: "Presión y distribución de fuerzas sobre superficies",
                objetivoVideo: "Comprender cómo la magnitud de la presión disminuye al aumentar el área de contacto.",
                preguntas: []
            },
            {
                id: "10-21",
                titulo: "10-21 Aplasta huevos",
                tema: "Resistencia estructural y geometría de arcos",
                objetivoVideo: "Demostrar la alta capacidad de soporte de cargas en estructuras con formas curvas naturales.",
                preguntas: []
            }
        ]
    }
};
    
