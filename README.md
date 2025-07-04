# 🏢 BareValue - Tasación de Nuda Propiedad

**BareValue** es una herramienta profesional para el cálculo de tasación de nuda propiedad e inversiones inmobiliarias, desarrollada con precios ajustados a la esperanza de vida con precisión actuarial.

## 🚀 Características Principales

- **Cálculo Profesional**: Tasación de nuda propiedad basada en datos actuariales
- **Interfaz Intuitiva**: Formulario simple y fácil de usar
- **Resultados Detallados**: Información completa sobre valoración y rentabilidad
- **Sistema de Temas Avanzado**: Modo claro, oscuro y detección automática del sistema
- **Responsive**: Funciona perfectamente en desktop y móvil
- **Accesibilidad**: Diseño inclusivo con soporte completo para diferentes preferencias

## 📊 Funcionalidades

### Calculadora de Nuda Propiedad
- Introducción del valor de la vivienda
- Especificación de edad y sexo del propietario
- Selección del tipo de inversión (nuda propiedad o usufructo)
- Cálculo automático con algoritmos basados en tablas del INE

### Resultados Proporcionados
- **Valor de Nuda Propiedad**: Precio ajustado según esperanza de vida
- **Valor de Usufructo**: Valor complementario de uso
- **Esperanza de Vida**: Estimación actuarial
- **Porcentaje de Descuento**: Factor aplicado por edad
- **Rentabilidad Anual**: ROI estimado de la inversión

### 🎨 Sistema de Temas
- **Tema Claro**: Interfaz luminosa ideal para uso diurno
- **Tema Oscuro**: Interfaz oscura que reduce fatiga visual
- **Detección Automática**: Sigue las preferencias del sistema operativo
- **Toggle Inteligente**: Botón para cambio manual entre modos
- **Persistencia**: Recuerda la preferencia del usuario
- **Transiciones Suaves**: Cambios fluidos entre temas

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor robustez
- **TailwindCSS 4** - Estilos utilitarios modernos
- **React 19** - Biblioteca de componentes UI

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd BareValue

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Comandos Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run start    # Ejecutar versión de producción
npm run lint     # Verificar código
```

## 📱 Uso de la Aplicación

1. **Acceder a la aplicación** en tu navegador
2. **Seleccionar tema** (opcional): Usar el toggle en la esquina superior derecha
   - **☀️ Claro**: Para uso en ambientes luminosos
   - **🌙 Oscuro**: Para reducir fatiga visual
   - **💻 Sistema**: Sigue automáticamente las preferencias del SO
3. **Completar el formulario** con los datos requeridos:
   - Valor de la vivienda en euros
   - Edad del propietario (50-100 años)
   - Sexo del propietario
   - Tipo de inversión deseada
4. **Hacer clic en "Calcular Tasación"**
5. **Revisar los resultados** detallados en el panel derecho

### 🎛️ Controles de Tema

El **Toggle de Tema** se encuentra en la esquina superior derecha y permite:
- **Cambio instantáneo** entre modos claro, oscuro y sistema
- **Detección automática** de las preferencias del navegador/OS
- **Persistencia** - la aplicación recuerda tu elección
- **Iconos intuitivos** para identificar cada modo fácilmente

## 🧮 Algoritmo de Cálculo

La aplicación utiliza un algoritmo que considera:
- **Esperanza de vida** basada en estadísticas del INE
- **Factor de edad** para calcular descuentos apropriados
- **Diferencias por sexo** en la esperanza de vida
- **Cálculos de rentabilidad** anuales estimadas

> **Nota**: Los cálculos actuales son orientativos y utilizan algoritmos simplificados. Para implementaciones en producción, se recomienda integrar con APIs de datos actuariales reales.

## 🎨 Diseño y UX

- **Sistema de Temas Dual**: Soporte completo para modo claro y oscuro
- **Detección Automática**: Respeta las preferencias del sistema operativo
- **Transiciones Fluidas**: Cambios suaves entre temas sin parpadeos
- **Contraste Optimizado**: Excelente legibilidad en ambos modos
- **Responsive Design**: Adaptado perfectamente a todos los dispositivos
- **Accesibilidad**: Cumple estándares WCAG para usuarios con necesidades especiales
- **Animaciones Inteligentes**: Transiciones que mejoran la experiencia sin distraer

## 🔮 Próximas Funcionalidades

- [ ] Integración con APIs de datos actuariales reales
- [ ] Implementación de Machine Learning para predicciones más precisas
- [ ] Exportación de informes en PDF
- [ ] Historial de cálculos realizados
- [ ] Comparativas de diferentes escenarios
- [ ] Sistema de usuarios y guardado de datos

## 📝 Estructura del Proyecto

```
BareValue/
├── src/
│   └── app/
│       ├── layout.tsx      # Layout principal
│       ├── page.tsx        # Página principal
│       ├── globals.css     # Estilos globales
│       └── favicon.ico     # Icono de la aplicación
├── public/                 # Archivos estáticos
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración TypeScript
├── tailwind.config.js     # Configuración Tailwind
└── README.md              # Este archivo
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

Para consultas o soporte técnico, por favor contacta al equipo de desarrollo.

---

**BareValue** - Precisión actuarial para inversiones inmobiliarias inteligentes 🏠📊

### 🔪 How to Use the MVP Template (Step-by-Step)

#### 📊 1. Clone the Template Repository

Make a fresh copy of the MVP template:

```bash
git clone https://github.com/StartScale-Jaime/base-mvp-template.git your-new-project-name
```

Replace `your-new-project-name` with your project folder name.

#### 📁 2. Enter the New Project Directory

```bash
cd your-new-project-name
```

#### 🔄 3. Reinitialize Git (Clean History)

```bash
rm -rf .git
git init
git remote add origin git@github.com:StartScale-Jaime/base-mvp-template.git
git add .
git commit -m "Initial commit from 48H MVP template"
git push -u origin main
```

> Replace the remote URL with your new project repository.

#### ⚙️ 4. Install Dependencies

```bash
npm install
```

#### 🚀 5. Run Development Server

```bash
npm run dev
```

Visit your app at: `http://localhost:3000`

---


### 📦 What's Included in the Template?

- ✅ TailwindCSS
- ✅ Shadcn/UI components
- ✅ Next.js 14 with App Router
- ✅ Minimal MVP-ready layout
- ✅ Pre-configured basic structure
- ✅ `README.md` for setup guidance

---

### ⚡ For Each New MVP

1. Clone the template repo
2. Reinit Git
3. Setup your remote
4. Install & start dev server

Build and ship fast ✨

