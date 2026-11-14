// ==========================================
// 1. CATÁLOGO DE CAPÍTULOS (68 CAPÍTULOS)
// ==========================================
const capitulosCatalog = [
    // --- FÍSICA I ---
    { 
        id: 1, 
        title: "Capítulo 1: Unidades y vectores", 
        introLab: "Introducción al Laboratorio: Análisis de magnitudes físicas, sistemas de unidades fundamentales y operaciones con vectores.",
        objGeneral: "Objetivo General: Comprender el marco analítico y geométrico de los vectores aplicados a la física experimental.",
        color: "#1e3a8a", icon: "∰", folder: "CAPITULO 1" 
    },
    { 
        id: 2, 
        title: "Capítulo 2: Cinemática lineal", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#2563eb", icon: "📈", folder: "CAPITULO 2" 
    },
    { 
        id: 3, 
        title: "Capítulo 3: Dinámica lineal", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#047857", icon: "⚪", folder: "CAPITULO 3" 
    },
    { 
        id: 4, 
        title: "Capítulo 4: Movimiento en un plano", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#d97706", icon: "📐", folder: "CAPITULO 4" 
    },
    { 
        id: 5, 
        title: "Capítulo 5: Inercia", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#be123c", icon: "⚛", folder: "CAPITULO 5" 
    },
    { 
        id: 6, 
        title: "Capítulo 6: Acción y reacción", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#1d4ed8", icon: "⇄", folder: "CAPITULO 6" 
    },
    { 
        id: 7, 
        title: "Capítulo 7: Fricción", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#15803d", icon: "📦", folder: "CAPITULO 7" 
    },
    { 
        id: 8, 
        title: "Capítulo 8: Trabajo, energía y potencia", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#1e40af", icon: "⚡", folder: "CAPITULO 8" 
    },
    { 
        id: 9, 
        title: "Capítulo 9: Centro de masa", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#6b21a8", icon: "⚖", folder: "CAPITULO 9" 
    },
    { 
        id: 10, 
        title: "Capítulo 10: Estática", 
        introLab: "Introducción al Laboratorio: Análisis riguroso de las condiciones de equilibrio estático.",
        objGeneral: "Objetivo General: Analizar experimentalmente las condiciones fundamentales del equilibrio estático.",
        color: "#a82121", icon: "🏗", folder: "CAPITULO 10" 
    },
    { 
        id: 11, 
        title: "Capítulo 11: Colisiones", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#b45309", icon: "💥", folder: "CAPITULO 11" 
    },
    { 
        id: 12, 
        title: "Capítulo 12: Cinemática rotacional", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#4f46e5", icon: "🔄", folder: "CAPITULO 12" 
    },
    { 
        id: 13, 
        title: "Capítulo 13: Aceleración rotacional y energía", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0d9488", icon: "🌀", folder: "CAPITULO 13" 
    },
    { 
        id: 14, 
        title: "Capítulo 14: Conservación de momento angular", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#3730a3", icon: "💫", folder: "CAPITULO 14" 
    },
    { 
        id: 15, 
        title: "Capítulo 15: Precesión", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#9333ea", icon: "🎯", folder: "CAPITULO 15" 
    },
    { 
        id: 16, 
        title: "Capítulo 16: Fenómenos rotacionales", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0284c7", icon: "🧭", folder: "CAPITULO 16" 
    },
    { 
        id: 17, 
        title: "Capítulo 17: Gravitación", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#334155", icon: "🪐", folder: "CAPITULO 17" 
    },

    // --- FÍSICA II ---
    { 
        id: 18, 
        title: "Capítulo 18: Elasticidad", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0369a1", icon: "🔗", folder: "CAPITULO 18" 
    },
    { 
        id: 19, 
        title: "Capítulo 19: Oscilaciones", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#7c3aed", icon: "〰", folder: "CAPITULO 19" 
    },
    { 
        id: 20, 
        title: "Capítulo 20: Resonancia", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#db2777", icon: "🔊", folder: "CAPITULO 20" 
    },
    { 
        id: 21, 
        title: "Capítulo 21: Ondas mecánicas", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#059669", icon: "🌊", folder: "CAPITULO 21" 
    },
    { 
        id: 22, 
        title: "Capítulo 22: Ondas estacionarias", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#65a30d", icon: "📌", folder: "CAPITULO 22" 
    },
    { 
        id: 23, 
        title: "Capítulo 23: Producción de sonido", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#ca8a04", icon: "🎸", folder: "CAPITULO 23" 
    },
    { 
        id: 24, 
        title: "Capítulo 24: Propiedades del sonido", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#ea580c", icon: "🔔", folder: "CAPITULO 24" 
    },
    { 
        id: 25, 
        title: "Capítulo 25: Ondas sonoras estacionarias", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#dc2626", icon: "🎙", folder: "CAPITULO 25" 
    },
    { 
        id: 26, 
        title: "Capítulo 26: Presión de un gas", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#475569", icon: "🌡", folder: "CAPITULO 26" 
    },
    { 
        id: 27, 
        title: "Capítulo 27: Presión de un fluido", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0284c7", icon: "💧", folder: "CAPITULO 27" 
    },
    { 
        id: 28, 
        title: "Capítulo 28: Flotación", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0d9488", icon: "🚢", folder: "CAPITULO 28" 
    },
    { 
        id: 29, 
        title: "Capítulo 29: Dinámica de fluidos", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#1d4ed8", icon: "🌪", folder: "CAPITULO 29" 
    },
    { 
        id: 30, 
        title: "Capítulo 30: Tensión superficial", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#4338ca", icon: "🫧", folder: "CAPITULO 30" 
    },
    { 
        id: 31, 
        title: "Capítulo 31: Viscosidad", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#6d28d9", icon: "🍯", folder: "CAPITULO 31" 
    },
    { 
        id: 32, 
        title: "Capítulo 32: Fenómenos térmicos", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#be185d", icon: "🔥", folder: "CAPITULO 32" 
    },
    { 
        id: 33, 
        title: "Capítulo 33: Transferencia de calor", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#b91c1c", icon: "♨", folder: "CAPITULO 33" 
    },
    { 
        id: 34, 
        title: "Capítulo 34: Las leyes de la termodinámica", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#c2410c", icon: "⚙", folder: "CAPITULO 34" 
    },
    { 
        id: 35, 
        title: "Capítulo 35: Cambios de fase", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#047857", icon: "🧊", folder: "CAPITULO 35" 
    },
    { 
        id: 36, 
        title: "Capítulo 36: Teoría cinética", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#15803d", icon: "⚽", folder: "CAPITULO 36" 
    },
    { 
        id: 37, 
        title: "Capítulo 37: Cristales y temperaturas bajas", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0369a1", icon: "💎", folder: "CAPITULO 37" 
    },
    { 
        id: 38, 
        title: "Capítulo 38: Termoelectricidad", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#475569", icon: "⚡", folder: "CAPITULO 38" 
    },

    // --- FÍSICA III ---
    { 
        id: 39, 
        title: "Capítulo 39: Cargas eléctricas", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#1e3a8a", icon: "⚡", folder: "CAPITULO 39" 
    },
    { 
        id: 40, 
        title: "Capítulo 40: Inducción electrostática", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#2563eb", icon: "🔋", folder: "CAPITULO 40" 
    },
    { 
        id: 41, 
        title: "Capítulo 41: Campos eléctricos", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#4f46e5", icon: "🌐", folder: "CAPITULO 41" 
    },
    { 
        id: 42, 
        title: "Capítulo 42: Resistencia y circuitos CD", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#7c3aed", icon: "🔌", folder: "CAPITULO 42" 
    },
    { 
        id: 43, 
        title: "Capítulo 43: Caídas de voltaje y pérdidas I²R", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#9333ea", icon: "📉", folder: "CAPITULO 43" 
    },
    { 
        id: 44, 
        title: "Capítulo 44: Resistencia no óhmica", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#c026d3", icon: "💡", folder: "CAPITULO 44" 
    },
    { 
        id: 45, 
        title: "Capítulo 45: Efectos electroquímicos", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#db2777", icon: "🧪", folder: "CAPITULO 45" 
    },
    { 
        id: 46, 
        title: "Capítulo 46: Capacitancia y circuitos RC", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#e11d48", icon: "⏱", folder: "CAPITULO 46" 
    },
    { 
        id: 47, 
        title: "Capítulo 47: Magnetismo y campos magnéticos", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#047857", icon: "🧲", folder: "CAPITULO 47" 
    },
    { 
        id: 48, 
        title: "Capítulo 48: Campos magnéticos de corrientes", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#059669", icon: "🌀", folder: "CAPITULO 48" 
    },
    { 
        id: 49, 
        title: "Capítulo 49: Propiedades magnéticas de la materia", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0d9488", icon: "🧱", folder: "CAPITULO 49" 
    },
    { 
        id: 50, 
        title: "Capítulo 50: Fuerzas magnéticas sobre corrientes", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0284c7", icon: "⚡", folder: "CAPITULO 50" 
    },
    { 
        id: 51, 
        title: "Capítulo 51: Inducción electromagnética", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0284c7", icon: "🔄", folder: "CAPITULO 51" 
    },
    { 
        id: 52, 
        title: "Capítulo 52: Corrientes parásitas", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#2563eb", icon: "⚙", folder: "CAPITULO 52" 
    },
    { 
        id: 53, 
        title: "Capítulo 53: Histéresis", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#1d4ed8", icon: "📈", folder: "CAPITULO 53" 
    },
    { 
        id: 54, 
        title: "Capítulo 54: Inductancia y circuitos LR", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#3730a3", icon: "📶", folder: "CAPITULO 54" 
    },
    { 
        id: 55, 
        title: "Capítulo 55: Circuitos LRC", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#4f46e5", icon: "📻", folder: "CAPITULO 55" 
    },
    { 
        id: 56, 
        title: "Capítulo 56: Ondas electromagnéticas", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#9333ea", icon: "📡", folder: "CAPITULO 56" 
    },
    { 
        id: 57, 
        title: "Capítulo 57: Espejos planos", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#6b21a8", icon: "🪞", folder: "CAPITULO 57" 
    },

    // --- FÍSICA IV ---
    { 
        id: 58, 
        title: "Capítulo 58: Espejos curvos", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#d97706", icon: "🔍", folder: "CAPITULO 58" 
    },
    { 
        id: 59, 
        title: "Capítulo 59: Refracción y reflexión interna", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#b45309", icon: "💎", folder: "CAPITULO 59" 
    },
    { 
        id: 60, 
        title: "Capítulo 60: Lentes", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#b91c1c", icon: "👓", folder: "CAPITULO 60" 
    },
    { 
        id: 61, 
        title: "Capítulo 61: Difracción", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#c2410c", icon: "👁", folder: "CAPITULO 61" 
    },
    { 
        id: 62, 
        title: "Capítulo 62: Interferencia", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#15803d", icon: "🌈", folder: "CAPITULO 62" 
    },
    { 
        id: 63, 
        title: "Capítulo 63: Espectros y color", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#047857", icon: "🎨", folder: "CAPITULO 63" 
    },
    { 
        id: 64, 
        title: "Capítulo 64: Polarización", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#0369a1", icon: "🕶", folder: "CAPITULO 64" 
    },
    { 
        id: 65, 
        title: "Capítulo 65: Actividad óptica", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#1d4ed8", icon: "✨", folder: "CAPITULO 65" 
    },
    { 
        id: 66, 
        title: "Capítulo 66: Física cuántica", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#4338ca", icon: "⚛", folder: "CAPITULO 66" 
    },
    { 
        id: 67, 
        title: "Capítulo 67: Física atómica", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#6d28d9", icon: "🔬", folder: "CAPITULO 67" 
    },
    { 
        id: 68, 
        title: "Capítulo 68: Física nuclear", 
        introLab: "Introducción al Laboratorio: [Rellenar introducción al laboratorio para este capítulo]",
        objGeneral: "Objetivo General: [Rellenar objetivo general para este capítulo]",
        color: "#be123c", icon: "☢", folder: "CAPITULO 68" 
    }
];

// ==========================================
// 2. URL BASE DE CLOUDINARY
// ==========================================
const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/yxkgsvkl/video/upload/v1792964376/";

// ==========================================
// 3. RESPALDO GLOBAL DE YOUTUBE (IDS SEPARADOS)
// ==========================================
const YOUTUBE_RESPALDO = {
    // Capítulo 1
    "01-01": "uqlqU5wAaIY",
    "01-02": "DxWLaz-EVbQ",
    "01-03": "Cwr2bZqO6sY",
    "01-04": "OfuMb0JQ_K0",
    "01-05": "KIQVvGcm5Ew",
    "01-06": "GJV-g0kMNqQ",
    "01-07": "PVc19oIUp4M",

    // Capítulos 2 al 68 (Vacíos listos para rellenar)
    // Se pueden ir completando con formato "02-01": "ID_YOUTUBE"
};


