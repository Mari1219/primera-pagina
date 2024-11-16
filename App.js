import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  // Función para cambiar la sección visible
  const changeSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      {/* Menú de navegación */}
      <nav className="navbar">
        <h2>Acerca del Ciberbullying</h2>
        <ul>
          <li>
            <button onClick={() => changeSection('home')}>Inicio</button>
          </li>
          <li>
            <button onClick={() => changeSection('info')}>Información</button>
          </li>
          <li>
            <button onClick={() => changeSection('report')}>Reportar</button>
          </li>
        </ul>
      </nav>

      {/* Sección de Inicio */}
      {currentSection === 'home' && (
        <div className="section" id="home">
          <h3>Introduccion al Ciberbullying</h3>
          <p>
          El ciberbullying, o acoso cibernético, es una forma de violencia psicológica que ocurre en el entorno digital, 
          principalmente a través de redes sociales, aplicaciones de mensajería, correos electrónicos y otras plataformas 
          en línea. Al igual que el bullying tradicional, el ciberbullying implica comportamientos hostiles como insultos, 
          humillaciones, amenazas o difusión de rumores, pero, en este caso, el anonimato y la rápida difusión de la 
          información en línea intensifican sus efectos. Las víctimas de ciberbullying suelen experimentar niveles elevados
          de estrés, ansiedad, depresión, y en casos graves, esto puede llevar a consecuencias emocionales profundas y 
          problemas de salud mental.
          </p>
          <img src="https://th.bing.com/th/id/OIP.tHjafaU2y5oVpOzq1pFE3QHaE6?w=218&h=180&c=7&r=0&o=5&pid=1.7"/>
          
          
        </div>
      )}

      {/* Sección del Formulario de Reporte */}
      {currentSection === 'report' && (
        <div className="section" id="report">
          <h3>Reportar un caso de Ciberbullying</h3>
          <ReportForm />
        </div>
      )}

      {/* Sección de Información */}
      {currentSection === 'info' && (
        <div className="section" id="info">
          <h2>Información sobre el Ciberbullying</h2>
          <div>
            <h3>Principales Características del Ciberbullying</h3>
            <p>
             Accesibilidad y Alcance: El ciberbullying no está limitado a un horario o lugar específico; la víctima puede 
             recibir agresiones en cualquier momento, lo que hace que sea difícil evitar el acoso.
             Difusión Rápida: Una publicación o mensaje puede volverse viral en cuestión de minutos, lo que amplifica la 
             magnitud del acoso.
             Anonimato: Los agresores pueden esconder su identidad, dificultando que la víctima pueda enfrentarlos o detener
             la situación.
             Permanencia: Los contenidos publicados en internet pueden ser difíciles de eliminar por completo, lo cual 
             perpetúa la agresión y sus efectos.
            </p>
            <img src="https://th.bing.com/th/id/OIP.EXmr7thW7L8olpNLIK0-tgAAAA?w=170&h=180&c=7&r=0&o=5&pid=1.7"/>
          </div>

          <div>
            <h3>Modalidades Comunes</h3>
            <p>El ciberbullying puede adoptar diversas formas:
            1. Amenazas y mensajes agresivos: Envío de mensajes intimidantes o violentos.
            2. Difusión de rumores: Compartir información falsa o maliciosa para dañar la reputación de alguien.
            3. Sextorsión: Amenazar con difundir imágenes o información privada si no se cumplen ciertas demandas.
            4. Exclusión en línea: Dejar a la víctima fuera de grupos de redes sociales o conversaciones, lo cual puede 
            impactar su autoestima.</p>
          </div>

          <div>
            <h3>Efectos en las Víctimas</h3>
            <p>
              El ciberbullying puede tener efectos psicológicos significativos. Las víctimas suelen experimentar baja 
              autoestima, síntomas de ansiedad, depresión y, en algunos casos extremos, tendencias suicidas. Además, el acoso
              en línea afecta su desempeño académico, sus relaciones sociales y familiares, y su bienestar general.
            </p>
            <img src="https://th.bing.com/th/id/OIP.aw9BSC7ry4QcQ-EseibVZAHaEK?w=272&h=180&c=7&r=0&o=5&pid=1.7"/>
          </div>

          <div>
            <h3>Prevención y Soluciones</h3>
            <p>
             Educación Digital: La educación sobre el uso responsable de la tecnología es esencial para reducir los casos de 
             ciberbullying.
             Apoyo Psicológico: Las víctimas deben tener acceso a apoyo psicológico para ayudarles a gestionar los efectos 
             emocionales del acoso.
             Control Parental y Supervisión: La supervisión del uso de internet en menores puede ayudar a identificar casos de 
             ciberbullying en etapas tempranas.
             Denuncia y Medidas Legales: Muchos países ya cuentan con legislación para castigar el ciberbullying. Las víctimas 
             pueden recurrir a la denuncia para frenar el acoso.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente de Formulario de Reporte
function ReportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Manejador de cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: '',
        edad:'',
        email: '',
        description: '',
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  // Manejador de limpiar el formulario
  const handleClear = () => {
    setFormData({
      name: '',
      edad:'',
      email: '',
      description: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  // Validación del formulario
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'El nombre es requerido';
    if (!formData.email) errors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email no válido';
    if (!formData.description) errors.description = 'La descripción es requerida';
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Edad:</label>
        <input
          type="number" 
          name="edad" 
          value={formData.edad} 
          required min="12" max="25" 
          onChange={handleChange}
        />
        {errors.edad && <span className="error">{errors.edad}</span>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Descripción del Incidente:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>

      <div className="buttons">
        <button type="submit">Enviar Reporte</button>
        <button type="button" onClick={handleClear}>Limpiar</button>
      </div>
      {submitted && <p className="success">Reporte enviado exitosamente</p>}
    </form>
  );
}

export default App;
