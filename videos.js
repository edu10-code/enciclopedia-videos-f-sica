// Catálogo de Capítulos para la Enciclopedia de Física - UNMSM
const capitulosCatalog = [
    { 
        id: 1, 
        title: "Capítulo 1: Vectores y Unidades", 
        introLab: "Introducción al Laboratorio: Análisis de magnitudes físicas, sistemas de unidades fundamentales y operaciones con vectores.",
        objGeneral: "Objetivo General: Comprender el marco analítico y geométrico de los vectores aplicados a la física experimental.",
        color: "#1e3a8a", icon: "∰", folder: "CAPITULO 1" 
    },
    { 
        id: 2, 
        title: "Capítulo 2: Cinemática Unidimensional", 
        introLab: "Introducción al Laboratorio: Estudio experimental del movimiento rectilíneo, velocidad instantánea y aceleración constante.",
        objGeneral: "Objetivo General: Analizar las leyes cinemáticas mediante la recolección de datos de tiempo y posición.",
        color: "#5b21b6", icon: "📈", folder: "CAPITULO 2" 
    },
    { 
        id: 3, 
        title: "Capítulo 3: Dinámica y Leyes de Newton", 
        introLab: "Introducción al Laboratorio: Verificación experimental de la relación entre fuerza, masa y aceleración.",
        objGeneral: "Objetivo General: Comprobar las leyes del movimiento de Newton utilizando sistemas dinámicos controlados.",
        color: "#047857", icon: "⚪", folder: "CAPITULO 3" 
    },
    { 
        id: 4, 
        title: "Capítulo 4: Movimiento en Dos Dimensiones", 
        introLab: "Introducción al Laboratorio: Análisis del movimiento de proyectiles y composición de velocidades perpendiculares.",
        objGeneral: "Objetivo General: Determinar la independencia de los movimientos ortogonales en un plano bidimensional.",
        color: "#d97706", icon: "📐", folder: "CAPITULO 4" 
    },
    { 
        id: 5, 
        title: "Capítulo 5: Inercia y Marcos de Referencia", 
        introLab: "Introducción al Laboratorio: Observación de los efectos inerciales y el comportamiento de cuerpos en aceleración.",
        objGeneral: "Objetivo General: Estudiar la tendencia de los cuerpos a mantener su estado de reposo o movimiento uniforme.",
        color: "#be123c", icon: "⚛", folder: "CAPITULO 5" 
    },
    { 
        id: 6, 
        title: "Capítulo 6: Conservación del Momento Lineal", 
        introLab: "Introducción al Laboratorio: Estudio de colisiones y la tercera ley de Newton en rieles de aire.",
        objGeneral: "Objetivo General: Demostrar la conservación del momento lineal en sistemas cerrados durante choques elásticos e inelásticos.",
        color: "#1d4ed8", icon: "⇄", folder: "CAPITULO 6" 
    },
    { 
        id: 7, 
        title: "Capítulo 7: Fricción y Rozamiento", 
        introLab: "Introducción al Laboratorio: Medición de las fuerzas de fricción estática y cinética sobre diferentes superficies.",
        objGeneral: "Objetivo General: Analizar los coeficientes de rozamiento y su dependencia con las condiciones de contacto.",
        color: "#15803d", icon: "📦", folder: "CAPITULO 7" 
    },
    { 
        id: 8, 
        title: "Capítulo 8: Trabajo y Conservación de la Energía", 
        introLab: "Introducción al Laboratorio: Transformaciones energéticas entre energía cinética y potencial en sistemas mecánicos.",
        objGeneral: "Objetivo General: Comprobar el principio de conservación de la energía mecánica total en ausencia de fuerzas disipativas.",
        color: "#1e40af", icon: "⚡", folder: "CAPITULO 8" 
    },
    { 
        id: 9, 
        title: "Capítulo 9: Centro de Masa y Equilibrio", 
        introLab: "Introducción al Laboratorio: Determinación experimental del centro de gravedad y condiciones de equilibrio estático.",
        objGeneral: "Objetivo General: Analizar la estabilidad de objetos regulares e irregulares mediante la ubicación de su centro de masa.",
        color: "#6b21a8", icon: "⚛", folder: "CAPITULO 9" 
    }
];

// Enlaces directos a los videos alojados en Cloudinary para reproducción web fluida
const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/yxkgsvkl/video/upload/v1792964376/";