// ==========================================
// 4. VIDEOS POR CAPÍTULO (CLOUDINARY / ESTRUCTURA)
// ==========================================
const videosPorCapitulo = {
    // --- FÍSICA I ---
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
        { archivo: "Copia_de_02-01_Velocidad_constante.mp4", tema: "Velocidad constante", objetivo: "" },
        { archivo: "Copia_de_02-02_Buldócer_sobre_una_hoja_en_movimiento.mp4", tema: "Buldócer sobre una hoja en movimiento", objetivo: "" },
        { archivo: "Copia_de_02-03_Plano_inclinado_con_pelota_que_rueda.mp4", tema: "Plano inclinado con pelota que rueda", objetivo: "" },
        { archivo: "Copia_de_02-04_Aceleración_constante.mp4", tema: "Aceleración constante", objetivo: "" },
        { archivo: "Copia_de_02-05_Caída_de_una_cuerda_con_tuercas.mp4", tema: "Caída de una cuerda con tuercas", objetivo: "" },
        { archivo: "Copia_de_02-06_Tiempo_de_reacción_a_la_caída_de_un_metro.mp4", tema: "Tiempo de reacción a la caída de un metro", objetivo: "" },
        { archivo: "Copia_de_02-07_Guinea_y_pluma.mp4", tema: "Guinea y pluma", objetivo: "" }
    ],
    3: [
        { archivo: "Copia_de_03-01_Aceleración_por_una_cuerda_con_clip.mp4", tema: "Aceleración por una cuerda con clip", objetivo: "" },
        { archivo: "Copia_de_03-02_La_máquina_de_Atwood.mp4", tema: "La máquina de Atwood", objetivo: "" },
        { archivo: "Copia_de_03-03_Aceleración_por_un_resorte.mp4", tema: "Aceleración por un resorte", objetivo: "" },
        { archivo: "Copia_de_03-04_Slinky_que_cae.mp4", tema: "Slinky que cae", objetivo: "" },
        { archivo: "Copia_de_03-05_Vela_en_un_frasco_que_cae.mp4", tema: "Vela en un frasco que cae", objetivo: "" }
    ],
    4: [
        { archivo: "Copia_de_04-01_Disparo-caída.mp4", tema: "Disparo/caída", objetivo: "" },
        { archivo: "Copia_de_04-02_Cañón_contra_monos.mp4", tema: "Cañón contra monos", objetivo: "" },
        { archivo: "Copia_de_04-03_Cañón_vertical_sobre_un_carro.mp4", tema: "Cañón vertical sobre un carro", objetivo: "" },
        { archivo: "Copia_de_04-04_Cañón_vertical_sobre_un_carro_acelerado.mp4", tema: "Cañón vertical sobre un carro acelerado", objetivo: "" },
        { archivo: "Copia_de_04-05_Parábolas_en_una_mesa_de_aire.mp4", tema: "Parábolas en una mesa de aire", objetivo: "" },
        { archivo: "Copia_de_04-06_Cañón_de_alcance_variable.mp4", tema: "Cañón de alcance variable", objetivo: "" },
        { archivo: "Copia_de_04-07_Suma_vectorial_de_velocidades.mp4", tema: "Suma vectorial de velocidades", objetivo: "" },
        { archivo: "Copia_de_04-08_Buldócer_sobre_una_hoja_en_movimiento_(2_dimensiones).mp4", tema: "Buldócer sobre una hoja en movimiento (2 dimensiones)", objetivo: "" },
        { archivo: "Copia_de_04-09_Pesas_que_se_deslizan_en_un_triángulo.mp4", tema: "Pesas que se deslizan en un triángulo", objetivo: "" },
        { archivo: "Copia_de_04-10_Navegando_contra_el_viento.mp4", tema: "Navegando contra el viento", objetivo: "" },
        { archivo: "Copia_de_04-11_Vertical_local_con_aceleración.mp4", tema: "Vertical local con aceleración", objetivo: "" }
    ],
    5: [
        { archivo: "Copia_de_05-01_Inercia_en_un_riel_de_aire_que_se_desplaza.mp4", tema: "Inercia en un riel de aire que se desplaza", objetivo: "" },
        { archivo: "Copia_de_05-02_Cilindro_de_inercia.mp4", tema: "Cilindro de inercia", objetivo: "" },
        { archivo: "Copia_de_05-03_Roca_de_hule_espuma.mp4", tema: "Roca de hule espuma", objetivo: "" },
        { archivo: "Copia_de_05-04_Sacudida_del_mantel.mp4", tema: "Sacudida del mantel", objetivo: "" },
        { archivo: "Copia_de_05-05_Huevos_y_plato_de_pizza.mp4", tema: "Huevos y plato de pizza", objetivo: "" },
        { archivo: "Copia_de_05-06_Lápiz_y_madera_terciada.mp4", tema: "Lápiz y madera terciada", objetivo: "" }
    ],
    6: [
        { archivo: "Copia_de_06-01_Deslizadores_de_reacción.mp4", tema: "Deslizadores de reacción", objetivo: "" },
        { archivo: "Copia_de_06-02_Conservación_del_momento_de_deslizadores_de_reacción.mp4", tema: "Conservación del momento de deslizadores de reacción", objetivo: "" },
        { archivo: "Copia_de_06-03_Carro_sobre_una_tabla_que_rueda.mp4", tema: "Carro sobre una tabla que rueda", objetivo: "" },
        { archivo: "Copia_de_06-04_Carro_de_ventilador_con_vela.mp4", tema: "Carro de ventilador con vela", objetivo: "" },
        { archivo: "Copia_de_06-05_Cohete_de_CO2.mp4", tema: "Cohete de CO2", objetivo: "" },
        { archivo: "Copia_de_06-06_Cohete_de_agua.mp4", tema: "Cohete de agua", objetivo: "" },
        { archivo: "Copia_de_06-07_Carro_movido_por_un_extinguidor_de_fuego.mp4", tema: "Carro movido por un extinguidor de fuego", objetivo: "" },
        { archivo: "Copia_de_06-08_Hélice.mp4", tema: "Hélice", objetivo: "" },
        { archivo: "Copia_de_06-09_Carros_de_reacción_en_un_subibaja.mp4", tema: "Carros de reacción en un subibaja", objetivo: "" }
    ],
    7: [
        { archivo: "Copia_de_07-01_Fricción_en_un_riel_de_aire.mp4", tema: "Fricción en un riel de aire", objetivo: "" },
        { archivo: "Copia_de_07-02_Fricción_estática_vs._Fricción_cinética.mp4", tema: "Fricción estática vs. Fricción cinética", objetivo: "" },
        { archivo: "Copia_de_07-03_Dependencia_de_la_fricción_con_respecto_al_área.mp4", tema: "Dependencia de la fricción con respecto al área", objetivo: "" },
        { archivo: "Copia_de_07-04_Dependencia_de_la_fricción_con_respecto_al_peso.mp4", tema: "Dependencia de la fricción con respecto al peso", objetivo: "" },
        { archivo: "Copia_de_07-05_Dependencia_de_la_fricción_con_respecto_a_la_superfície.mp4", tema: "Dependencia de la fricción con respecto a la superfície", objetivo: "" },
        { archivo: "Copia_de_07-06_Estabilidad_de_un_carro_que_rueda.mp4", tema: "Estabilidad de un carro que rueda", objetivo: "" }
    ],
    8: [
        { archivo: "Copia_de_08-01_Martinete.mp4", tema: "Martinete", objetivo: "" },
        { archivo: "Copia_de_08-02_Cañón_de_resorte.mp4", tema: "Cañón de resorte", objetivo: "" },
        { archivo: "Copia_de_08-03_El_saltarín.mp4", tema: "El saltarín", objetivo: "" },
        { archivo: "Copia_de_08-04_Dependencia_de_la_energía_de_un_resorte_del_cuadrado_de_la_distancia.mp4", tema: "Dependencia de la energía de un resorte del cuadrado de la distancia", objetivo: "" },
        { archivo: "Copia_de_08-05_Paradoja_del_gran_rebote.mp4", tema: "Paradoja del gran rebote", objetivo: "" },
        { archivo: "Copia_de_08-06_Riel_de_pozo_de_energía.mp4", tema: "Riel de pozo de energía", objetivo: "" },
        { archivo: "Copia_de_08-07_El_péndulo_de_Galileo.mp4", tema: "El péndulo de Galileo", objetivo: "" },
        { archivo: "Copia_de_08-08_Péndulo_de_bola_de_boliche.mp4", tema: "Péndulo de bola de boliche", objetivo: "" },
        { archivo: "Copia_de_08-09_Riel_triple.mp4", tema: "Riel triple", objetivo: "" },
        { archivo: "Copia_de_08-10_Generador_movido_a_mano.mp4", tema: "Generador movido a mano", objetivo: "" },
        { archivo: "Copia_de_08-11_Generador_movido_por_una_pesa_que_cae.mp4", tema: "Generador movido por una pesa que cae", objetivo: "" },
        { archivo: "Copia_de_08-12_Freno_de_fricción_constante.mp4", tema: "Freno de fricción constante", objetivo: "" }
    ],
    9: [
        { archivo: "Copia_de_09-01_Estabilidad.mp4", tema: "Estabilidad", objetivo: "" },
        { archivo: "Copia_de_09-02_Centro_de_masa_de_un_objeto_irregular.mp4", tema: "Centro de masa de un objeto irregular", objetivo: "" },
        { archivo: "Copia_de_09-03_Centro_de_masa_de_un_disco.mp4", tema: "Centro de masa de un disco", objetivo: "" },
        { archivo: "Copia_de_09-04_Silla_en_un_pedestal.mp4", tema: "Silla en un pedestal", objetivo: "" },
        { archivo: "Copia_de_09-05_Payaso_en_la_cuerda_floja.mp4", tema: "Payaso en la cuerda floja", objetivo: "" },
        { archivo: "Copia_de_09-06_Cono_doble_en_una_pendiente.mp4", tema: "Cono doble en una pendiente", objetivo: "" },
        { archivo: "Copia_de_09-07_Disco_cargado.mp4", tema: "Disco cargado", objetivo: "" },
        { archivo: "Copia_de_09-08_Cilindros_que_caen.mp4", tema: "Cilindros que caen", objetivo: "" },
        { archivo: "Copia_de_09-09_Centro_de_masa_en_una_mesa_de_aire.mp4", tema: "Centro de masa en una mesa de aire", objetivo: "" }
    ],
    10: [
        { archivo: "Copia_de_10-01_Tablero_de_fuerzas.mp4", tema: "Tablero de fuerzas", objetivo: "Demostrar experimentalmente la condición de equilibrio estático." },
        { archivo: "Copia_de_10-02_Tendedero.mp4", tema: "Tendedero", objetivo: "Analizar la distribución de fuerzas y tensiones." },
        { archivo: "Copia_de_10-03_Carro_en_un_plano_inclinado_removible.mp4", tema: "Carro en un plano inclinado removible", objetivo: "Estudiar el equilibrio de fuerzas." },
        { archivo: "Copia_de_10-04_Ventaja_de_una_polea.mp4", tema: "Ventaja de una polea", objetivo: "Medir cuantitativamente la reducción en la fuerza de tracción." },
        { archivo: "Copia_de_10-05_Polea_y_dinamometro.mp4", tema: "Polea y dinamómetro", objetivo: "Determinar el valor de las fuerzas de tracción." },
        { archivo: "Copia_de_10-06_Maquinas_simples.mp4", tema: "Máquinas simples", objetivo: "Evaluar el comportamiento mecánico." },
        { archivo: "Copia_de_10-07_Palancas.mp4", tema: "Palancas", objetivo: "Comprobar la condición de equilibrio rotacional." },
        { archivo: "Copia_de_10-08_Barra_horizontal.mp4", tema: "Barra horizontal", objetivo: "Analizar las condiciones de equilibrio estático." },
        { archivo: "Copia_de_10-09_Modelo_de_un_brazo.mp4", tema: "Modelo de un brazo", objetivo: "Aplicar los conceptos de torque a la biomecánica." },
        { archivo: "Copia_de_10-10_Barra_de_torques.mp4", tema: "Barra de torques", objetivo: "Calcular y medir los momentos de fuerza." },
        { archivo: "Copia_de_10-11_Tabla_con_bisagras.mp4", tema: "Tabla con bisagras", objetivo: "Estudiar el equilibrio rotacional de placas." },
        { archivo: "Copia_de_10-12_Llave_de_torques.mp4", tema: "Llave de torques", objetivo: "Comprender la relación entre fuerza y radio de giro." },
        { archivo: "Copia_de_10-13_Rueda_de_torques.mp4", tema: "Rueda de torques", objetivo: "Validar la suma nula de momentos." },
        { archivo: "Copia_de_10-14_Balanceo_de_una_regla_de_un_metro.mp4", tema: "Balanceo de una regla de un metro", objetivo: "Determinar el punto de apoyo óptimo." },
        { archivo: "Copia_de_10-15_Regla_de_un_metro_sobre_dos_dedos.mp4", tema: "Regla de un metro sobre dos dedos", objetivo: "Observar el desplazamiento del punto de equilibrio." },
        { archivo: "Copia_de_10-16_Puente_y_camino.mp4", tema: "Puente y caminón", objetivo: "Analizar reacciones estáticas en apoyos." },
        { archivo: "Copia_de_10-17_Balanza_de_Roberval.mp4", tema: "Balanza de Roberval", objetivo: "Comprobar el principio de palancas simétricas." },
        { archivo: "Copia_de_10-18_Fuerzas_en_una_escalera.mp4", tema: "Fuerzas en una escalera", objetivo: "Analizar la interacción entre normales y fricción." },
        { archivo: "Copia_de_10-19_Escoba_parada.mp4", tema: "Escoba parada", objetivo: "Explicar condiciones geométricas de estabilidad." },
        { archivo: "Copia_de_10-20_Cama_de_clavos.mp4", tema: "Cama de clavos", objetivo: "Comprender la relación entre presión y área." },
        { archivo: "Copia_de_10-21_Aplasta_huevos.mp4", tema: "Aplasta huevos", objetivo: "Demostrar la alta capacidad de soporte de arcos." }
    ],
    11: [
        { archivo: "Copia_de_11-01_Bolas_que_chocan.mp4", tema: "Bolas que chocan", objetivo: "" },
        { archivo: "Copia_de_11-02_Colisiones_de_deslizadores_de_masas_iguales_y_diferentes.mp4", tema: "Colisiones de deslizadores de masas iguales y diferentes", objetivo: "" },
        { archivo: "Copia_de_11-03_Colisiones_elásticas_e_inelásticas.mp4", tema: "Colisiones elásticas e inelásticas", objetivo: "" },
        { archivo: "Copia_de_11-04_Coeficiente_de_restitución.mp4", tema: "Coeficiente de restitución", objetivo: "" },
        { archivo: "Copia_de_11-05_Rebote_alto.mp4", tema: "Rebote alto", objetivo: "" },
        { archivo: "Copia_de_11-06_Colisiones_en_una_mesa_de_aire_(masas_iguales).mp4", tema: "Colisiones en una mesa de aire (masas iguales)", objetivo: "" },
        { archivo: "Copia_de_11-07_Colisiones_en_una_mesa_de_aire_(masas_diferentes).mp4", tema: "Colisiones en una mesa de aire (masas diferentes)", objetivo: "" },
        { archivo: "Copia_de_11-08_Colisiones_en_una_mesa_de_aire_(inelásticas).mp4", tema: "Colisiones en una mesa de aire (inelásticas)", objetivo: "" },
        { archivo: "Copia_de_11-09_Huevo_en_una_sábana.mp4", tema: "Huevo en una sábana", objetivo: "" },
        { archivo: "Copia_de_11-10_Martinete_con_hule_espuma.mp4", tema: "Martinete con hule espuma", objetivo: "" },
        { archivo: "Copia_de_11-11_Péndulo_balístico.mp4", tema: "Péndulo balístico", objetivo: "" }
    ],
    12: [
        { archivo: "Copia_de_12-01_Disco_de_radianes.mp4", tema: "Disco de radianes", objetivo: "" },
        { archivo: "Copia_de_12-02_Generador_de_cicloides.mp4", tema: "Generador de cicloides", objetivo: "" },
        { archivo: "Copia_de_12-03_Anillo_con_brecha.mp4", tema: "Anillo con brecha", objetivo: "" },
        { archivo: "Copia_de_12-04_Disco_que_rota_con_borradores.mp4", tema: "Disco que rota con borradores", objetivo: "" },
        { archivo: "Copia_de_12-05_Agua_sobre_un_disco_que_gira.mp4", tema: "Agua sobre un disco que gira", objetivo: "" },
        { archivo: "Copia_de_12-06_Pelota_en_una_cuerda.mp4", tema: "Pelota en una cuerda", objetivo: "" },
        { archivo: "Copia_de_12-07_Moneda_sobre_una_percha.mp4", tema: "Moneda sobre una percha", objetivo: "" },
        { archivo: "Copia_de_12-08_Avión_en_una_cuerda.mp4", tema: "Avión en una cuerda", objetivo: "" },
        { archivo: "Copia_de_12-09_Parado_en_la_pared.mp4", tema: "Parado en la pared", objetivo: "" },
        { archivo: "Copia_de_12-10_Cubo_de_agua_que_gira.mp4", tema: "Cubo de agua que gira", objetivo: "" },
        { archivo: "Copia_de_12-11_Aros_centrífugos.mp4", tema: "Aros centrífugos", objetivo: "" },
        { archivo: "Copia_de_12-12_Centrifugadora_de_agua_y_mercurio.mp4", tema: "Centrifugadora de agua y mercurio", objetivo: "" },
        { archivo: "Copia_de_12-13_Cadena_que_rota.mp4", tema: "Cadena que rota", objetivo: "" },
        { archivo: "Copia_de_12-14_Rueda_de_hule_que_rota.mp4", tema: "Rueda de hule que rota", objetivo: "" },
        { archivo: "Copia_de_12-15_Regulador_centrífugo.mp4", tema: "Regulador centrífugo", objetivo: "" }
    ],
    13: [
        { archivo: "Copia_de_13-01_Máquina_de_aceleración_angular.mp4", tema: "Máquina de aceleración angular", objetivo: "" },
        { archivo: "Copia_de_13-02_Aceleración_angular_de_una_rueda_de_bicicleta.mp4", tema: "Aceleración angular de una rueda de bicicleta", objetivo: "" },
        { archivo: "Copia_de_13-03_Rotor_de_aire_con_deflectores.mp4", tema: "Rotor de aire con deflectores", objetivo: "" },
        { archivo: "Copia_de_13-04_Cuerpos_que_ruedan_sobre_un_plano_inclinado.mp4", tema: "Cuerpos que ruedan sobre un plano inclinado", objetivo: "" },
        { archivo: "Copia_de_13-05_Carrete_en_un_plano_inclinado.mp4", tema: "Carrete en un plano inclinado", objetivo: "" },
        { archivo: "Copia_de_13-06_Rueda_de_bicicleta_en_una_pendiente.mp4", tema: "Rueda de bicicleta en una pendiente", objetivo: "" },
        { archivo: "Copia_de_13-07_Carrete_con_listón.mp4", tema: "Carrete con listón", objetivo: "" },
        { archivo: "Copia_de_13-08_El_yoyo_de_Maxwell.mp4", tema: "El yoyo de Maxwell", objetivo: "" },
        { archivo: "Copia_de_13-09_Rizando_el_rizo.mp4", tema: "Rizando el rizo", objetivo: "" },
        { archivo: "Copia_de_13-10_Caída_de_una_regla_con_monedas.mp4", tema: "Caída de una regla con monedas", objetivo: "" },
        { archivo: "Copia_de_13-11_Barra_con_bisagra_y_pelota.mp4", tema: "Barra con bisagra y pelota", objetivo: "" },
        { archivo: "Copia_de_13-12_Centro_de_percusión.mp4", tema: "Centro de percusión", objetivo: "" },
        { archivo: "Copia_de_13-13_El_péndulo_de_Foucault.mp4", tema: "El péndulo de Foucault", objetivo: "" },
        { archivo: "Copia_de_13-14_El_efecto_Coriolis.mp4", tema: "El efecto Coriolis", objetivo: "" }
    ],
    14: [
        { archivo: "Copia_de_14-01_Canicas_y_embudo.mp4", tema: "Canicas y embudo", objetivo: "" },
        { archivo: "Copia_de_14-02_Tren_en_una_vía_circular.mp4", tema: "Tren en una vía circular", objetivo: "" },
        { archivo: "Copia_de_14-03_La_cola_que_mueve_al_perro.mp4", tema: "La cola que mueve al perro", objetivo: "" },
        { archivo: "Copia_de_14-04_Banco_giratorio_con_pesas.mp4", tema: "Banco giratorio con pesas", objetivo: "" },
        { archivo: "Copia_de_14-05_Banco_giratorio_y_barra_larga.mp4", tema: "Banco giratorio y barra larga", objetivo: "" },
        { archivo: "Copia_de_14-06_Banco_giratorio_y_rueda_de_bicicleta.mp4", tema: "Banco giratorio y rueda de bicicleta", objetivo: "" },
        { archivo: "Copia_de_14-07_Estabilidad_del_giroscopio.mp4", tema: "Estabilidad del giroscopio", objetivo: "" },
        { archivo: "Copia_de_14-08_Rueda_y_freno.mp4", tema: "Rueda y freno", objetivo: "" },
        { archivo: "Copia_de_14-09_Freno_de_rotación_de_satélite.mp4", tema: "Freno de rotación de satélite", objetivo: "" }
    ],
    15: [
        { archivo: "Copia_de_15-01_Precesión_de_una_rueda_de_bicicleta.mp4", tema: "Precesión de una rueda de bicicleta", objetivo: "" },
        { archivo: "Copia_de_15-02_Giroscopio_con_pesas_ajustables.mp4", tema: "Giroscopio con pesas ajustables", objetivo: "" },
        { archivo: "Copia_de_15-03_Rueda_de_bicicleta_en_balancines.mp4", tema: "Rueda de bicicleta en balancines", objetivo: "" },
        { archivo: "Copia_de_15-04_Rueda_doble_de_bicicleta.mp4", tema: "Rueda doble de bicicleta", objetivo: "" },
        { archivo: "Copia_de_15-05_Giroscopio_motorizado.mp4", tema: "Giroscopio motorizado", objetivo: "" }
    ],
    16: [
        { archivo: "Copia_de_16-01_Balance_estático-dinámico.mp4", tema: "Balance estático-dinámico", objetivo: "" },
        { archivo: "Copia_de_16-02_Rotación_de_un_balón_de_futbol_americano.mp4", tema: "Rotación de un balón de futbol americano", objetivo: "" },
        { archivo: "Copia_de_16-03_Perinola.mp4", tema: "Perinola", objetivo: "" },
        { archivo: "Copia_de_16-04_Estabilizador_de_barcos.mp4", tema: "Estabilizador de barcos", objetivo: "" },
        { archivo: "Copia_de_16-05_Barra_que_gira_y_aro_en_un_alambre.mp4", tema: "Barra que gira y aro en un alambre", objetivo: "" },
        { archivo: "Copia_de_16-06_Ejes_de_rotación_estables_e_inestables.mp4", tema: "Ejes de rotación estables e inestables", objetivo: "" }
    ],
    17: [
        { archivo: "Copia_de_17-01_Secciones_cónicas.mp4", tema: "Secciones cónicas", objetivo: "" },
        { archivo: "Copia_de_17-02_Tablero_para_dibujar_elipses.mp4", tema: "Tablero para dibujar elipses", objetivo: "" },
        { archivo: "Copia_de_17-03_La_balanza_de_Cavendish.mp4", tema: "La balanza de Cavendish", objetivo: "" }
    ],

    // --- FÍSICA II ---
    18: [
        { archivo: "Copia_de_18-01_La_ley_de_Hooke.mp4", tema: "La ley de Hooke", objetivo: "" },
        { archivo: "Copia_de_18-02_Resortes_en_serie_y_en_paralelo.mp4", tema: "Resortes en serie y en paralelo", objetivo: "" },
        { archivo: "Copia_de_18-03_Barra_de_torsión.mp4", tema: "Barra de torsión", objetivo: "" },
        { archivo: "Copia_de_18-04_Límites_elásticos.mp4", tema: "Límites elásticos", objetivo: "" },
        { archivo: "Copia_de_18-05_El_módulo_de_Young.mp4", tema: "El módulo de Young", objetivo: "" },
        { archivo: "Copia_de_18-06_Doblando_varillas_de_metal.mp4", tema: "Doblando varillas de metal", objetivo: "" },
        { archivo: "Copia_de_18-07_Escalamiento_2_a_1.mp4", tema: "Escalamiento 2 a 1", objetivo: "" },
        { archivo: "Copia_de_18-08_La_botella_de_Bolonia.mp4", tema: "La botella de Bolonia", objetivo: "" },
        { archivo: "Copia_de_18-09_Elasticidad_a_temperaturas_bajas.mp4", tema: "Elasticidad a temperaturas bajas", objetivo: "" }
    ],
    19: [
        { archivo: "Copia_de_19-01_Diapasón_con_luz.mp4", tema: "Diapasón con luz", objetivo: "" },
        { archivo: "Copia_de_19-02_Pesa_en_un_resorte.mp4", tema: "Pesa en un resorte", objetivo: "" },
        { archivo: "Copia_de_19-03_Movimiento_armónico_simple_en_un_riel_de_aire.mp4", tema: "Movimiento armónico simple en un riel de aire", objetivo: "" },
        { archivo: "Copia_de_19-04_Péndulo_de_torsión.mp4", tema: "Péndulo de torsión", objetivo: "" },
        { archivo: "Copia_de_19-05_Péndulos_con_bolitas_de_masa_diferente.mp4", tema: "Péndulos con bolitas de masa diferente", objetivo: "" },
        { archivo: "Copia_de_19-06_Péndulos_con_hilos_de_longitud_diferente_(4_a1).mp4", tema: "Péndulos con hilos de longitud diferente (4 a 1)", objetivo: "" },
        { archivo: "Copia_de_19-07_Aros_y_arcos.mp4", tema: "Aros y arcos", objetivo: "" },
        { archivo: "Copia_de_19-08_Péndulo_que_oscila_con_amplitud_grande.mp4", tema: "Péndulo que oscila con amplitud grande", objetivo: "" },
        { archivo: "Copia_de_19-09_Péndulo_físico.mp4", tema: "Péndulo físico", objetivo: "" },
        { archivo: "Copia_de_19-10_Péndulo_con_plano_de_oscilación_variable.mp4", tema: "Péndulo con plano de oscilación variable", objetivo: "" },
        { archivo: "Copia_de_19-11_Movimiento_circular_vs._el_de_una_pesa_en_un_resorte.mp4", tema: "Movimiento circular vs. el de una pesa en un resorte", objetivo: "" },
        { archivo: "Copia_de_19-12_Movimiento_circular_vs._el_de_un_péndulo.mp4", tema: "Movimiento circular vs. el de un péndulo", objetivo: "" },
        { archivo: "Copia_de_19-13_Corrimiento_de_fase.mp4", tema: "Corrimiento de fase", objetivo: "" },
        { archivo: "Copia_de_19-14_Movimiento_periódico_que_no_es_armónico_simple.mp4", tema: "Movimiento periódico que no es armónico simple", objetivo: "" },
        { archivo: "Copia_de_19-15_Balanza_de_inercia.mp4", tema: "Balanza de inercia", objetivo: "" },
        { archivo: "Copia_de_19-16_Ondas_de_péndulos.mp4", tema: "Ondas de péndulos", objetivo: "" },
        { archivo: "Copia_de_19-17_Figuras_de_Lissajous.mp4", tema: "Figuras de Lissajous", objetivo: "" }
    ],
    20: [
        { archivo: "Copia_de_20-01_Resonancia_de_un_péndulo_de_bola_de_boliche.mp4", tema: "Resonancia de un péndulo de bola de boliche", objetivo: "" },
        { archivo: "Copia_de_20-02_Péndulos_movidos_por_resonancia.mp4", tema: "Péndulos movidos por resonancia", objetivo: "" },
        { archivo: "Copia_de_20-03_Resorte_forzado_y_pesa.mp4", tema: "Resorte forzado y pesa", objetivo: "" },
        { archivo: "Copia_de_20-04_Bombeando_un_péndulo.mp4", tema: "Bombeando un péndulo", objetivo: "" },
        { archivo: "Copia_de_20-05_Tacómetro_de_cañas.mp4", tema: "Tacómetro de cañas", objetivo: "" },
        { archivo: "Copia_de_20-06_Rompiendo_vidrio_con_sonido.mp4", tema: "Rompiendo vidrio con sonido", objetivo: "" },
        { archivo: "Copia_de_20-07_Péndulo_acoplados.mp4", tema: "Péndulo acoplados", objetivo: "" },
        { archivo: "Copia_de_20-08_El_péndulo_de_Wilberforce.mp4", tema: "El péndulo de Wilberforce", objetivo: "" }
    ],
    21: [
        { archivo: "Copia_de_21-01_Ondas_en_una_cuerda.mp4", tema: "Ondas en una cuerda", objetivo: "" },
        { archivo: "Copia_de_21-02_Pulso_en_una_cadena_en_movimiento.mp4", tema: "Pulso en una cadena en movimiento", objetivo: "" },
        { archivo: "Copia_de_21-03_La_velocidad_de_onda_depende_de_la_tensión.mp4", tema: "La velocidad de onda depende de la tensión", objetivo: "" },
        { archivo: "Copia_de_21-04_Ondas_de_torsión.mp4", tema: "Ondas de torsión", objetivo: "" },
        { archivo: "Copia_de_21-05_Velocidad_de_onda.mp4", tema: "Velocidad de onda", objetivo: "" },
        { archivo: "Copia_de_21-06_Modelo_de_ondas_longitudinales.mp4", tema: "Modelo de ondas longitudinales", objetivo: "" },
        { archivo: "Copia_de_21-07_Ondas_longitudinales_en_un_slinky.mp4", tema: "Ondas longitudinales en un slinky", objetivo: "" },
        { archivo: "Copia_de_21-08_Superposición_de_ondas.mp4", tema: "Superposición de ondas", objetivo: "" },
        { archivo: "Copia_de_21-09_Reflexión_de_ondas.mp4", tema: "Reflexión de ondas", objetivo: "" },
        { archivo: "Copia_de_21-10_Reflexión_de_una_onda_de_resorte.mp4", tema: "Reflexión de una onda de resorte", objetivo: "" },
        { archivo: "Copia_de_21-11_Acoplamiento_de_ondas.mp4", tema: "Acoplamiento de ondas", objetivo: "" },
        { archivo: "Copia_de_21-12_Refracción_de_ondas_de_agua.mp4", tema: "Refracción de ondas de agua", objetivo: "" },
        { archivo: "Copia_de_21-13_Difracción_de_ondas_de_agua_por_una_rendija.mp4", tema: "Difracción de ondas de agua por una rendija", objetivo: "" },
        { archivo: "Copia_de_21-14_Interferencia_de_ondas_de_agua_provenientes_de_una_doble_rendija.mp4", tema: "Interferencia de ondas de agua provenientes de una doble rendija", objetivo: "" },
        { archivo: "Copia_de_21-15_El_patrón_moiré.mp4", tema: "El patrón moiré", objetivo: "" }
    ],
    22: [
        { archivo: "Copia_de_22-01_Ondas_estacionarias_longitudinales.mp4", tema: "Ondas estacionarias longitudinales", objetivo: "" },
        { archivo: "Copia_de_22-02_Ondas_estacionarias_en_un_slinky.mp4", tema: "Ondas estacionarias en un slinky", objetivo: "" },
        { archivo: "Copia_de_22-03_Ondas_estacionarias.mp4", tema: "Ondas estacionarias", objetivo: "" },
        { archivo: "Copia_de_22-04_Ondas_estacionarias_de_tres_tensiones.mp4", tema: "Ondas estacionarias de tres tensiones", objetivo: "" },
        { archivo: "Copia_de_22-05_Ondas_estacionarias_en_un_tubo_de_hule.mp4", tema: "Ondas estacionarias en un tubo de hule", objetivo: "" },
        { archivo: "Copia_de_22-06_Parche_de_tambor.mp4", tema: "Parche de tambor", objetivo: "" },
        { archivo: "Copia_de_22-07_Las_placas_de_Chladni.mp4", tema: "Las placas de Chladni", objetivo: "" }
    ],
    23: [
        { archivo: "Copia_de_23-01_Guitarra_y_osciloscopio.mp4", tema: "Guitarra y osciloscopio", objetivo: "" },
        { archivo: "Copia_de_23-02_Sonómetro.mp4", tema: "Sonómetro", objetivo: "" },
        { archivo: "Copia_de_23-03_Diapasones.mp4", tema: "Diapasones", objetivo: "" },
        { archivo: "Copia_de_23-04_Diapasón_ajustable.mp4", tema: "Diapasón ajustable", objetivo: "" },
        { archivo: "Copia_de_23-05_Oscilaciones_de_una_barra_rectangular.mp4", tema: "Oscilaciones de una barra rectangular", objetivo: "" },
        { archivo: "Copia_de_23-06_Barras_metálicas_de_frecuencia_alta.mp4", tema: "Barras metálicas de frecuencia alta", objetivo: "" },
        { archivo: "Copia_de_23-07_Barras_de_xilófono.mp4", tema: "Barras de xilófono", objetivo: "" },
        { archivo: "Copia_de_23-08_Varillas_cantantes.mp4", tema: "Varillas cantantes", objetivo: "" }
    ],
    24: [
        { archivo: "Copia_de_24-01_Sirena_en_el_vacío.mp4", tema: "Sirena en el vacío", objetivo: "" },
        { archivo: "Copia_de_24-02_Disco_sirena.mp4", tema: "Disco sirena", objetivo: "" },
        { archivo: "Copia_de_24-03_Engranaje_y_tarjeta.mp4", tema: "Engranaje y tarjeta", objetivo: "" },
        { archivo: "Copia_de_24-04_Bocina_recortada.mp4", tema: "Bocina recortada", objetivo: "" },
        { archivo: "Copia_de_24-05_Velocidad_del_sonido_a_diferentes_temperaturas.mp4", tema: "Velocidad del sonido a diferentes temperaturas", objetivo: "" },
        { archivo: "Copia_de_24-06_Sonido_en_helio.mp4", tema: "Sonido en helio", objetivo: "" },
        { archivo: "Copia_de_24-07_Sintetizador_de_Fourier.mp4", tema: "Sintetizador de Fourier", objetivo: "" },
        { archivo: "Copia_de_24-08_Formantes_de_las_vocales.mp4", tema: "Formantes de las vocales", objetivo: "" },
        { archivo: "Copia_de_24-09_Acoplamiento_acústico.mp4", tema: "Acoplamiento acústico", objetivo: "" },
        { archivo: "Copia_de_24-10_Pulsos_con_diapasones.mp4", tema: "Pulsos con diapasones", objetivo: "" },
        { archivo: "Copia_de_24-11_Pulsos_con_bocina_y_osciloscopio.mp4", tema: "Pulsos con bocina y osciloscopio", objetivo: "" },
        { archivo: "Copia_de_24-12_Interferencia_con_dos_bocinas.mp4", tema: "Interferencia con dos bocinas", objetivo: "" },
        { archivo: "Copia_de_24-13_Efecto_Doppler.mp4", tema: "Efecto Doppler", objetivo: "" }
    ],
    25: [
        { archivo: "Copia_de_25-01_Tubo_resonante_con_pistón.mp4", tema: "Tubo resonante con pistón", objetivo: "" },
        { archivo: "Copia_de_25-02_Tubos_resonantes_(tres_longitudes).mp4", tema: "Tubos resonantes (tres longitudes)", objetivo: "" },
        { archivo: "Copia_de_25-03_El_tubo_de_Kundt.mp4", tema: "El tubo de Kundt", objetivo: "" },
        { archivo: "Copia_de_25-04_Tubo_resonante.mp4", tema: "Tubo resonante", objetivo: "" },
        { archivo: "Copia_de_25-05_Tubos_con_un_extremo_abierto_o_cerrado.mp4", tema: "Tubos con un extremo abierto o cerrado", objetivo: "" },
        { archivo: "Copia_de_25-06_Silbato_con_pistón.mp4", tema: "Silbato con pistón", objetivo: "" },
        { archivo: "Copia_de_25-07_Tubos_cantores.mp4", tema: "Tubos cantores", objetivo: "" },
        { archivo: "Copia_de_25-08_Diapasones_en_cajas_de_resonancia.mp4", tema: "Diapasones en cajas de resonancia", objetivo: "" },
        { archivo: "Copia_de_25-09_Resonadores_de_Helmholtz.mp4", tema: "Resonadores de Helmholtz", objetivo: "" }
    ],
    26: [
        { archivo: "Copia_de_26-01_Barómetro_de_mercurio_en_el_vacío.mp4", tema: "Barómetro de mercurio en el vacío", objetivo: "" },
        { archivo: "Copia_de_26-02_Barómetro_aneroide_en_el_vacío.mp4", tema: "Barómetro aneroide en el vacío", objetivo: "" },
        { archivo: "Copia_de_26-03_Hemisferios_de_Magdeburgo.mp4", tema: "Hemisferios de Magdeburgo", objetivo: "" },
        { archivo: "Copia_de_26-04_Placas_adhesivas.mp4", tema: "Placas adhesivas", objetivo: "" },
        { archivo: "Copia_de_26-05_Lata_aplastada.mp4", tema: "Lata aplastada", objetivo: "" },
        { archivo: "Copia_de_26-06_Bazuca_de_vacío.mp4", tema: "Bazuca de vacío", objetivo: "" },
        { archivo: "Copia_de_26-07_Aplastamiento_de_un_barril.mp4", tema: "Aplastamiento de un barril", objetivo: "" },
        { archivo: "Copia_de_26-08_Ascensor_de_presión_de_aire.mp4", tema: "Ascensor de presión de aire", objetivo: "" },
        { archivo: "Copia_de_26-09_Tablilla_de_madera_y_presión_del_aire.mp4", tema: "Tablilla de madera y presión del aire", objetivo: "" },
        { archivo: "Copia_de_26-10_Levantando_una_silla_con_una_hoja_de_hule.mp4", tema: "Levantando una silla con una hoja de hule", objetivo: "" }
    ],
    27: [
        { archivo: "Copia_de_27-01_Tubos_con_niveles_iguales.mp4", tema: "Tubos con niveles iguales", objetivo: "" },
        { archivo: "Copia_de_27-02_Presión_vs._Profundidad.mp4", tema: "Presión vs. Profundidad", objetivo: "" },
        { archivo: "Copia_de_27-03_Presión_vs._Profundidad_en_agua_y_en_alcohol.mp4", tema: "Presión vs. Profundidad en agua y en alcohol", objetivo: "" },
        { archivo: "Copia_de_27-04_Presión_independiente_de_la_dirección.mp4", tema: "Presión independiente de la dirección", objetivo: "" },
        { archivo: "Copia_de_27-05_Compresión_de_agua-aire.mp4", tema: "Compresión de agua-aire", objetivo: "" },
        { archivo: "Copia_de_27-06_Tubo_en_U_con_agua_y_mercurio.mp4", tema: "Tubo en U con agua y mercurio", objetivo: "" },
        { archivo: "Copia_de_27-07_Prensa_hidráulica.mp4", tema: "Prensa hidráulica", objetivo: "" },
        { archivo: "Copia_de_27-08_Paradoja_hidrostática.mp4", tema: "Paradoja hidrostática", objetivo: "" }
    ],
    28: [
        { archivo: "Copia_de_28-01_Hidrómetro.mp4", tema: "Hidrómetro", objetivo: "" },
        { archivo: "Copia_de_28-02_Peso_del_aire.mp4", tema: "Peso del aire", objetivo: "" },
        { archivo: "Copia_de_28-03_Fuerza_de_empuje.mp4", tema: "Fuerza de empuje", objetivo: "" },
        { archivo: "Copia_de_28-04_El_principio_de_Arquímedes.mp4", tema: "El principio de Arquímedes", objetivo: "" },
        { archivo: "Copia_de_28-05_Flotación_de_madera_con_pesas.mp4", tema: "Flotación de madera con pesas", objetivo: "" },
        { archivo: "Copia_de_28-06_Maderas_de_densidad_diferente.mp4", tema: "Maderas de densidad diferente", objetivo: "" },
        { archivo: "Copia_de_28-07_Bola_densímetro.mp4", tema: "Bola densímetro", objetivo: "" },
        { archivo: "Copia_de_28-08_Bola_densímetro_y_frijoles.mp4", tema: "Bola densímetro y frijoles", objetivo: "" },
        { archivo: "Copia_de_28-09_Barco_de_guerra_en_la_tina.mp4", tema: "Barco de guerra en la tina", objetivo: "" },
        { archivo: "Copia_de_28-10_Flotación_en_diversos_líquidos.mp4", tema: "Flotación en diversos líquidos", objetivo: "" },
        { archivo: "Copia_de_28-11_Barra_cuadrada_que_flota.mp4", tema: "Barra cuadrada que flota", objetivo: "" },
        { archivo: "Copia_de_28-12_Globo_de_helio_en_un_frasco_de_vidrio.mp4", tema: "Globo de helio en un frasco de vidrio", objetivo: "" },
        { archivo: "Copia_de_28-13_Globo_de_helio_en_nitrógeno_líquido.mp4", tema: "Globo de helio en nitrógeno líquido", objetivo: "" },
        { archivo: "Copia_de_28-14_Buzo_cartesiano.mp4", tema: "Buzo cartesiano", objetivo: "" }
    ],
    29: [
        { archivo: "Copia_de_29-01_Tubo_de_Pitot.mp4", tema: "Tubo de Pitot", objetivo: "" },
        { archivo: "Copia_de_29-02_Rotor_de_Flettner.mp4", tema: "Rotor de Flettner", objetivo: "" },
        { archivo: "Copia_de_29-03_Bola_curva.mp4", tema: "Bola curva", objetivo: "" },
        { archivo: "Copia_de_29-04_Pelota_que_flota_en_un_chorro_de_aire.mp4", tema: "Pelota que flota en un chorro de aire", objetivo: "" },
        { archivo: "Copia_de_29-05_Placa_suspendida_en_un_chorro_de_aire.mp4", tema: "Placa suspendida en un chorro de aire", objetivo: "" },
        { archivo: "Copia_de_29-06_Tarjetas_paralelas_suspendidas.mp4", tema: "Tarjetas paralelas suspendidas", objetivo: "" },
        { archivo: "Copia_de_29-07_Cañón_de_vórtices.mp4", tema: "Cañón de vórtices", objetivo: "" },
        { archivo: "Copia_de_29-08_Separación_de_una_mezcla.mp4", tema: "Separación de una mezcla", objetivo: "" },
        { archivo: "Copia_de_29-09_Tubo_de_tornado.mp4", tema: "Tubo de tornado", objetivo: "" },
        { archivo: "Copia_de_29-10_Sifón.mp4", tema: "Sifón", objetivo: "" },
        { archivo: "Copia_de_29-11_Velocidad_del_agua_que_sale_de_una_jeringa.mp4", tema: "Velocidad del agua que sale de una jeringa", objetivo: "" },
        { archivo: "Copia_de_29-12_Caída_uniforme_de_presión.mp4", tema: "Caída uniforme de presión", objetivo: "" },
        { archivo: "Copia_de_29-13_El_principio_de_Bernoulli.mp4", tema: "El principio de Bernoulli", objetivo: "" },
        { archivo: "Copia_de_29-14_Martillo_de_agua.mp4", tema: "Martillo de agua", objetivo: "" },
        { archivo: "Copia_de_29-15_El_tanque_de_Torricelli.mp4", tema: "El tanque de Torricelli", objetivo: "" },
        { archivo: "Copia_de_29-16_Acelerómetros.mp4", tema: "Acelerómetros", objetivo: "" },
        { archivo: "Copia_de_29-17_Paraboloide_de_revolución.mp4", tema: "Paraboloide de revolución", objetivo: "" },
        { archivo: "Copia_de_29-18_Abrevaderos_que_rotan.mp4", tema: "Abrevaderos que rotan", objetivo: "" }
    ],
    30: [
        { archivo: "Copia_de_30-01_Disco_y_tensión_superficial.mp4", tema: "Disco y tensión superficial", objetivo: "" },
        { archivo: "Copia_de_30-02_Placa_metálica_que_flota.mp4", tema: "Placa metálica que flota", objetivo: "" },
        { archivo: "Copia_de_30-03_Jalón_de_una_película_de_jabón.mp4", tema: "Jalón de una película de jabón", objetivo: "" },
        { archivo: "Copia_de_30-04_Formas_de_películas_de_jabón.mp4", tema: "Formas de películas de jabón", objetivo: "" },
        { archivo: "Copia_de_30-05_Dos_burbujas_de_jabón.mp4", tema: "Dos burbujas de jabón", objetivo: "" },
        { archivo: "Copia_de_30-06_Hilo_de_energía_mínima.mp4", tema: "Hilo de energía mínima", objetivo: "" },
        { archivo: "Copia_de_30-07_Acción_capilar.mp4", tema: "Acción capilar", objetivo: "" },
        { archivo: "Copia_de_30-08_Tubos_capilares.mp4", tema: "Tubos capilares", objetivo: "" }
    ],
    31: [
        { archivo: "Copia_de_31-01_Fricción_del_aire.mp4", tema: "Fricción del aire", objetivo: "" },
        { archivo: "Copia_de_31-02_Arrastre_viscoso.mp4", tema: "Arrastre viscoso", objetivo: "" },
        { archivo: "Copia_de_31-03_Caída_de_una_pelota.mp4", tema: "Caída de una pelota", objetivo: "" },
        { archivo: "Copia_de_31-04_Cambio_de_la_viscosidad_de_un_gas_con_la_temperatura.mp4", tema: "Cambio de la viscosidad de un gas con la temperatura", objetivo: "" },
        { archivo: "Copia_de_31-05_Viscosidad_de_alcohol_a_temperaturas_bajas.mp4", tema: "Viscosidad de alcohol a temperaturas bajas", objetivo: "" },
        { archivo: "Copia_de_31-06_Viscosidad_del_aceite.mp4", tema: "Viscosidad del aceite", objetivo: "" }
    ],
    32: [
        { archivo: "Copia_de_32-01_Expansión_térmica_de_un_alambre.mp4", tema: "Expansión térmica de un alambre", objetivo: "" },
        { archivo: "Copia_de_32-02_Tira_bimetálica.mp4", tema: "Tira bimetálica", objetivo: "" },
        { archivo: "Copia_de_32-03_Modelo_de_un_termostato.mp4", tema: "Modelo de un termostato", objetivo: "" },
        { archivo: "Copia_de_32-04_Corta_clavijas.mp4", tema: "Corta clavijas", objetivo: "" },
        { archivo: "Copia_de_32-05_Expansión_térmica.mp4", tema: "Expansión térmica", objetivo: "" },
        { archivo: "Copia_de_32-06_Expansión_térmica_del_aire.mp4", tema: "Expansión térmica del aire", objetivo: "" },
        { archivo: "Copia_de_32-07_Expansión_térmica_del_agua.mp4", tema: "Expansión térmica del agua", objetivo: "" },
        { archivo: "Copia_de_32-08_El_coeficiente_de_expansión_negativo_del_agua.mp4", tema: "El coeficiente de expansión negativo del agua", objetivo: "" },
        { archivo: "Copia_de_32-09_Explosión_de_polvo.mp4", tema: "Explosión de polvo", objetivo: "" },
        { archivo: "Copia_de_32-10_Escalamiento_en_un_cubo.mp4", tema: "Escalamiento en un cubo", objetivo: "" },
        { archivo: "Copia_de_32-11_Calor_específico.mp4", tema: "Calor específico", objetivo: "" },
        { archivo: "Copia_de_32-12_Calor_específico_de_varillas_metálicas.mp4", tema: "Calor específico de varillas metálicas", objetivo: "" },
        { archivo: "Copia_de_32-13_Hirviendo_agua_en_un_vaso_de_papel.mp4", tema: "Hirviendo agua en un vaso de papel", objetivo: "" },
        { archivo: "Copia_de_32-14_Capacidad_calorífica_de_un_globo_de_agua.mp4", tema: "Capacidad calorífica de un globo de agua", objetivo: "" }
    ],
    33: [
        { archivo: "Copia_de_33-01_Conductividad_térmica.mp4", tema: "Conductividad térmica", objetivo: "" },
        { archivo: "Copia_de_33-02_El_fenómeno_de_Leidenfrost.mp4", tema: "El fenómeno de Leidenfrost", objetivo: "" },
        { archivo: "Copia_de_33-03_Radiómetro.mp4", tema: "Radiómetro", objetivo: "" },
        { archivo: "Copia_de_33-04_Radiación_de_dos_latas.mp4", tema: "Radiación de dos latas", objetivo: "" },
        { archivo: "Copia_de_33-05_Cubo_radiante.mp4", tema: "Cubo radiante", objetivo: "" },
        { archivo: "Copia_de_33-06_Aislamiento_(botellas_de_Dewar).mp4", tema: "Aislamiento (botellas de Dewar)", objetivo: "" },
        { archivo: "Copia_de_33-07_Corrientes_de_convección.mp4", tema: "Corrientes de convección", objetivo: "" }
    ],
    34: [
        { archivo: "Copia_de_34-01_Taladro_y_clavija.mp4", tema: "Taladro y clavija", objetivo: "" },
        { archivo: "Copia_de_34-02_Equivalente_mecánico_del_calor.mp4", tema: "Equivalente mecánico del calor", objetivo: "" },
        { archivo: "Copia_de_34-03_Enfriamiento_por_expansión_de_CO2.mp4", tema: "Enfriamiento por expansión de CO2", objetivo: "" },
        { archivo: "Copia_de_34-04_Expansión_adiabática.mp4", tema: "Expansión adiabática", objetivo: "" },
        { archivo: "Copia_de_34-05_Jeringa_de_fuego.mp4", tema: "Jeringa de fuego", objetivo: "" },
        { archivo: "Copia_de_34-06_La_máquina_de_Stirling.mp4", tema: "La máquina de Stirling", objetivo: "" },
        { archivo: "Copia_de_34-07_La_máquina_de_Herón.mp4", tema: "La máquina de Herón", objetivo: "" },
        { archivo: "Copia_de_34-08_Sacacorchos.mp4", tema: "Sacacorchos", objetivo: "" }
    ],
    35: [
        { archivo: "Copia_de_35-01_Nitrógeno_líquido_y_globo.mp4", tema: "Nitrógeno líquido y globo", objetivo: "" },
        { archivo: "Copia_de_35-02_Hirviendo_agua_a_presión_reducida.mp4", tema: "Hirviendo agua a presión reducida", objetivo: "" },
        { archivo: "Copia_de_35-03_El_punto_crítico_del_CO2.mp4", tema: "El punto crítico del CO2", objetivo: "" },
        { archivo: "Copia_de_35-04_Pájaro_bebedor.mp4", tema: "Pájaro bebedor", objetivo: "" },
        { archivo: "Copia_de_35-05_Congelamiento_mediante_ebullición.mp4", tema: "Congelamiento mediante ebullición", objetivo: "" },
        { archivo: "Copia_de_35-06_Crióforo.mp4", tema: "Crióforo", objetivo: "" },
        { archivo: "Copia_de_35-07_Bomba_de_hielo.mp4", tema: "Bomba de hielo", objetivo: "" },
        { archivo: "Copia_de_35-08_Recongelación.mp4", tema: "Recongelación", objetivo: "" },
        { archivo: "Copia_de_35-09_Globos_de_helio_y_CO2_en_nitrógeno_líquido.mp4", tema: "Globos de helio y CO2 en nitrógeno líquido", objetivo: "" },
        { archivo: "Copia_de_35-10_Sublimación_del_CO2.mp4", tema: "Sublimación del CO2", objetivo: "" },
        { archivo: "Copia_de_35-11_Pelota_de_slime_o_cieno.mp4", tema: "Pelota de slime o cieno", objetivo: "" }
    ],
    36: [
        { archivo: "Copia_de_36-01_Presión_vs._Volumen.mp4", tema: "Presión vs. Volumen", objetivo: "" },
        { archivo: "Copia_de_36-02_Presión_vs._Temperatura.mp4", tema: "Presión vs. Temperatura", objetivo: "" },
        { archivo: "Copia_de_36-03_Simulación_de_aumento_de_temperatura.mp4", tema: "Simulación de aumento de temperatura", objetivo: "" },
        { archivo: "Copia_de_36-04_Simulación_de_presión_vs._volumen.mp4", tema: "Simulación de presión vs. volumen", objetivo: "" },
        { archivo: "Copia_de_36-05_Simulación_de_la_equipartición_de_la_energía.mp4", tema: "Simulación de la equipartición de la energía", objetivo: "" },
        { archivo: "Copia_de_36-06_Teoría_cinética_del_mercurio.mp4", tema: "Teoría cinética del mercurio", objetivo: "" },
        { archivo: "Copia_de_36-07_Movimiento_browniano.mp4", tema: "Movimiento browniano", objetivo: "" },
        { archivo: "Copia_de_36-08_Simulación_del_movimiento_browniano.mp4", tema: "Simulación del movimiento browniano", objetivo: "" },
        { archivo: "Copia_de_36-09_Difusión.mp4", tema: "Difusión", objetivo: "" },
        { archivo: "Copia_de_36-10_Simulación_de_la_difusión.mp4", tema: "Simulación de la difusión", objetivo: "" },
        { archivo: "Copia_de_36-11_Difusión_del_bromo.mp4", tema: "Difusión del bromo", objetivo: "" },
        { archivo: "Copia_de_36-12_Curva_gaussiana.mp4", tema: "Curva gaussiana", objetivo: "" },
        { archivo: "Copia_de_36-13_Simulación_de_la_expansión_libre.mp4", tema: "Simulación de la expansión libre", objetivo: "" }
    ],
    37: [
        { archivo: "Copia_de_37-01_Superconductores.mp4", tema: "Superconductores", objetivo: "" },
        { archivo: "Copia_de_37-02_Modelos_de_cristales.mp4", tema: "Modelos de cristales", objetivo: "" },
        { archivo: "Copia_de_37-03_Fallas_en_cristales.mp4", tema: "Fallas en cristales", objetivo: "" }
    ],
    38: [
        { archivo: "Copia_de_38-01_Termistor.mp4", tema: "Termistor", objetivo: "" },
        { archivo: "Copia_de_38-02_Imán_temoeléctrico.mp4", tema: "Imán termoeléctrico", objetivo: "" },
        { archivo: "Copia_de_38-03_Bomba_de_calor_termoeléctrica.mp4", tema: "Bomba de calor termoeléctrica", objetivo: "" },
        { archivo: "Copia_de_38-04_Termopar.mp4", tema: "Termopar", objetivo: "" }
    ],

    // --- FÍSICA III ---
    39: [
        { archivo: "Copia_de_39-01_Varillas_electrostáticas.mp4", tema: "Varillas electrostáticas", objetivo: "" },
        { archivo: "Copia_de_39-02_Varilla_y_tela_electrostáticas.mp4", tema: "Varilla y tela electrostáticas", objetivo: "" },
        { archivo: "Copia_de_39-03_Desviación_electrostática_de_pelotas_de_ping-pong.mp4", tema: "Desviación electrostática de pelotas de ping-pong", objetivo: "" },
        { archivo: "Copia_de_39-04_Pelotas_de_ping-pong_electrostáticas.mp4", tema: "Pelotas de ping-pong electrostáticas", objetivo: "" },
        { archivo: "Copia_de_39-05_Conductores_y_aislantes.mp4", tema: "Conductores y aislantes", objetivo: "" },
        { archivo: "Copia_de_39-06_Encendedor_piezoeléctrico.mp4", tema: "Encendedor piezoeléctrico", objetivo: "" }
    ],
    40: [
        { archivo: "Copia_de_40-01_Inducción_electrostática.mp4", tema: "Inducción electrostática", objetivo: "" },
        { archivo: "Copia_de_40-02_Atracción_de_una_varilla_metálica.mp4", tema: "Atracción de una varilla metálica", objetivo: "" },
        { archivo: "Copia_de_40-03_Electróforo.mp4", tema: "Electróforo", objetivo: "" },
        { archivo: "Copia_de_40-04_Generador_de_inducción.mp4", tema: "Generador de inducción", objetivo: "" },
        { archivo: "Copia_de_40-05_Gotero_de_Kelvin.mp4", tema: "Gotero de Kelvin", objetivo: "" },
        { archivo: "Copia_de_40-06_Brújula_de_madera.mp4", tema: "Brújula de madera", objetivo: "" }
    ],
    41: [
        { archivo: "Copia_de_41-01_Generador_de_van_de_Graaff.mp4", tema: "Generador de van de Graaff", objetivo: "" },
        { archivo: "Copia_de_41-02_Van_de_Graaff_con_gallardetes.mp4", tema: "Van de Graaff con gallardetes", objetivo: "" },
        { archivo: "Copia_de_41-03_Van_de_Graaff_y_vara.mp4", tema: "Van de Graaff y vara", objetivo: "" },
        { archivo: "Copia_de_41-04_Campo_eléctrico.mp4", tema: "Campo eléctrico", objetivo: "" },
        { archivo: "Copia_de_41-05_Pararrayos.mp4", tema: "Pararrayos", objetivo: "" },
        { archivo: "Copia_de_41-06_Rehilete.mp4", tema: "Rehilete", objetivo: "" },
        { archivo: "Copia_de_41-07_Punta_y_vela.mp4", tema: "Punta y vela", objetivo: "" },
        { archivo: "Copia_de_41-08_La_jaula_de_Faraday.mp4", tema: "La jaula de Faraday", objetivo: "" },
        { archivo: "Copia_de_41-09_Cubeta_de_hielo_de_Faraday.mp4", tema: "Cubeta de hielo de Faraday", objetivo: "" },
        { archivo: "Copia_de_41-10_Precipitación_de_humos.mp4", tema: "Precipitación de humos", objetivo: "" },
        { archivo: "Copia_de_41-11_Tubo_de_descarga_electrónica_con_rueda.mp4", tema: "Tubo de descarga electrónica con rueda", objetivo: "" }
    ],
    42: [
        { archivo: "Copia_de_42-01_Resistencia_de_alambres.mp4", tema: "Resistencia de alambres", objetivo: "" },
        { archivo: "Copia_de_42-02_La_ley_de_Ohm.mp4", tema: "La ley de Ohm", objetivo: "" },
        { archivo: "Copia_de_42-03_Alambre_calentado.mp4", tema: "Alambre calentado", objetivo: "" },
        { archivo: "Copia_de_42-04_Alambre_enfriado.mp4", tema: "Alambre enfriado", objetivo: "" },
        { archivo: "Copia_de_42-05_Modelo_del_movimiento_de_los_electrones.mp4", tema: "Modelo del movimiento de los electrones", objetivo: "" },
        { archivo: "Copia_de_42-06_Resistores_en_serie-paralelo.mp4", tema: "Resistores en serie-paralelo", objetivo: "" },
        { archivo: "Copia_de_42-07_Lámparas_en_serie-paralelo.mp4", tema: "Lámparas en serie-paralelo", objetivo: "" },
        { archivo: "Copia_de_42-08_Puente_de_Wheatstone.mp4", tema: "Puente de Wheatstone", objetivo: "" },
        { archivo: "Copia_de_42-09_Galvanómetro_como_voltímetro_y_amperímetro.mp4", tema: "Galvanómetro como voltímetro y amperímetro", objetivo: "" },
        { archivo: "Copia_de_42-10_Conservación_de_la_corriente.mp4", tema: "Conservación de la corriente", objetivo: "" }
    ],
    43: [
        { archivo: "Copia_de_43-01_Caída_de_voltaje_a_lo_largo_de_un_alambre.mp4", tema: "Caída de voltaje a lo largo de un alambre", objetivo: "" },
        { archivo: "Copia_de_43-02_Suma_de_caídas_IR.mp4", tema: "Suma de caídas IR", objetivo: "" },
        { archivo: "Copia_de_43-03_Resistencia_interna_de_pilas.mp4", tema: "Resistencia interna de pilas", objetivo: "" },
        { archivo: "Copia_de_43-04_Efecto_de_un_voltímetro_de_baja_resitencia.mp4", tema: "Efecto de un voltímetro de baja resistencia", objetivo: "" },
        { archivo: "Copia_de_43-05_Caídas_de_voltaje_en_los_alambres_de_una_casa.mp4", tema: "Caídas de voltaje en los alambres de una casa", objetivo: "" },
        { archivo: "Copia_de_43-06_Pérdidas_I²R.mp4", tema: "Pérdidas I²R", objetivo: "" },
        { archivo: "Copia_de_43-07_Friendo_una_salchicha.mp4", tema: "Friendo una salchicha", objetivo: "" }
    ],
    44: [
        { archivo: "Copia_de_44-01_Resistividad_de_un_foco_de_neón.mp4", tema: "Resistividad de un foco de neón", objetivo: "" },
        { archivo: "Copia_de_44-02_Lámparas_de_carbono_y_de_tungsteno.mp4", tema: "Lámparas de carbono y de tungsteno", objetivo: "" },
        { archivo: "Copia_de_44-03_Diodo.mp4", tema: "Diodo", objetivo: "" },
        { archivo: "Copia_de_44-04_Circuito_rectificador.mp4", tema: "Circuito rectificador", objetivo: "" },
        { archivo: "Copia_de_44-05_Amplificador_de_transistores.mp4", tema: "Amplificador de transistores", objetivo: "" }
    ],
    45: [
        { archivo: "Copia_de_45-01_Conductividad_de_soluciones.mp4", tema: "Conductividad de soluciones", objetivo: "" },
        { archivo: "Copia_de_45-02_Efecto_batería.mp4", tema: "Efecto batería", objetivo: "" },
        { archivo: "Copia_de_45-03_Friendo_un_pepinillo.mp4", tema: "Friendo un pepinillo", objetivo: "" },
        { archivo: "Copia_de_45-04_Eletrólisis.mp4", tema: "Electrólisis", objetivo: "" },
        { archivo: "Copia_de_45-05_Galvanoplastia.mp4", tema: "Galvanoplastia", objetivo: "" }
    ],
    46: [
        { archivo: "Copia_de_46-01_Botellas_de_Leyden_en_un_generador_Topler-Holtz.mp4", tema: "Botellas de Leyden en un generador Topler-Holtz", objetivo: "" },
        { archivo: "Copia_de_46-02_Condensador_de_placas_paralelas.mp4", tema: "Condensador de placas paralelas", objetivo: "" },
        { archivo: "Copia_de_46-03_Condensadores_de_placas_parelelas_con_dieléctricos.mp4", tema: "Condensadores de placas paralelas con dieléctricos", objetivo: "" },
        { archivo: "Copia_de_46-04_Condensador_de_placas_rotativas.mp4", tema: "Condensador de placas rotativas", objetivo: "" },
        { archivo: "Copia_de_46-05_Pila_y_condensador_de_placas_separables.mp4", tema: "Pila y condensador de placas separables", objetivo: "" },
        { archivo: "Copia_de_46-06_Condensador_explosivo.mp4", tema: "Condensador explosivo", objetivo: "" },
        { archivo: "Copia_de_46-07_Fuerza_sobre_un_dieléctrico.mp4", tema: "Fuerza sobre un dieléctrico", objetivo: "" },
        { archivo: "Copia_de_46-08_Condensador_desarmable.mp4", tema: "Condensador desarmable", objetivo: "" },
        { archivo: "Copia_de_46-09_Botella_de_Leyden_conectada_a_tierra.mp4", tema: "Botella de Leyden conectada a tierra", objetivo: "" },
        { archivo: "Copia_de_46-10_Condensadores_en_serie-paralelo.mp4", tema: "Condensadores en serie-paralelo", objetivo: "" },
        { archivo: "Copia_de_46-11_Curva_de_carga_de_un_circuito_RC.mp4", tema: "Curva de carga de un circuito RC", objetivo: "" },
        { archivo: "Copia_de_46-12_Oscilador_de_relajación.mp4", tema: "Oscilador de relajación", objetivo: "" }
    ],
    47: [
        { archivo: "Copia_de_47-01_Atracción-repulsión_magnética.mp4", tema: "Atracción-repulsión magnética", objetivo: "" },
        { archivo: "Copia_de_47-02_Magnetita.mp4", tema: "Magnetita", objetivo: "" },
        { archivo: "Copia_de_47-03_Aguja_de_inclinación.mp4", tema: "Aguja de inclinación", objetivo: "" },
        { archivo: "Copia_de_47-04_Campos_magnéticos_alrededor_de_imanes_de_barra.mp4", tema: "Campos magnéticos alrededor de imanes de barra", objetivo: "" },
        { archivo: "Copia_de_47-05_Imán_roto.mp4", tema: "Imán roto", objetivo: "" },
        { archivo: "Copia_de_47-06_Configuración_de_mínima_energía.mp4", tema: "Configuración de mínima energía", objetivo: "" }
    ],
    48: [
        { archivo: "Copia_de_48-01_La_regla_de_la_mano_derecha.mp4", tema: "La regla de la mano derecha", objetivo: "" },
        { archivo: "Copia_de_48-02_Aguja_de_Oersted.mp4", tema: "Aguja de Oersted", objetivo: "" },
        { archivo: "Copia_de_48-03_Campos_magnéticos_alrededir_de_corrientes.mp4", tema: "Campos magnéticos alrededor de corrientes", objetivo: "" },
        { archivo: "Copia_de_48-04_Solenoide_como_imán_de_barra.mp4", tema: "Solenoide como imán de barra", objetivo: "" },
        { archivo: "Copia_de_48-05_Gran_electroimán.mp4", tema: "Gran electroimán", objetivo: "" },
        { archivo: "Copia_de_48-06_Electroimán_con_una_pila_de_1.5_V.mp4", tema: "Electroimán con una pila de 1.5 V", objetivo: "" },
        { archivo: "Copia_de_48-07_Alambres_que_se_juntan.mp4", tema: "Alambres que se juntan", objetivo: "" },
        { archivo: "Copia_de_48-08_La_ley_de_Biot-Savart.mp4", tema: "La ley de Biot-Savart", objetivo: "" }
    ],
    49: [
        { archivo: "Copia_de_49-01_Magnetización_de_hierro_por_contacto.mp4", tema: "Magnetización de hierro por contacto", objetivo: "" },
        { archivo: "Copia_de_49-02_Modelo_de_dominios_magnéticos.mp4", tema: "Modelo de dominios magnéticos", objetivo: "" },
        { archivo: "Copia_de_49-03_Magnetizando_hierro.mp4", tema: "Magnetizando hierro", objetivo: "" },
        { archivo: "Copia_de_49-04_Desimantación_de_hierro_por_martilleo.mp4", tema: "Desimantación de hierro por martilleo", objetivo: "" },
        { archivo: "Copia_de_49-05_Efecto_Barkhausen.mp4", tema: "Efecto Barkhausen", objetivo: "" },
        { archivo: "Copia_de_49-06_Aislamiento_magnético.mp4", tema: "Aislamiento magnético", objetivo: "" },
        { archivo: "Copia_de_49-07_Permalloy_en_el_campo_magnético_de_la_tierra.mp4", tema: "Permalloy en el campo magnético de la tierra", objetivo: "" },
        { archivo: "Copia_de_49-08_Paramagnetismo_y_diamagnetismo.mp4", tema: "Paramagnetismo y diamagnetismo", objetivo: "" },
        { archivo: "Copia_de_49-09_Disprosio_en_nitrógeno_líquido.mp4", tema: "Disprosio en nitrógeno líquido", objetivo: "" },
        { archivo: "Copia_de_49-10_Temperatura_de_Curie_del_níquel.mp4", tema: "Temperatura de Curie del níquel", objetivo: "" },
        { archivo: "Copia_de_49-11_Rueda_de_temperatua_de_Curie.mp4", tema: "Rueda de temperatura de Curie", objetivo: "" }
    ],
    50: [
        { archivo: "Copia_de_50-01_Alambre_que_salta.mp4", tema: "Alambre que salta", objetivo: "" },
        { archivo: "Copia_de_50-02_Marco_de_Ampere.mp4", tema: "Marco de Ampere", objetivo: "" },
        { archivo: "Copia_de_50-03_Haz_de_electrones_desviado.mp4", tema: "Haz de electrones desviado", objetivo: "" },
        { archivo: "Copia_de_50-04_Tubo_de_haz_fino.mp4", tema: "Tubo de haz fino", objetivo: "" },
        { archivo: "Copia_de_50-05_Rueda_de_Barlow.mp4", tema: "Rueda de Barlow", objetivo: "" },
        { archivo: "Copia_de_50-06_Motor_iónico.mp4", tema: "Motor iónico", objetivo: "" },
        { archivo: "Copia_de_50-07_Contraste_magnético_entre_CA_y_CD.mp4", tema: "Contraste magnético entre CA y CD", objetivo: "" },
        { archivo: "Copia_de_50-08_Galvanómetro_de_d'Arsonval.mp4", tema: "Galvanómetro de d'Arsonval", objetivo: "" },
        { archivo: "Copia_de_50-09_Motor_de_CD.mp4", tema: "Motor de CD", objetivo: "" },
        { archivo: "Copia_de_50-10_Efecto_Hall.mp4", tema: "Efecto Hall", objetivo: "" }
    ],
    51: [
        { archivo: "Copia_de_51-01_Alambre_e_imán.mp4", tema: "Alambre e imán", objetivo: "" },
        { archivo: "Copia_de_51-02_Bobinas_de_10,_20_y_40_vueltas_con_imán.mp4", tema: "Bobinas de 10, 20 y 40 vueltas con imán", objetivo: "" },
        { archivo: "Copia_de_51-03_Bobina_en_el_campo_magnético_terrestre.mp4", tema: "Bobina en el campo magnético terrestre", objetivo: "" },
        { archivo: "Copia_de_51-04_Disco_de_Faraday.mp4", tema: "Disco de Faraday", objetivo: "" },
        { archivo: "Copia_de_51-05_Generador_de_CA-CD.mp4", tema: "Generador de CA-CD", objetivo: "" },
        { archivo: "Copia_de_51-06_Péndulos_acoplados_por_corriente_inducida.mp4", tema: "Péndulos acoplados por corriente inducida", objetivo: "" },
        { archivo: "Copia_de_51-07_Bobina_inductiva_con_lámpara.mp4", tema: "Bobina inductiva con lámpara", objetivo: "" },
        { archivo: "Copia_de_51-08_Anillo_volador_de_Thomson.mp4", tema: "Anillo volador de Thomson", objetivo: "" },
        { archivo: "Copia_de_51-09_Bobina_de_repulsión_de_Faraday.mp4", tema: "Bobina de repulsión de Faraday", objetivo: "" },
        { archivo: "Copia_de_51-10_Dos_bobinas.mp4", tema: "Dos bobinas", objetivo: "" },
        { archivo: "Copia_de_51-11_Bobina_de_inducción.mp4", tema: "Bobina de inducción", objetivo: "" },
        { archivo: "Copia_de_51-12_Bobinas_primaria_y_secundaria_verticales.mp4", tema: "Bobinas primaria y secundaria verticales", objetivo: "" },
        { archivo: "Copia_de_51-13_Transformadores.mp4", tema: "Transformadores", objetivo: "" }
    ],
    52: [
        { archivo: "Copia_de_52-01_Péndulo_con_corrientes_parásitas.mp4", tema: "Péndulo con corrientes parásitas", objetivo: "" },
        { archivo: "Copia_de_52-02_Disco_de_Arago.mp4", tema: "Disco de Arago", objetivo: "" },
        { archivo: "Copia_de_52-03_Tubo_con_corrientes_parásitas.mp4", tema: "Tubo con corrientes parásitas", objetivo: "" },
        { archivo: "Copia_de_52-04_Rompelatas_electromagnético.mp4", tema: "Rompelatas electromagnético", objetivo: "" }
    ],
    53: [
        { archivo: "Copia_de_53-01_Curva_de_histéresis.mp4", tema: "Curva de histéresis", objetivo: "" },
        { archivo: "Copia_de_53-02_Calor_perdido_por_histéresis.mp4", tema: "Calor perdido por histéresis", objetivo: "" }
    ],
    54: [
        { archivo: "Copia_de_54-01_Chispa_de_inductancia.mp4", tema: "Chispa de inductancia", objetivo: "" },
        { archivo: "Copia_de_54-02_Inductancia_y_lámpara_en_un_circuito_de_CA.mp4", tema: "Inductancia y lámpara en un circuito de CA", objetivo: "" },
        { archivo: "Copia_de_54-03_Lámparas_en_paralelo_con_solenoide.mp4", tema: "Lámparas en paralelo con solenoide", objetivo: "" }
    ],
    55: [
        { archivo: "Copia_de_55-01_El_circuito_LRC_forzado.mp4", tema: "El circuito LRC forzado", objetivo: "" },
        { archivo: "Copia_de_55-02_Oscilaciones_amortiguadas_en_un_circuito_LRC.mp4", tema: "Oscilaciones amortiguadas en un circuito LRC", objetivo: "" },
        { archivo: "Copia_de_55-03_Bobina_de_Tesla.mp4", tema: "Bobina de Tesla", objetivo: "" }
    ],
    56: [
        { archivo: "Copia_de_56-01_Luz_en_el_vacío.mp4", tema: "Luz en el vacío", objetivo: "" },
        { archivo: "Copia_de_56-02_Propagaciónn_en_línea_recta.mp4", tema: "Propagación en línea recta", objetivo: "" },
        { archivo: "Copia_de_56-03_Cámara_de_agujero_pequeño.mp4", tema: "Cámara de agujero pequeño", objetivo: "" },
        { archivo: "Copia_de_56-04_Ley_del_inverso_cuadrado.mp4", tema: "Ley del inverso cuadrado", objetivo: "" },
        { archivo: "Copia_de_56-05_Ondas_de_radio.mp4", tema: "Ondas de radio", objetivo: "" },
        { archivo: "Copia_de_56-06_Triángulo_imposible.mp4", tema: "Triángulo imposible", objetivo: "" },
        { archivo: "Copia_de_56-07_Alambres_de_Lecher.mp4", tema: "Alambres de Lecher", objetivo: "" },
        { archivo: "Copia_de_56-08_Unidad_de_microondas.mp4", tema: "Unidad de microondas", objetivo: "" },
        { archivo: "Copia_de_56-09_Microondas_estacionarias.mp4", tema: "Microondas estacionarias", objetivo: "" },
        { archivo: "Copia_de_56-10_Absorción_de_microondas.mp4", tema: "Absorción de microondas", objetivo: "" },
        { archivo: "Copia_de_56-11_Radio_en_una_jaula_de_Faraday.mp4", tema: "Radio en una jaula de Faraday", objetivo: "" }
    ],
    57: [
        { archivo: "Copia_de_57-01_Reflexión_de_microondas.mp4", tema: "Reflexión de microondas", objetivo: "" },
        { archivo: "Copia_de_57-02_Reflexión_difusa-especular.mp4", tema: "Reflexión difusa-especular", objetivo: "" },
        { archivo: "Copia_de_57-03_Ángulos_de_incidencia_y_reflexión.mp4", tema: "Ángulos de incidencia y reflexión", objetivo: "" },
        { archivo: "Copia_de_57-04_Ubicación_de_la_imagen.mp4", tema: "Ubicación de la imagen", objetivo: "" },
        { archivo: "Copia_de_57-05_Inversión_de_paridad_en_un_espejo.mp4", tema: "Inversión de paridad en un espejo", objetivo: "" },
        { archivo: "Copia_de_57-06_Espejos_con_bisagra.mp4", tema: "Espejos con bisagra", objetivo: "" },
        { archivo: "Copia_de_57-07_Reflector_de_espejos_esquinados.mp4", tema: "Reflector de espejos esquinados", objetivo: "" },
        { archivo: "Copia_de_57-08_Espejos_de_peluquería.mp4", tema: "Espejos de peluquería", objetivo: "" },
        { archivo: "Copia_de_57-09_Caja_con_espejo.mp4", tema: "Caja con espejo", objetivo: "" }
    ],

    // --- FÍSICA IV ---
    58: [
        { archivo: "Copia_de_58-01_Espejos_cóncavos_y_convexos.mp4", tema: "Espejos cóncavos y convexos", objetivo: "" },
        { archivo: "Copia_de_58-02_Aberración_esférica_en_un_espejo.mp4", tema: "Aberración esférica en un espejo", objetivo: "" },
        { archivo: "Copia_de_58-03_Energía_en_un_punto_focal.mp4", tema: "Energía en un punto focal", objetivo: "" },
        { archivo: "Copia_de_58-04_Enfocando_calor.mp4", tema: "Enfocando calor", objetivo: "" },
        { archivo: "Copia_de_58-05_Gran_espejo_cóncavo.mp4", tema: "Gran espejo cóncavo", objetivo: "" }
    ],
    59: [
        { archivo: "Copia_de_59-01_Refracción-reflexión_por_un_bloque_de_plástico.mp4", tema: "Refracción-reflexión por un bloque de plástico", objetivo: "" },
        { archivo: "Copia_de_59-02_Tanque_de_refracción_pequeño.mp4", tema: "Tanque de refracción pequeño", objetivo: "" },
        { archivo: "Copia_de_59-03_Refracción_por_acrílico-vidrio_emplomado.mp4", tema: "Refracción por acrílico-vidrio emplomado", objetivo: "" },
        { archivo: "Copia_de_59-04_Tres_prismas_diferentes.mp4", tema: "Tres prismas diferentes", objetivo: "" },
        { archivo: "Copia_de_59-05_Gotero_ocular_que_desaparece.mp4", tema: "Gotero ocular que desaparece", objetivo: "" },
        { archivo: "Copia_de_59-06_Ángulo_crítico-reflexión_total_interna.mp4", tema: "Ángulo crítico-reflexión total interna", objetivo: "" },
        { archivo: "Copia_de_59-07_La_pelota_de_hollín_plateada.mp4", tema: "La pelota de hollín plateada", objetivo: "" },
        { archivo: "Copia_de_59-08_Tubos_de_luz.mp4", tema: "Tubos de luz", objetivo: "" },
        { archivo: "Copia_de_59-09_Trayectoria_de_la_luz_en_fibras.mp4", tema: "Trayectoria de la luz en fibras", objetivo: "" },
        { archivo: "Copia_de_59-10_Cascada_láser.mp4", tema: "Cascada láser", objetivo: "" }
    ],
    60: [
        { archivo: "Copia_de_60-01_Formación_de_la_imagen_real.mp4", tema: "Formación de la imagen real", objetivo: "" },
        { archivo: "Copia_de_60-02_Magnificación_de_una_lente.mp4", tema: "Magnificación de una lente", objetivo: "" },
        { archivo: "Copia_de_60-03_Trazando_rayos_con_lentes.mp4", tema: "Trazando rayos con lentes", objetivo: "" },
        { archivo: "Copia_de_60-04_Lente_de_Fresnel.mp4", tema: "Lente de Fresnel", objetivo: "" },
        { archivo: "Copia_de_60-05_Lentes_rellenables.mp4", tema: "Lentes rellenables", objetivo: "" },
        { archivo: "Copia_de_60-06_Aberración_esférica.mp4", tema: "Aberración esférica", objetivo: "" },
        { archivo: "Copia_de_60-07_Aberración_cromática.mp4", tema: "Aberración cromática", objetivo: "" },
        { archivo: "Copia_de_60-08_Astigmatismo.mp4", tema: "Astigmatismo", objetivo: "" },
        { archivo: "Copia_de_60-09_Distorsión_fuera_de_eje.mp4", tema: "Distorsión fuera de eje", objetivo: "" }
    ],
    61: [
        { archivo: "Copia_de_61-01_Difracción_de_microondas.mp4", tema: "Difracción de microondas", objetivo: "" },
        { archivo: "Copia_de_61-02_Difracción_por_una_rendija.mp4", tema: "Difracción por una rendija", objetivo: "" },
        { archivo: "Copia_de_61-03_Difracción_por_una_rendija_(diapositivas_de_Cornell).mp4", tema: "Difracción por una rendija (diapositivas de Cornell)", objetivo: "" },
        { archivo: "Copia_de_61-04_Difracción_por_un_alambre_delgado.mp4", tema: "Difracción por un alambre delgado", objetivo: "" },
        { archivo: "Copia_de_61-05_Mancha_brillante_de_Poisson.mp4", tema: "Mancha brillante de Poisson", objetivo: "" },
        { archivo: "Copia_de_61-06_Sombra_de_aguja.mp4", tema: "Sombra de aguja", objetivo: "" },
        { archivo: "Copia_de_61-07_Difracción_por_un_agujero.mp4", tema: "Difracción por un agujero", objetivo: "" },
        { archivo: "Copia_de_61-08_Difracción_por_el_filo_de_una_navaja.mp4", tema: "Difracción por el filo de una navaja", objetivo: "" },
        { archivo: "Copia_de_61-09_Poder_de_resolución.mp4", tema: "Poder de resolución", objetivo: "" }
    ],
    62: [
        { archivo: "Copia_de_62-01_Interferencia_de_microondas_por_una_doble_rendija.mp4", tema: "Interferencia de microondas por una doble rendija", objetivo: "" },
        { archivo: "Copia_de_62-02_Interferencia_por_una_doble_rendija.mp4", tema: "Interferencia por una doble rendija", objetivo: "" },
        { archivo: "Copia_de_62-03_Interferencia_por_rendija_múltiple.mp4", tema: "Interferencia por rendija múltiple", objetivo: "" },
        { archivo: "Copia_de_62-04_Rejillas_de_interferencia.mp4", tema: "Rejillas de interferencia", objetivo: "" },
        { archivo: "Copia_de_62-05_Placas_de_vidrio_en_luz_de_sodio.mp4", tema: "Placas de vidrio en luz de sodio", objetivo: "" },
        { archivo: "Copia_de_62-06_Anillos_de_Newton.mp4", tema: "Anillos de Newton", objetivo: "" },
        { archivo: "Copia_de_62-07_Filtros_de_interferencia.mp4", tema: "Filtros de interferencia", objetivo: "" },
        { archivo: "Copia_de_62-08_Hoja_de_mica_de_Pohl.mp4", tema: "Hoja de mica de Pohl", objetivo: "" },
        { archivo: "Copia_de_62-09_Interferencia_por_una_película_de_jabón.mp4", tema: "Interferencia por una película de jabón", objetivo: "" },
        { archivo: "Copia_de_62-10_Interferómero_de_microondas.mp4", tema: "Interferómero de microondas", objetivo: "" },
        { archivo: "Copia_de_62-11_Interferómero_de_Michelson_con_luz_blanca.mp4", tema: "Interferómero de Michelson con luz blanca", objetivo: "" },
        { archivo: "Copia_de_62-12_Hologramas.mp4", tema: "Hologramas", objetivo: "" }
    ],
    63: [
        { archivo: "Copia_de_63-01_El_infrarrojo_en_el_espectro.mp4", tema: "El infrarrojo en el espectro", objetivo: "" },
        { archivo: "Copia_de_63-02_Colores_en_la_luz_espectral.mp4", tema: "Colores en la luz espectral", objetivo: "" },
        { archivo: "Copia_de_63-03_Disco_de_arco_iris.mp4", tema: "Disco de arco iris", objetivo: "" },
        { archivo: "Copia_de_63-04_Disco_de_colores_de_Newton.mp4", tema: "Disco de colores de Newton", objetivo: "" },
        { archivo: "Copia_de_63-05_Mezcla_aditiva_de_colores.mp4", tema: "Mezcla aditiva de colores", objetivo: "" }
    ],
    64: [
        { archivo: "Copia_de_64-01_Placas_de_polaroide_cruzadas_y_sin_cruzar.mp4", tema: "Placas de polaroide cruzadas y sin cruzar", objetivo: "" },
        { archivo: "Copia_de_64-02_Polaroides_cortados_a_45_grados.mp4", tema: "Polaroides cortados a 45 grados", objetivo: "" },
        { archivo: "Copia_de_64-03_Rotación_por_un_filtro_polarizante.mp4", tema: "Rotación por un filtro polarizante", objetivo: "" },
        { archivo: "Copia_de_64-04_Polarización_de_microondas.mp4", tema: "Polarización de microondas", objetivo: "" },
        { archivo: "Copia_de_64-05_Polarización_por_reflexión.mp4", tema: "Polarización por reflexión", objetivo: "" },
        { archivo: "Copia_de_64-06_Polarización_por_reflexión_doble.mp4", tema: "Polarización por reflexión doble", objetivo: "" },
        { archivo: "Copia_de_64-07_Polarización_por_dispersión.mp4", tema: "Polarización por dispersión", objetivo: "" },
        { archivo: "Copia_de_64-08_Puesta_de_sol_artificial.mp4", tema: "Puesta de sol artificial", objetivo: "" }
    ],
    65: [
        { archivo: "Copia_de_65-01_Actividad_óptica_de_una_cinta_de_celofán.mp4", tema: "Actividad óptica de una cinta de celofán", objetivo: "" },
        { archivo: "Copia_de_65-02_León_polarizado.mp4", tema: "León polarizado", objetivo: "" },
        { archivo: "Copia_de_65-03_Actividad_óptica_en_miel_de_maíz.mp4", tema: "Actividad óptica en miel de maíz", objetivo: "" },
        { archivo: "Copia_de_65-04_Polage.mp4", tema: "Polage", objetivo: "" },
        { archivo: "Copia_de_65-05_Figuras_de_esfuerzo_fotoelástico.mp4", tema: "Figuras de esfuerzo fotoelástico", objetivo: "" },
        { archivo: "Copia_de_65-06_Tubo_de_peluquería_con_jarabe.mp4", tema: "Tubo de peluquería con jarabe", objetivo: "" },
        { archivo: "Copia_de_65-07_Placa_de_un_cuarto_de_onda.mp4", tema: "Placa de un cuarto de onda", objetivo: "" },
        { archivo: "Copia_de_65-08_Refracción_doble_en_calcita.mp4", tema: "Refracción doble en calcita", objetivo: "" },
        { archivo: "Copia_de_65-09_Placas_de_cristales_líquidos.mp4", tema: "Placas de cristales líquidos", objetivo: "" }
    ],
    66: [
        { archivo: "Copia_de_66-01_Espectro_de_radiación_de_un_objeto_caliente.mp4", tema: "Espectro de radiación de un objeto caliente", objetivo: "" },
        { archivo: "Copia_de_66-02_Efecto_fotoeléctrico_en_zinc.mp4", tema: "Efecto fotoeléctrico en zinc", objetivo: "" },
        { archivo: "Copia_de_66-03_Ionización_por_rayos_X.mp4", tema: "Ionización por rayos X", objetivo: "" },
        { archivo: "Copia_de_66-04_Celdas_solares.mp4", tema: "Celdas solares", objetivo: "" },
        { archivo: "Copia_de_66-05_Penetración_de_barreras_por_microondas.mp4", tema: "Penetración de barreras por microondas", objetivo: "" },
        { archivo: "Copia_de_66-06_Difracción_de_electrones.mp4", tema: "Difracción de electrones", objetivo: "" },
        { archivo: "Copia_de_66-07_Gota_de_aceite_de_Millikan.mp4", tema: "Gota de aceite de Millikan", objetivo: "" },
        { archivo: "Copia_de_66-08_Cajas_de_Bichsel.mp4", tema: "Cajas de Bichsel", objetivo: "" }
    ],
    67: [
        { archivo: "Copia_de_67-01_Espectros_de_emisión.mp4", tema: "Espectros de emisión", objetivo: "" },
        { archivo: "Copia_de_67-02_Absorción_espectral_por_vapor_de_sodio.mp4", tema: "Absorción espectral por vapor de sodio", objetivo: "" },
        { archivo: "Copia_de_67-03_Emisión_termoiónica.mp4", tema: "Emisión termoiónica", objetivo: "" },
        { archivo: "Copia_de_67-04_Tubo_de_descarga_electrónica_con_cruz.mp4", tema: "Tubo de descarga electrónica con cruz", objetivo: "" },
        { archivo: "Copia_de_67-05_Tubo_de_descarga_y_bomba_de_vacío.mp4", tema: "Tubo de descarga y bomba de vacío", objetivo: "" },
        { archivo: "Copia_de_67-06_Tubo_de_plasma.mp4", tema: "Tubo de plasma", objetivo: "" },
        { archivo: "Copia_de_67-07_Sales_en_una_llama.mp4", tema: "Sales en una llama", objetivo: "" },
        { archivo: "Copia_de_67-08_Escalera_de_Jacob.mp4", tema: "Escalera de Jacob", objetivo: "" },
        { archivo: "Copia_de_67-09_Triboluminiscencia.mp4", tema: "Triboluminiscencia", objetivo: "" },
        { archivo: "Copia_de_67-10_Luminiscencia.mp4", tema: "Luminiscencia", objetivo: "" },
        { archivo: "Copia_de_67-11_Fluorescencia.mp4", tema: "Fluorescencia", objetivo: "" },
        { archivo: "Copia_de_67-12_Efecto_Franck-Hertz.mp4", tema: "Efecto Franck-Hertz", objetivo: "" }
    ],
    68: [
        { archivo: "Copia_de_68-01_Dispersión_de_Rutherford.mp4", tema: "Dispersión de Rutherford", objetivo: "" },
        { archivo: "Copia_de_68-02_Aislamiento_nuclear.mp4", tema: "Aislamiento nuclear", objetivo: "" },
        { archivo: "Copia_de_68-03_Reacción_en_cadena_con_ratoneras.mp4", tema: "Reacción en cadena con ratoneras", objetivo: "" },
        { archivo: "Copia_de_68-04_Vida_media.mp4", tema: "Vida media", objetivo: "" },
        { archivo: "Copia_de_68-05_Rayos_cósmicos.mp4", tema: "Rayos cósmicos", objetivo: "" }
    ]
};
