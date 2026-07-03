import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputField from '../../components/InputField'
import CustomButton from '../../components/InputField'
import AuthHeader from '../../components/InputField'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const LoginScreen = () => {
    const navigation = useNavigation()

    const userSchema = z.object({
        email: z
            .string()
            .email({ message: "Email Address is required" })
            .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "@ must be important" }),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters long")
            // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            // .regex(/[0-9]/, "Password must contain at least one number")
            // .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema),
        mode: "onTouched",
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        navigation.navigate('forgotScreen')
    }

    return (

        <KeyboardAwareScrollView>
            <View style={styles.container}>

                <AuthHeader />

                <Text style={styles.title}>
                    WELCOME BACK
                </Text>

                <Text style={styles.subtitle}>
                    Please sign in to continue
                </Text>

                <View style={styles.card}>

                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: null
                        }}

                        render={({ field: { onChange, value, onBlur } }) => (

                            <InputField
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

                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: null
                        }}

                        render={({ field: { onChange, value, name } }) => (

                            <InputField
                                label="Password"
                                iconName="lock"
                                value={value}
                                secureTextEntry={true}
                                onChangeText={onChange}
                                name={name}
                            />
                        )}
                    />

                    {
                        errors.password &&
                        <Text style={styles.error}>
                            {errors.password.message}
                        </Text>
                    }

                    <TouchableOpacity onPress={() =>
                        navigation.navigate('resetPasswordScreen')}>
                        <Text style={styles.forgot}>
                            Forgot Password?
                        </Text>

                    </TouchableOpacity>

                    <CustomButton
                        label="Sign In"
                        onPress={handleSubmit(onSubmit)}
                    />

                </View>
            </View>
        </KeyboardAwareScrollView>

    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F7F7FF',
        alignItems: 'center',
        paddingTop: 55,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#344075'
    },

    subtitle: {
        color: 'gray'
    },

    card: {
        width: '88%',
        backgroundColor: 'white',
        borderRadius: 28,
        padding: 20,
        height: '80%',
        marginTop: 30,
        borderColor: '#d5d5dd',
        borderWidth: 1
    },

    forgot: {
        textAlign: 'right',
        marginTop: 18,
        color: '#344075',
        fontSize: 15
    },

    error: {
        color: 'red',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15
    }

})