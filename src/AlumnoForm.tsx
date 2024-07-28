import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

type AlumnoFormProps = {
  cedula: string;
  setCedula: (cedula: string) => void;
  nombre: string;
  setNombre: (nombre: string) => void;
  correo: string;
  setCorreo: (correo: string) => void;
  agregarAlumno: () => void;
};

const AlumnoForm: React.FC<AlumnoFormProps> = ({
  cedula,
  setCedula,
  nombre,
  setNombre,
  correo,
  setCorreo,
  agregarAlumno,
}) => {
  const handleCedulaChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setCedula(numericText);
  };

  return (
    <View>
      <Text style={styles.title}>Carga de Alumnos - 8vo Semestre</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de Cédula"
        keyboardType="numeric"
        value={cedula}
        onChangeText={handleCedulaChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre del Alumno"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />
      <Button title="Agregar Alumno" onPress={agregarAlumno} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default AlumnoForm;
