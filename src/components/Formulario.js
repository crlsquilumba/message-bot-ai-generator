import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { GoogleGenerativeAI } from "@google/generative-ai";
import CustomToolbar from '.././components/CustomToolbar'; // Importa el componente de la barra de herramientas
import RobotImage from '.././assets/robot-assistant.png';


const Formulario = ({ handleClick, handleMensajeWhatsapp }) => {
  const [empresa, setEmpresa] = useState('');
  const [descripcionEmpresa, setDescripcionEmpresa] = useState('');
  const [productos, setProductos] = useState('');
  const [accionLink, setAccionLink] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState('');
  const genAI = new GoogleGenerativeAI("");


  const handlePrompt = async () => {
  // Validar que los campos estén llenos
  if (!empresa || !productos || !accionLink) {
    setError("Por favor completa todos los campos.");
    return;
  }

    setLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `crear un mensaje para publicarlo en mi estado de WhatsApp para la empresa: ${empresa}, que ofrece productos como: ${productos}. Se breve usa 50 palabras de salida, generar una salida diferente. respetar las siguiente instrucciones: Crea un mensaje claro, conciso y creativo: Tu mensaje debe transmitir tu propuesta de valor de forma sencilla y directa, sin rodeos ni ambigüedades. Recuerda que WhatsApp es una aplicación de mensajería instantánea, por lo que tus clientes esperan recibir mensajes breves, rápidos y cálidos. Evita el exceso de información, las repeticiones y las faltas de ortografía. Además, intenta que el mensaje sea original y atractivo, que capte la atención y el interés de tus clientes. Puedes usar un tono informal y cercano, pero siempre profesional y respetuoso.  También puedes usar recursos como emojis, stickers, gifs, imágenes, para darle más dinamismo y personalidad a tu mensaje. Usa el formato adecuado: WhatsApp te permite usar diferentes formatos para darle más énfasis o estilo a tu mensaje. Por ejemplo, puedes usar el formato negrita para resaltar las palabras o frases más importantes, el formato cursiva para expresar énfasis Para usar estos formatos, solo tienes que escribir el símbolo correspondiente antes y después de la palabra o frase que quieras formatear. Estos son los símbolos que debes usar: Negrita: * Cursiva: _ Tachado: ~ Incluye un llamado a la acción: Un llamado a la acción es una invitación a que tus clientes realicen una acción concreta después de leer tu mensaje. Puede ser visitar tu página web, comprar tu producto.  Un buen llamado a la acción debe ser claro ${accionLink}, específico y urgente, y debe ofrecer un beneficio o una solución a tu cliente. Por ejemplo, puedes escribir algo como “Aprovecha esta oferta exclusiva y compra hoy mismo tu producto favorito con un 50% de descuento. Solo tienes que hacer clic en este enlace y seguir los pasos. ¡No dejes pasar esta oportunidad!”. Respeta las normas y las preferencias de tus clientes: Recuerda que WhatsApp es una herramienta para establecer una relación de confianza y satisfacción con tus clientes, no para abusar de ellos o invadir su privacidad. generar un mensaje profesional `;
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setApiData(text);
      setLoading(false);
      // Pasar el mensaje generado a través de la función handleMensajeWhatsapp
      handleMensajeWhatsapp(text);
    } catch (error) {
      setError("Error al llamar a la API");
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmpresa('');
    setDescripcionEmpresa('');
    setProductos('');
    setAccionLink('');
    setApiData('');
    setError(null);
  };

  return (

    <div>
    <CustomToolbar title="Formulario" /> {/* Usa el componente CustomToolbar con el título adecuado */}
  

    <Box sx={{ p: 2 }}>

         <Typography variant="h6" gutterBottom>Hola, soy MIC tu asistente virtual</Typography> {/* Mensaje de MIC */}
        <Typography variant="body1" gutterBottom>
          Estoy aquí para ayudarte a generar tu mensaje de WhatsApp para que lo envíes a tus clientes.
        </Typography> {/* Mensaje de ayuda */}   

      <TextField
        label="Nombre de la Empresa"
        variant="outlined"
        fullWidth
        margin="normal"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        required
      />
     
      <TextField
        label="Productos que Ofrecemos"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={productos}
        onChange={(e) => setProductos(e.target.value)}
        required
      />

      <TextField
        label="Llamada a la Acción (Link o Número de WhatsApp)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={accionLink}
        onChange={(e) => setAccionLink(e.target.value)}
        
      />
      <Button variant="contained" onClick={handleClear} sx={{ mr: 1 }}>
        Limpiar
      </Button>
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      {apiData && <Typography variant="body1">{apiData}</Typography>}
      {loading && <Typography variant="body1">Cargando...</Typography>}
      <Button variant="contained" onClick={() => { handlePrompt(); handleClick(); }} disabled={loading} color="primary">
        Siguiente
      </Button>
    </Box>

    <img
        src={RobotImage}
        alt="Robot Asistente"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '100px', // Tamaño pequeño
          height: 'auto', // Ajusta la altura automáticamente
          transform: 'rotate(-15deg)', // Rotación para dar sensación de vuelo
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Efecto de sombra
        }}
      />

    </div>
    
  );
};

export default Formulario;