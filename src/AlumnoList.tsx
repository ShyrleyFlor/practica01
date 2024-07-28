import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

type Alumno = {
  cedula: string;
  nombre: string;
  correo: string;
};

type AlumnoListProps = {
  alumnos: Alumno[];
};

const AlumnoList: React.FC<AlumnoListProps> = ({alumnos}) => {
  const renderItem = ({item}: {item: Alumno}) => (
    <View style={styles.item}>
      <Text>{`CI: ${item.cedula} - Nombre: ${item.nombre} - Correo: ${item.correo}`}</Text>
    </View>
  );

  return (
    <FlatList
      data={alumnos}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#264653',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    color: '#000814',
  },
});

export default AlumnoList;
