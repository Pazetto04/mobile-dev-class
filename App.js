import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.profile}>Perfil</Text>

      <View style={styles.main}>
        {/* Gradiente como borda */}
        <LinearGradient
          colors={['#d213cc', '#cf7521', '#250fd2']}
          locations={[0, 0.5, 1]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBorder}
        >
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/179247991?v=4' }}
            style={styles.img}
          />
        </LinearGradient>

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
            selectionColor="#b42d9e"
          />
          <TextInput
            style={[styles.input, styles.inputDisabled]}
            placeholder="Alterar email"
            placeholderTextColor="#333333"
            selectionColor="#b42d9e"
            defaultValue='mpazetto04@gmail.com'
            editable={false}
            color='#414141'
            backgroundColor='#1d1d1d'
          />
        </View>
        <Text style={styles.label}>Alterar senha</Text>

        <View style={styles.info}>
          <TextInput
            style={styles.input}
            placeholder="Senha atual"
            placeholderTextColor="#747373"
            selectionColor="#b42d9e"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            placeholderTextColor="#747373"
            selectionColor="#b42d9e"
            secureTextEntry={true}
          />

        <TouchableOpacity
            style={styles.btnSubmit}
            title="Enviar"
            onPress={() => {}}
            color="#fff"
          >
            <Text style={styles.btnSubmitText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    placeholderTextColor: '#747373',
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
  // Gradiente que serve de borda
  gradientBorder: {
    width: 184,          // 180 + (2 * 2)  → 2px de cada lado
    height: 184,
    borderRadius: 95,    // metade de 184
    padding: 3,          // espessura da borda
    marginTop: 32,
    marginBottom: 16,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 95,    // metade de 184
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
    backgroundColor: '#b42d9e',
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