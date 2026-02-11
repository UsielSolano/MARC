import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const numeroWhatsApp = '523121094961';
    
    const mensaje = `¡Hola! Me gustaría contactarme con ustedes.%0A%0A*Datos del contacto:*%0A👤 *Nombre:* ${formData.nombre}%0A📧 *Email:* ${formData.email}%0A💬 *Mensaje:* ${formData.mensaje}`;
    
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
    
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <div className="app">
      <div className="app-wrapper">
        {/* Main Content */}
        <main className="main">
          <div className="container">
            {/* Form Section */}
            <div className="form-section">
              <div className="form-card">
                <div className="form-header">
                  <h3 className="form-title">Envíanos tu mensaje</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group">
                    <label htmlFor="nombre" className="form-label">
                      <span className="label-icon">👤</span>
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Ej: Juan Pérez"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <span className="label-icon">📧</span>
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Ej: juan@email.com"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje" className="form-label">
                      <span className="label-icon">💬</span>
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="¿En qué podemos ayudarte? Cuéntanos los detalles..."
                      rows="5"
                      required
                    />
                  </div>

          

                  <button type="submit" className="submit-button">
                    <span className="button-icon"></span>
                    Enviar mensaje por WhatsApp 
                    <span className="button-arrow">→</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="info-section">
              <div className="info-card">
                <h4 className="info-title">Información de contacto</h4>
                
                <div className="info-item">
                  
                  <div className="info-content">
                    <span className="info-label">Teléfono</span>
                    <span className="info-value">+52 312 109 4961</span>
                  </div>
                </div>

                <div className="info-item">
                  
                  <div className="info-content">
                    <span className="info-label">Horario de atención</span>
                    <span className="info-value">Lun - Vie: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="info-item">
                  
                  <div className="info-content">
                    <span className="info-label">Tiempo de respuesta</span>
                    <span className="info-value">Menos de 30 minutos</span>
                  </div>
                </div>

                <div className="info-divider"></div>

                <p className="info-note">
                  Al enviar este formulario, serás redirigido a WhatsApp Web para completar el envío de tu mensaje.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
       
      </div>
    </div>
  );
};

export default App;
