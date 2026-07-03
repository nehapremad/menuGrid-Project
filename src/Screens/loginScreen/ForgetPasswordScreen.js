import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../components/AuthHeader'
import Card from '../components/Card'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const ForgetPasswordScreen = () => {

  const userSchema = z.object({
    email: z
      .string()
      .email({ message: "Email Address is required" })
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "@ must be important" })
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema),
    mode: "onTouched",
    defaultValues: {
      email: '',
    }
  })

  const onSubmit = (data) => {
    console.log(data)
    navigation.navigate('otpScreen')
  }

  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>

        <AuthHeader />

        <Card customStyle={styles.childCard}>

          <View style={styles.circle}>
            <MaterialDesignIcons
              name="lock-reset"
              size={40}
              color="#344075"
            />
          </View>

          <Text style={styles.title}>Forgot Password</Text>

          <Text style={styles.subtitle}>
            Enter your email address and we'll{"\n"}
            send you a OTP to rest your{"\n"}
            password.
          </Text>

          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required"
            }}

            render={({ field: { onChange, value, onBlur } }) => (

              <InputField
                style={{ backgroundColor: '#edf1ff', }}
                label="Email Address"
                iconName="email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur} />
            )}
          />

          {
            errors.email &&
            <Text style={styles.error}>
              {errors.email.message}
            </Text>
          }

          <CustomButton customStyle={{ marginTop: 35, marginHorizontal: 15 }}
            label='Send OTP'
            onPress={handleSubmit(onSubmit)}
          />

          <View style={styles.line}></View>

          <TouchableOpacity
            onPress={() => navigation.navigate('loginScreen')}>
            <Text style={styles.bottomText}>Back to Login</Text>
          </TouchableOpacity>

        </Card>

      </View>
    </KeyboardAwareScrollView>
  )
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F7FF',
    alignItems: 'center',
    paddingTop: 55,
  },

  childCard: {
    borderRadius: 20,
    height: "80%",
    marginTop: -10,
  },

  circle: {
    borderRadius: 50,
    backgroundColor: '#edf1ff',
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "40%",
    marginTop: "5%",

  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#344075',
    textAlign: 'center',
    marginTop: 25,
  },

  subtitle: {
    color: "Black",
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 12
  },

  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#a8a8a8',
    marginVertical: 20,
    marginHorizontal: 15,
    marginTop: 20,

  },

  bottomText: {
    textAlign: 'center',
    color: '#344075',
    marginBottom: 15,

  }, error: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 15
  }

})