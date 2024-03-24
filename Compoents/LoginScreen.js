import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]  = useState(false);

  const auth =()=>{
    if(email == "sannithnalluri@gmail.com" && password == 12345678){
        navigation.navigate('Home');
    }
    else{
        setError(true);
    } 
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.jpg')}  /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      {error?<Text style={{color:'red'}}>Incorrect username and password</Text>:<Text></Text>}
      <TouchableOpacity   onPress={auth} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity  onPress={() => navigation.navigate('signup')} style={styles.signup}>
        <Text style={styles.signupText}>Doesn't Have Account?Sign up</Text> 
      </TouchableOpacity>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width:300,
    height:300
  },

  inputView: {
    backgroundColor: "#F6f6f6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },
  loginText:{
    color:'white'

  },
  signupText:{
    color:'blue',
    fontSize:16,
  },
  signup:{
    marginTop:10,
  }
});