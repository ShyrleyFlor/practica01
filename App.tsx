import React, {useState} from 'react';
import {SafeAreaView, View, Button, StyleSheet} from 'react-native';
import AlumnoForm from './src/AlumnoForm';
import AlumnoList from './src/AlumnoList';

type Alumno = {
  cedula: string;
  nombre: string;
  correo: string;
};

const App = () => {
  const [cedula, setCedula] = useState<string>('');
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  const agregarAlumno = () => {
    if (cedula && nombre && correo) {
      setAlumnos([...alumnos, {cedula, nombre, correo}]);
      setCedula('');
      setNombre('');
      setCorreo('');
    }
  };

  const eliminarAlumnos = () => {
    setAlumnos([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <AlumnoForm
          cedula={cedula}
          setCedula={setCedula}
          nombre={nombre}
          setNombre={setNombre}
          correo={correo}
          setCorreo={setCorreo}
          agregarAlumno={agregarAlumno}
        />
        {alumnos.length > 0 && (
          <Button
            title="Eliminar Todos los Alumnos"
            onPress={eliminarAlumnos}
          />
        )}
        <AlumnoList alumnos={alumnos} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  viewContainer: {
    padding: 20,
    flex: 1,
  },
});

export default App;
