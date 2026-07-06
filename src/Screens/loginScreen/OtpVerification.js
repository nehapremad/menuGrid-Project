import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View, AppState } from "react-native";
import AuthHeader from "../../../src/components/AuthHeader";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import CustomButton from "../../../src/components/CustomButton";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { OtpInput } from "react-native-otp-entry";


const OtpVerification = () => {
    const OTP_DURATION = 30;

    const timerRef = useRef(null);
    const expiryRef = useRef(0);

    const [remainingTime, setRemainingTime] = useState(OTP_DURATION);
    const [canResend, setCanResend] = useState(false);

    const startTimer = () => {
        expiryRef.current = Date.now() + OTP_DURATION * 1000;

        setCanResend(false);

        runTimer();
    };

    const runTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
            const diff = Math.max(
                0,
                Math.floor((expiryRef.current - Date.now()) / 1000)
            );

            setRemainingTime(diff);

            if (diff === 0) {
                clearInterval(timerRef.current);
                timerRef.current = null;
                setCanResend(true);
            }
        }, 1000);
    };

    const otpSchema = z.object({
        otp: z
            .string()
            .length(4, { message: 'OTP must be exactly 4 digits.' })
            .regex(/^\d+$/, { message: 'OTP must contain only numbers.' }),
    });

    const { control, handleSubmit, formState: { errors, isSubmitting }, } = useForm({
        resolver: zodResolver(otpSchema),
        mode: "onTouched",
        defaultValues: {
            otp: "",
        },
    })
    // useEffect(() => {
    //     startTimer();
    // }, []);

    useEffect(() => {
        const sub = AppState.addEventListener("change", (state) => {
            if (state === "active") {
                if (!expiryRef.current) return;

                const diff = Math.max(
                    0,
                    Math.floor((expiryRef.current - Date.now()) / 1000)
                );

                setRemainingTime(diff);

                if (diff === 0) {
                    setCanResend(true);
                }
            }
        });

        return () => {
            sub.remove();

            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    // type OtpFormData = z.infer<typeof otpSchema>;

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
    };

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <AuthHeader />

                <View style={styles.childCard}>

                    <View style={styles.circle}>
                        <MaterialDesignIcons
                            name="lock-reset"
                            size={40}
                            color="#344075"
                        />
                    </View>

                    <Text style={styles.title}>OTP Verification</Text>

                    <Text style={styles.subtitle}>
                        Enter the 4-digit code sent to your{"\n"}email.
                    </Text>

                    {/* <View style={styles.otpContainer}> */}

                    <View style={styles.otpContainer}>

                        <Controller
                            control={control}
                            name="otp"
                            render={({ field: { onChange, onBlur, value } }) => (

                                <OtpInput
                                    numberOfDigits={4}
                                    autoFocus={true}
                                    blurOnFilled={true}
                                    type="numeric"
                                    onTextChange={(text) => onChange(text)}
                                    onFilled={(text) => {
                                        onChange(text);
                                        handleSubmit(onSubmit)();
                                    }}
                                    value={value}
                                />
                            )}
                        />
                    </View>
                    {/* </View> */}

                    {(errors.otp) && (
                        <Text style={styles.errorText}>
                            {errors.otp.message}
                        </Text>
                    )}

                    <CustomButton

                        label={isSubmitting ? "Verifying..." : "Verify"}
                        customStyle={{ marginTop: 25 }}
                        onPress={handleSubmit(onSubmit)}
                    />

                    <TouchableOpacity
                        disabled={!canResend}
                        onPress={() => {
                            // Yahan Resend OTP API call karna

                            startTimer();
                        }}
                    >
                        <Text style={styles.bottomText}>
                            {canResend
                                ? "Resend OTP"
                                : `Resend in ${remainingTime} s`}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default OtpVerification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7FF",
        alignItems: "center",
        paddingTop: 55,
    },

    childCard: {
        width: "88%",
        backgroundColor: "#fff",
        borderRadius: 28,
        padding: 20,
        marginTop: 30,
        borderWidth: 1,
        borderColor: "#d5d5dd",
    },

    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#edf1ff",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#344075",
        textAlign: "center",
        marginTop: 20,
    },

    subtitle: {
        textAlign: "center",
        color: "black",
        marginTop: 10,
    },

    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        paddingHorizontal: 20,
    },
    input: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: 22,
        color: "#000",
    },

    errorText: {
        color: "red",
        textAlign: "center",
        marginTop: 10,
    },

    bottomText: {
        textAlign: "center",
        marginTop: 15,
        color: "#344075",
    },
})