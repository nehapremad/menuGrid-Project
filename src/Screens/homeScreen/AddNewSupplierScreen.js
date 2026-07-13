import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from '@react-native-vector-icons/ant-design';

const supplierSchema = z.object({
    businessName: z
        .string()
        .min(3, 'Business name is required'),

    gstNumber: z
        .string()
        .regex(
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
            'Enter valid GST Number',
        ),

    contactPerson: z
        .string()
        .min(3, 'Contact person is required'),

    email: z
        .string()
        .email('Enter valid email'),

    phone: z
        .string()
        .regex(/^[6-9]\d{9}$/, 'Enter valid phone number'),

    address: z
        .string()
        .min(5, 'Address is required'),
});

const AddNewSupplierScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(supplierSchema),
        defaultValues: {
            businessName: '',
            gstNumber: '',
            contactPerson: '',
            email: '',
            phone: '',
            address: '',
        },
    });

    const onSubmit = data => {
        console.log(data);
    };

    const InputField = ({ label, placeholder, name, keyboardType = 'default', multiline = false, }) => (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>

            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={[
                            styles.input,
                            multiline && {
                                height: 100,
                                textAlignVertical: 'top',
                            },
                        ]}
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChange}
                        keyboardType={keyboardType}
                        multiline={multiline}
                    />
                )}
            />

            {errors[name] && (
                <Text style={styles.error}>
                    {errors[name]?.message}
                </Text>
            )}
        </View>
    );

    return (
        <KeyboardAwareScrollView style={styles.container}>

             <View style={styles.header}>

                    <TouchableOpacity>
                        <View style={styles.childHeader}>

                            <AntDesign style={styles.leftArrowIcon}
                                name="arrow-left"
                                size={18}
                                color="#000" />
                            <Text style={styles.nearText}
                            >Suppliers</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}>

                <View style={styles.card}>

                    <InputField
                        label="Legal Business Name *"
                        placeholder="e.g. Acme Hospitality Group LLC"
                        name="businessName"
                    />

                    <InputField
                        label="GST Number *"
                        placeholder="Enter valid GST registration number"
                        name="gstNumber"
                        autoCapitalize="characters"
                    />

                    <InputField
                        label="Contact Person"
                        placeholder="Enter Contact Person"
                        name="contactPerson"
                    />

                    <InputField
                        label="Email Address"
                        placeholder="Enter Email Address"
                        keyboardType="email-address"
                        name="email"
                    />

                    <InputField
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                        keyboardType="number-pad"
                        name="phone"
                    />

                    <InputField
                        label="Address"
                        placeholder="Enter Address"
                        name="address"
                        multiline
                    />

                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>
                        Save Supplier
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAwareScrollView>
    );
};

export default AddNewSupplierScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FB',
    },

     header: {
        // width: '90%',
        height: 64,
        marginHorizontal: 10,
        marginTop: 20,
        marginLeft: 16,
        paddingRight: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F1F3FB',
        borderRadius: 8,
    },

    nearText: {
        paddingLeft: 20,
        paddingTop: 15,
        fontSize: 20,
        fontWeight: 'bold'

    },

    childHeader: {
        flex: 1,
        flexDirection: 'row',
    },

    leftArrowIcon: {
        paddingLeft: 20,
        paddingTop: 20
    },

    card: {
        margin: 15,
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 18,
    },

    inputContainer: {
        marginBottom: 18,
    },

    label: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },

    input: {
        backgroundColor: '#F3F5FB',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 48,
        fontSize: 14,
        color: '#000',
    },

    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },

    button: {
        marginHorizontal: 15,
        backgroundColor: '#2F3B6A',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});