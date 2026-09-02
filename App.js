import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [name, setName] = useState('');

  function closeKeyboard() {
    Keyboard.dismiss();
  }
  function submitForm(){
    return Alert.alert('Formulario Enviado');
  }

  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}>
    <KeyboardAvoidingView //Makes the keyboard not cover the input fields.
      style={{ flex: 1 }}
      //If else command to check the platform and apply the best behavior for the keyboard.
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> 
      <ScrollView contentContainerStyle={styles.scrollView} bounces={false} >
        
          <SafeAreaView style={styles.container}>

            <StatusBar style="light" />
            <Text style={styles.profile}>Perfil</Text>

            <View style={styles.main}>
              <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/179247991?v=4' }}
                style={styles.img}
              />

              <TouchableOpacity>
                <Text style={styles.uploadText}>Alterar foto</Text>
              </TouchableOpacity>

              <View style={styles.info}>
                <Text style={styles.username}>Matheus Pazetto</Text>
                <Text style={styles.role}>Desenvolvedor</Text>
              </View>

              <View style={styles.info}>
                <TextInput
                  style={styles.input}
                  placeholder="Alterar nome"
                  placeholderTextColor="#747373"
                  selectionColor="#317c44"
                  defaultValue={name}
                  onChangeText={()=> setName()}
                />
                <TextInput
                  style={[styles.input, styles.inputDisabled]}
                  placeholder="Alterar email"
                  placeholderTextColor="#333333"
                  selectionColor="#317c44"
                  defaultValue="mpazetto04@gmail.com"
                  editable={false}
                />
              </View>

              <Text style={styles.label}>Alterar senha</Text>

              <View style={styles.info}>
                <TextInput
                  style={styles.input}
                  placeholder="Senha atual"
                  placeholderTextColor="#747373"
                  selectionColor="#317c44"
                  secureTextEntry={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Nova senha"
                  placeholderTextColor="#747373"
                  selectionColor="#317c44"
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  style={styles.btnSubmit}
                  onPress={submitForm}
                >
                  <Text style={styles.btnSubmitText}>Atualizar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
       
      </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#202024',
  },
  profile: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 24,
    color: '#fff',
    paddingTop: 25,
  },
  input: {
    backgroundColor: '#292929',
    width: '90%',
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    color: '#fff',
  },
  inputDisabled: {
    backgroundColor: '#1d1d1d',
    color: '#414141',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '6%',
    fontSize: 16,
    color: '#fff',
    marginTop: 16,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#317c44', // cor da borda (pode mudar)
    marginTop: 32,
    marginBottom: 8,
  },
  info: {
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
  },
  username: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',
  },
  role: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 2,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  btnSubmit: {
    width: '90%',
    height: 56,
    backgroundColor: '#317c44',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  btnSubmitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});