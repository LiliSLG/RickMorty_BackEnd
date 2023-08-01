import React from 'react';
import styles from './Form.module.css';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
    const errors = {};
    if (!regexEmail.test(inputs.email)) {
        errors.email = 'Debe ser un correo electrónico';
    }
    if (!inputs.password.length) {
        errors.password = "Se requiere un nombre"
    }
    return errors
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;  
    setInputs({ ...inputs, [name]: value })    
    setErrors(validate({ ...inputs, [name]: value }));
    // setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      alert("Debe llenar todos los campos")
    } else {
      alert("Datos completos")
      setInputs({
        email: '',
        password: ''
      })
      setErrors(validate({
        email: '',
        password: ''
      }));
    }
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
      <div>
      <img src="https://wallpaperaccess.com/full/831749.png" alt="" />
      </div>
        <label>Correo Electrónico:</label>
        <input name="email"
          value={inputs.email}
          className={errors.email && styles.warning}
          placeholder="Escribe tu email..."
          type="text" 
          onChange={handleChange}/>
          <p className={errors.email && styles.danger}>{errors.email}</p>
        <label>Password:</label>
        <input name="password"
          value={inputs.password}
          className={errors.password && styles.warning}
          placeholder="Escribe una password..."
          type="password" 
          onChange={handleChange}/>
          <p className={errors.password && styles.danger}>{errors.password}</p>
        
        <button type="submit">Enviar</button>
      </form>
    </div>)
}
