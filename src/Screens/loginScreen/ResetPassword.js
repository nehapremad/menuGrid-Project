import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Card from '../components/Card'
import AuthHeader from '../../components/AuthHeader'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import InputField from '../../components/InputField'
import CustomButton from '../../components/CustomButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

const ResetPassword = () => {

    const passwordFormSchema = z
        .object({
            newPassword: z
                .string()
                .min(8, "Password must be at least 8 characters long")
                .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
                .regex(/[a-z]/, "Password must contain at least one lowercase letter")
                .regex(/[0-9]/, "Password must contain at least one number")
                .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),

            confirmPassword: z
                .string()
                .min(1, "Please confirm your password"),
        })
        .refine((data) => data.newPassword === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        })

//    type PasswordData = z.infer<typeof passwordFormSchema>;

const {control, handleSubmit, formState: { errors },} = useForm({
  resolver: zodResolver(passwordFormSchema),
  mode: "onTouched",
  defaultValues: {
    newPassword: "",
    confirmPassword: "",
  },
});

const onSubmit = (data) => {
  console.log(data);
};

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <AuthHeader />

                {/* <Card customStyle={styles.childCard}> */}
                <View style={styles.childCard}>

                    <View style={styles.circle}>
                        <MaterialDesignIcons
                            name="lock-reset"
                            size={40}
                            color="#344075"
                        />
                    </View>

                    <Text style={styles.title}>Create New Password</Text>

                    <Text style={styles.subtitle}>Your new password must be different{"\n"}
                        from previously used password
                    </Text>

                    <Controller
                        control={control}
                        name="newPassword"

                        render={({ field: { onChange, value, onBlur, name } }) => (

                            <InputField
                                label="New Password"
                                iconName="lock"
                                value={value}
                                placeholder="............"
                                secureTextEntry={true}
                                onChangeText={onChange}
                                name={name}
                                onBlur={onBlur} />
                        )}
                    />

                    {
                        errors.newPassword &&
                        <Text style={styles.error}>
                            {errors.newPassword.message}
                        </Text>
                    }

                    <Controller
                        control={control}
                        name="confirmPassword"

                        render={({ field: { onChange, value, onBlur, name } }) => (

                            <InputField
                                label="Confirm Password"
                                iconName="lock"
                                value={value}
                                placeholder="............"
                                secureTextEntry={true}
                                onChangeText={onChange}
                                name={name}
                                onBlur={onBlur} />
                        )}
                    />

                    {
                        errors.confirmPassword &&
                        <Text style={styles.error}>
                            {errors.confirmPassword.message}
                        </Text>
                    }

                    {/* <View style={styles.childContainer}>
                </View> */}

                    <CustomButton
                        onPress={handleSubmit(onSubmit)}
                        label='Reset Password'
                    />
                    {/* </Card> */}
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FF',
        alignItems: 'center',
        paddingTop: 55,
    },

    childCard: {
        flex: 1,
        borderRadius: 30,
        width: '88%',
        backgroundColor: '#fff',
        padding: 20,
        borderColor: '#d5d5dd',
        // height: '85%',
        // marginTop: 30,
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
        color: "black",
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12
    },

    input: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#9691916e',
        paddingHorizontal: 15,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        color: "#757171f8"
    },
    textInput: {
        color: "#000",
        flex: 1,
        backgroundColor: '#edf1ff'
    },

    error: {
        color: 'red',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15
    }
})