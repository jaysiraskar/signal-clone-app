import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {KeyboardAvoidingView }from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'
const RegisterScreen = ({navigation}) => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [imageUrl, setImageUrl] = useState("");

useLayoutEffect(() => {
navigation.setOptions({
    headerBackTitle: "Back to Login",
})
},[navigation]);

const register = () =>{
    auth.createUserWithEmailAndPassword(email,password)
    .then(authUser =>{
        authUser.user.updateProfile({
            displayName: name,
            photoURL: imageUrl || "https://www.hmiscfl.org/wp-content/uploads/2018/06/placeholder-Copy.png",
        })
    })
    .catch(error => (error.message));
};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{marginBottom: 50}}>
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer}>
        <Input 
        placeholder='Full Name' 
        autoFocus
        type='text'
        value={name}
        onChangeText={text => setName(text)}
        />
        <Input 
        placeholder='Email'
        type='email'
        value={email}
        onChangeText={text => setEmail(text)}
        />
        <Input 
        placeholder='Password' 
        secureTextEntry
        type='password'
        value={password}
        onChangeText={text => setPassword(text)}
        />
        <Input 
        placeholder='Profile Picture URL (Optional)' 
        type='text'
        value={imageUrl}
        onChangeText={text => setImageUrl(text)}
        onSubmitEditing={register}
        />
      </View>

      <Button 
      raised
      onPress={register}
      containerStyle={styles.button}
      title='Register' 
      />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor:'white',
    },

    inputContainer:{
        width: 300,
    },
    button:{
        width: 200,
        marginTop: 10,
    },
})