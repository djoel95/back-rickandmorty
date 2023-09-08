const validateRegister = (formData) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (formData.firstName.trim() === "") {
      errors.firstName = "El nombre es requerido";
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName = "El nombre solo debe contener letras";
    }

    if (formData.lastName.trim() === "") {
      errors.lastName = "El apellido es requerido";
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName = "El apellido solo debe contener letras";
    }

    if (formData.gender.trim() === "") {
      errors.gender = "El género es requerido";
    }

    if (formData.birthDate.trim() === "") {
      errors.birthDate = "La fecha de nacimiento es requerida";
    }

    if (formData.email.trim() === "") {
      errors.email = "El correo electrónico es requerido";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "El correo electrónico no es válido";
    }

    if (formData.password.trim() === "") {
      errors.password = "La contraseña es requerida";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password =
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número";
    }

    return errors;
  };

  module.exports = validateRegister;