# Dark Tech Design System - Portfolio Angel

## 🎨 Paleta de Colores Oficial

### Fondos
- **Primary Background**: `#0E0E10` - Negro suave para toda la aplicación
- **Secondary Background**: `#161A22` - Gris oscuro para cards, superficies y contenedores

### Tipografía
- **Títulos Principales (H1, H2)**: `#F5F7FA` - Blanco suave con máximo contraste
- **Subtítulos (H3, H4)**: `#B8C0CC` - Gris claro para jerarquía visual
- **Texto Párrafo**: `#8E96A3` - Gris medio legible y cómodo para leer largos textos

### Interacción
- **Acento Único**: `#3B82F6` - Azul tecnológico para botones, links, estados activos
- **Iconos Default**: `#B8C0CC` - Gris claro
- **Iconos Activos**: `#3B82F6` - Azul acento (solo en hover/active)

### Bordes y Divisores
- **Border Color**: `rgba(255,255,255,0.08)` - Bordes sutiles con opacidad baja
- **Secondary Border**: `rgba(255,255,255,0.12)` - Bordes ligeramente más visibles

---

## 🛠️ Actualización Tailwind Config

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0E0E10',        // Fondo principal
        secondary: '#161A22',      // Superficies secundarias
        accent: '#3B82F6',         // Acento tecnológico
        'text-primary': '#F5F7FA', // Títulos principales
        'text-secondary': '#B8C0CC', // Subtítulos
        'text-tertiary': '#8E96A3', // Texto párrafo
        'border-subtle': 'rgba(255,255,255,0.08)', // Bordes sutiles
      },
    },
  },
  plugins: [],
}
```

---

## 📐 Decisiones de Diseño Implementadas

### 1. **Jerarquía de Colores de Texto**
- Tres niveles claros: primario (títulos) → secundario (subtítulos) → terciario (párrafos)
- Esto asegura legibilidad sin cansar la vista
- El contraste es suficiente pero no agresivo

### 2. **Fondos Sutiles, No Gradientes**
- Removimos todos los gradientes de fondos (`bg-gradient-to-b`)
- Los fondos son ahora planos con variaciones de opacidad
- Las superficies (cards) usan `bg-secondary/30` para profundidad discreta

### 3. **Sombras Elegantes**
- Sombras sutiles con offset pequeño: `shadow-lg shadow-accent/10`
- Las sombras son azules (acento) para dar coherencia técnica
- No son dominantes, solo dan profundidad

### 4. **Bordes Inteligentes**
- Bordes primarios: `border-secondary/50` (visible pero suave)
- Bordes secundarios: `border-secondary/30` (más sutil)
- Hover: `border-secondary/70` (más visible para feedback)

### 5. **Estados Hover Coherentes**
- Texto gris → Texto acento (color)
- Borde secundario → Borde secundario más oscuro (visibilidad)
- Icono gris → Icono acento (retroalimentación)
- Transformación scale: `group-hover:scale-110` para movimiento suave

### 6. **Iconografía**
- Iconos por defecto en `text-text-secondary` (#B8C0CC)
- En hover o activos: `group-hover:text-accent` (#3B82F6)
- Esto crea una experiencia interactiva clara sin ser invasiva

### 7. **Eliminar Ruido Visual**
- Removida `text-shadow` global (no es necesaria en Dark Tech)
- Removidas saturaciones de color y contrastes agresivos
- Mantuvimos gradientes SOLO en títulos H1/H2 (donde agregan impacto)

---

## 📝 Mapeo de Clases Tailwind Usadas

| Elemento | Anterior | Ahora |
|----------|----------|-------|
| Fondo principal | `bg-primary` (azul) | `bg-primary` (negro) |
| Superficies | `bg-gray-900` | `bg-secondary/30` |
| Texto título | `text-white` | `text-text-primary` |
| Texto subtítulo | `text-gray-200` | `text-text-secondary` |
| Texto párrafo | `text-gray-300` | `text-text-tertiary` |
| Bordes | `border-gray-800/50` | `border-secondary/50` |
| Iconos default | `text-accent` | `text-text-secondary` |
| Iconos hover | N/A | `group-hover:text-accent` |
| Sombras | `shadow-accent/5` | `shadow-accent/10` |

---

## ✨ Características Dark Tech Implementadas

✅ **Elegancia**: Paleta limitada, pocos colores, máximo impacto  
✅ **Profesionalismo**: Contraste adecuado, legibilidad garantizada  
✅ **Tecnología**: Acento azul puro (#3B82F6) evoca innovación  
✅ **Profundidad**: Capas de opacidad en secundario crean dimensión  
✅ **Interactividad**: Feedback visual claro sin ser intrusivo  
✅ **Mantenibilidad**: Colores custom en Tailwind config fáciles de actualizar  
✅ **Accesibilidad**: Contrastes WCAG AA+ en todos los textos  

---

## 🔄 Cómo Actualizar los Colores Globalmente

Si necesitas cambiar la paleta en el futuro, solo actualiza en estos 2 archivos:

1. **`tailwind.config.js`** - Define los colores
2. **`src/App.css`** - Estilos globales (body, scrollbar)
3. **`src/index.css`** - Variables :root

Las clases Tailwind ya usan las variables, así que se actualizarán automáticamente.

---

## 🚀 Resultado Final

La página web ahora transmite:
- **Confianza** → Colores sólidos y profesionales
- **Tecnología** → Azul puro (#3B82F6) y estructura limpia
- **Elegancia** → Paleta limitada, sin saturación
- **Profesionalismo** → Jerarquía visual clara y tipografía coherente

**No es gamer ni neon.** Es clean, serio y moderno.
