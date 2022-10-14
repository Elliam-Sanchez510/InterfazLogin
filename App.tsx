import {
  StyleSheet,
  Text,
  TextInput,
  View,

} from 'react-native';
import Svg, {
  Image,
} from 'react-native-svg';
import { Entypo } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.CirculoImg}>
        <Svg>
          <Image href={require('./Imagenes/circulo.svg')}
          />
        </Svg>
        <Text style={styles.Time}>9:40</Text>
      </View>
      
      <View style={styles.Iconos}>

        <Entypo name="bar-graph"
          style={styles.Icons}
        />
        <Entypo name="signal"
          style={styles.Icons}
        />
        <Entypo name="progress-full"
          style={styles.Icons}
        />
      </View>

      <View>
        <Text style={styles.Welcome}>welcome back!</Text>

        <Svg style={styles.DiveriaImg}>
          <Image href={require('./Imagenes/Diveria-Home.svg')}
          />
        </Svg>
      </View>

      <View>

        <View>
          <TextInput
            style={styles.TextInput}
            placeholder='Enter e-mail'
          />
          <TextInput
            style={styles.TextInput}
            placeholder='Enter password'
            keyboardType='numeric'
          />
        </View>

        <Text style={styles.Forgot}>
          Forgot password
        </Text>

        <View style={styles.Login}>
          <Text style={styles.TextLogin}>
            Login
          </Text>
        </View>

        <View style={styles.Account}>
          <Text>
            Don't have an account?
          </Text>
          <Text style={styles.Signup}> Sign up</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F6',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  CirculoImg: {
    position: 'absolute',
    right: '45%',
  },
  Time: {
    fontSize: 20,
    position: 'absolute',
    padding: 20,
    paddingStart: 40
  },
  Iconos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '55%',
    padding: 20,
  },
  Icons: {
    fontSize: 20,
    paddingHorizontal: 8,
  },
  Welcome: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    margin: 20,
    paddingLeft: 40,
  },
  DiveriaImg: {
    marginTop: 20,
    paddingLeft: 40,
  },
  TextInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingStart: 20,
    margin: 12,
  },
  Forgot: {
    color: '#44ACC2',
    padding: 15,
    textAlign: 'center',
    margin: 10,
  },
  Login: {
    backgroundColor: '#48C2DC',
  },
  TextLogin: {
    color: '#ffff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    margin: 5
  },
  Account: {
    flexDirection: 'row',
    margin: 18,
    padding: 10,
  },
  Signup: {
    color: '#008C95',
    fontWeight: 'bold',
  }
});