const videosPorCapitulo = {
    1: [
        { archivo: "Copia_de_01-01_Unidades_básicas.mp4", tema: "Sistemas de Unidades", objetivo: "Identificar las unidades fundamentales del sistema internacional." },
        { archivo: "Copia_de_01-02_Suma_de_vectores_paralelogramo.mp4", tema: "Método del Paralelograma", objetivo: "Hallar la resultante gráfica y analítica de dos vectores concurrentes." },
        { archivo: "Copia_de_01-03_Suma_de_vectores_puntas_con_colas.mp4", tema: "Método del Polígono", objetivo: "Sumar múltiples vectores consecutivamente." },
        { archivo: "Copia_de_01-04_Componentes_de_un_vector.mp4", tema: "Descomposición Vectorial", objetivo: "Separar un vector en sus proyecciones ortogonales x e y." },
        { archivo: "Copia_de_01-05_Producto_punto_de_vectores.mp4", tema: "Producto Escalar", objetivo: "Calcular el producto punto y determinar el ángulo entre vectores." },
        { archivo: "Copia_de_01-06_Producto_cruz_de_vectores.mp4", tema: "Producto Vectorial", objetivo: "Obtener un vector perpendicular mediante el producto cruz." },
        { archivo: "Copia_de_01-07_Componentes_de_vectores_en_3_dimensiones.mp4", tema: "Vectores en el Espacio", objetivo: "Analizar componentes tridimensionales i, j, k." }
    ],
    2: [
        { archivo: "Copia_de_02-01_Velocidad_constante.mp4", tema: "MRU", objetivo: "Evaluar un cuerpo con velocidad uniforme." },
        { archivo: "Copia_de_02-02_Buldócer_sobre_una_hoja_en_movimiento.mp4", tema: "Sistemas de Referencia", objetivo: "Estudiar velocidades relativas." },
        { archivo: "Copia_de_02-03_Plano_inclinado_con_pelota_que_rueda.mp4", tema: "MRUV en Plano", objetivo: "Analizar la aceleración constante cuesta abajo." },
        { archivo: "Copia_de_02-04_Aceleración_constante.mp4", tema: "Dinámica de Caída Libre", objetivo: "Medir la aceleración debido a la gravedad." },
        { archivo: "Copia_de_02-05_Caída_de_una_cuerda_con_tuercas.mp4", tema: "Intervalos de Tiempo", objetivo: "Comprobar proporciones de espacio en caída libre." },
        { archivo: "Copia_de_02-06_Tiempo_de_reacción_a_la_caída_de_un_metro.mp4", tema: "Reflejos y Cinemática", objetivo: "Calcular el tiempo de reacción biológico." },
        { archivo: "Copia_de_02-07_Guinea_y_pluma.mp4", tema: "Vacío y Gravedad", objetivo: "Demostrar la ausencia de resistencia del aire." }
    ],
    3: [
        { archivo: "Copia_de_03-01_Aceleración_por_una_cuerda_con_clip.mp4", tema: "Segunda Ley de Newton", objetivo: "Relacionar fuerza neta y aceleración." },
        { archivo: "Copia_de_03-02_La_máquina_de_Atwood.mp4", tema: "Máquinas Simples", objetivo: "Estudiar sistemas de masas conectadas por poleas." },
        { archivo: "Copia_de_03-03_Aceleración_por_un_resorte.mp4", tema: "Fuerza Elástica", objetivo: "Analizar la ley de Hooke dinámica." },
        { archivo: "Copia_de_03-04_Slinky_que_cae.mp4", tema: "Ondas y Tensión", objetivo: "Estudiar el comportamiento de resortes colgantes." },
        { archivo: "Copia_de_03-05_Vela_en_un_frasco_que_cae.mp4", tema: "Inercia Interna", objetivo: "Observar efectos de presión y gravedad en caída." }
    ],
    4: [
        { archivo: "Copia_de_04-01_Disparo-caída.mp4", tema: "Independencia de Movimientos", objetivo: "Comprobar caída simultánea horizontal." },
        { archivo: "Copia_de_04-02_Cañón_contra_monos.mp4", tema: "Proyectiles", objetivo: "Analizar la trayectoria parabólica bajo gravedad." },
        { archivo: "Copia_de_04-03_Cañón_vertical_sobre_un_carro.mp4", tema: "Inercia en Proyectiles", objetivo: "Conservación de velocidad horizontal." },
        { archivo: "Copia_de_04-04_Cañón_vertical_sobre_un_carro_acelerado.mp4", tema: "Sistemas No Inerciales", objetivo: "Estudiar efectos de aceleración del carro." },
        { archivo: "Copia_de_04-05_Parábolas_en_una_mesa_de_aire.mp4", tema: "Fricción Nula en 2D", objetivo: "Visualizar parábolas sin rozamiento." },
        { archivo: "Copia_de_04-06_Cañón_de_alcance_variable.mp4", tema: "Ángulo de Tiro", objetivo: "Encontrar el ángulo de alcance máximo." },
        { archivo: "Copia_de_04-07_Suma_vectorial_de_velocidades.mp4", tema: "Velocidades Relativas", objetivo: "Componer vectores de velocidad." },
        { archivo: "Copia_de_04-08_Buldócer_sobre_una_hoja_en_movimiento_(2_dimensiones).mp4", tema: "Trayectorias Compuestas", objetivo: "Analizar movimiento en dos ejes." },
        { archivo: "Copia_de_04-09_Pesas_que_se_deslizan_en_un_triángulo.mp4", tema: "Planos Inclinados 2D", objetivo: "Descomponer fuerzas en planos." },
        { archivo: "Copia_de_04-10_Navegando_contra_el_viento.mp4", tema: "Vectores Aplicados", objetivo: "Estudiar fuerzas aerodinámicas." },
        { archivo: "Copia_de_04-11_Vertical_local_con_aceleración.mp4", tema: "Aceleraciones Compuestas", objetivo: "Determinar la vertical efectiva." }
    ],
    5: [
        { archivo: "Copia_de_05-01_Inercia_en_un_riel_de_aire_que_se_desplaza.mp4", tema: "Marcos Inerciales", objetivo: "Observar movimiento sin fricción." },
        { archivo: "Copia_de_05-02_Cilindro_de_inercia.mp4", tema: "Momento de Inercia", objetivo: "Evaluar resistencia al giro." },
        { archivo: "Copia_de_05-03_Roca_de_hule_espuma.mp4", tema: "Densidad y Apariencia", objetivo: "Analizar masa aparente vs real." },
        { archivo: "Copia_de_05-04_Sacudida_del_mantel.mp4", tema: "Primera Ley", objetivo: "Demostrar inercia de reposo." },
        { archivo: "Copia_de_05-05_Huevos_y_plato_de_pizza.mp4", tema: "Inercia en Práctica", objetivo: "Separar objetos mediante inercia rápida." },
        { archivo: "Copia_de_05-06_Lápiz_y_madera_terciada.mp4", tema: "Impacto Rápido", objetivo: "Estudiar resistencia al cambio de estado." }
    ],
    6: [
        { archivo: "Copia_de_06-01_Deslizadores_de_reacción.mp4", tema: "Acción y Reacción", objetivo: "Comprobar fuerzas mutuas." },
        { archivo: "Copia_de_06-02_Conservación_del_momento_de_deslizadores_de_reacción.mp4", tema: "Momento Lineal", objetivo: "Verificar conservación en choques." },
        { archivo: "Copia_de_06-03_Carro_sobre_una_tabla_que_rueda.mp4", tema: "Sistemas Acoplados", objetivo: "Analizar acción mutua." },
        { archivo: "Copia_de_06-04_Carro_de_ventilador_con_vela.mp4", tema: "Fuerzas Internas", objetivo: "Demostrar fuerzas netas nulas." },
        { archivo: "Copia_de_06-05_Cohete_de_CO2.mp4", tema: "Propulsión a Chorro", objetivo: "Aplicar conservación de cantidad de movimiento." },
        { archivo: "Copia_de_06-06_Cohete_de_agua.mp4", tema: "Propulsión Hídrica", objetivo: "Estudiar eyección de masa." },
        { archivo: "Copia_de_06-07_Carro_movido_por_un_extinguidor_de_fuego.mp4", tema: "Gas a Presión", objetivo: "Evaluar empuje por gases." },
        { archivo: "Copia_de_06-08_Hélice.mp4", tema: "Empuje Aerodinámico", objetivo: "Analizar generación de fuerza." },
        { archivo: "Copia_de_06-09_Carros_de_reacción_en_un_subibaja.mp4", tema: "Momento Angular y Lineal", objetivo: "Estudiar equilibrio dinámico." }
    ],
    7: [
        { archivo: "Copia_de_07-01_Fricción_en_un_riel_de_aire.mp4", tema: "Superficie sin Fricción", objetivo: "Comprobar movimiento ideal." },
        { archivo: "Copia_de_07-02_Fricción_estática_vs._Fricción_cinética.mp4", tema: "Coeficientes de Fricción", objetivo: "Medir la diferencia de fuerzas." },
        { archivo: "Copia_de_07-03_Dependencia_de_la_fricción_con_respecto_al_área.mp4", tema: "Independencia del Área", objetivo: "Demostrar que el área no afecta la fricción." },
        { archivo: "Copia_de_07-04_Dependencia_de_la_fricción_con_respecto_al_peso.mp4", tema: "Fuerza Normal", objetivo: "Relacionar peso y fricción." },
        { archivo: "Copia_de_07-05_Dependencia_de_la_fricción_con_respecto_a_la_superfície.mp4", tema: "Naturaleza de Superficies", objetivo: "Evaluar rugosidad." },
        { archivo: "Copia_de_07-06_Estabilidad_de_un_carro_que_rueda.mp4", tema: "Fricción en Ruedas", objetivo: "Analizar rozamiento por rodadura." }
    ],
    8: [
        { archivo: "Copia_de_08-01_Martinete.mp4", tema: "Trabajo Mecánico", objetivo: "Evaluar transferencia de energía." },
        { archivo: "Copia_de_08-02_Cañón_de_resorte.mp4", tema: "Energía Potencial Elástica", objetivo: "Convertir energía de resorte en cinética." },
        { archivo: "Copia_de_08-03_El_saltarín.mp4", tema: "Rebote Elástico", objetivo: "Estudiar restitución de energía." },
        { archivo: "Copia_de_08-04_Dependencia_de_la_energía_de_un_resorte_del_cuadrado_de_la_distancia.mp4", tema: "Energía Cuadrática", objetivo: "Comprobar fórmula de energía elástica." },
        { archivo: "Copia_de_08-05_Paradoja_del_gran_rebote.mp4", tema: "Transferencia de Momento", objetivo: "Analizar multiplicación de velocidad en rebotes." },
        { archivo: "Copia_de_08-06_Riel_de_pozo_de_energía.mp4", tema: "Pozos Potenciales", objetivo: "Estudiar conservación en desniveles." },
        { archivo: "Copia_de_08-07_El_péndulo_de_Galileo.mp4", tema: "Conservación de Energía en Péndulos", objetivo: "Verificar altura máxima constante." },
        { archivo: "Copia_de_08-08_Péndulo_de_bola_de_boliche.mp4", tema: "Seguridad y Energía", objetivo: "Demostrar que la energía no supera la inicial." },
        { archivo: "Copia_de_08-09_Riel_triple.mp4", tema: "Comparación de Pistas", objetivo: "Evaluar tiempos de descenso." },
        { archivo: "Copia_de_08-10_Generador_movido_a_mano.mp4", tema: "Conversión Energética", objetivo: "Transformar trabajo mecánico en eléctrico." },
        { archivo: "Copia_de_08-11_Generador_movido_por_una_pesa_que_cae.mp4", tema: "Potencia Constante", objetivo: "Analizar caída de pesa y generación." },
        { archivo: "Copia_de_08-12_Freno_de_fricción_constante.mp4", tema: "Disipación de Energía", objetivo: "Estudiar conversión de energía en calor." }
    ],
    9: [
        { archivo: "Copia_de_09-01_Estabilidad.mp4", tema: "Equilibrio Estable e Inestable", objetivo: "Determinar condiciones de vuelco." },
        { archivo: "Copia_de_09-02_Centro_de_masa_de_un_objeto_irregular.mp4", tema: "Plomada y Centro de Gravedad", objetivo: "Hallar el centro de masa geométrico." },
        { archivo: "Copia_de_09-03_Centro_de_masa_de_un_disco.mp4", tema: "Simetría de Masa", objetivo: "Localizar el centro en cuerpos simétricos." },
        { archivo: "Copia_de_09-04_Silla_en_un_pedestal.mp4", tema: "Línea de Gravedad", objetivo: "Verificar equilibrio sobre base estrecha." },
        { archivo: "Copia_de_09-05_Payaso_en_la_cuerda_floja.mp4", tema: "Centro de Masa Bajo el Poyo", objetivo: "Lograr estabilidad con contrapesos." },
        { archivo: "Copia_de_09-06_Cono_doble_en_una_pendiente.mp4", tema: "Paradoja del Cono", objetivo: "Analizar aparente subida por bajada del centro de masa." },
        { archivo: "Copia_de_09-07_Disco_cargado.mp4", tema: "Desplazamiento de Masa", objetivo: "Modificar el comportamiento dinámico." },
        { archivo: "Copia_de_09-08_Cilindros_que_caen.mp4", tema: "Inercia Rotacional y CM", objetivo: "Estudiar descenso de cilindros." },
        { archivo: "Copia_de_09-09_Centro_de_masa_en_una_mesa_de_aire.mp4", tema: "Centro de Masa Libre", objetivo: "Seguir la trayectoria del CM sin fuerzas externas." }
    ]
};
