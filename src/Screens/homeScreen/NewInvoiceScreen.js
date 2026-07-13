import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, } from 'react-native'
import React from 'react'
import AntDesign from '@react-native-vector-icons/ant-design'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import InputField from '../../components/InputField'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {launchImageLibrary} from 'react-native-image-picker';

const NewInvoiceScreen = () => {

    const userSchema = z.object({
       Supplier: z.string().min(1, 'Supplier is required'),

  InvoiceNumber: z.string().min(1, 'Invoice Number is required'),

  InvoiceDate: z.string().min(1, 'Invoice Date is required'),

  receiptImage: z
    .object({
      uri: z.string(),
      fileName: z.string().optional(),
      type: z.string().optional(),
    })
    .nullable()
    .refine((file) => file !== null, {
      message: "Receipt Image is required",

    })
            
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema),
        mode: 'onTouched',
        defaultValues: {
            Supplier: '',
            InvoiceNumber: '',
            InvoiceDate: '',
            remarks: '',
            receiptImage: null,
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        // navigation.navigate('forgotScreen')
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity>
                    {/* onPress={() => navigation.goBack('Suppliers')} */}
                    <View style={styles.childHeader}>

                        <AntDesign style={styles.leftArrowIcon}
                            name="arrow-left"
                            size={18}
                            color="#000" />
                        <Text style={styles.newInvoiceText}
                        >New Invoice</Text>

                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.supplierContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialDesignIcons
                        name="office-building-outline"
                        size={22}
                        color="#323b60"
                    />
                    <Text style={styles.supplierText}>Supplier Information</Text>
                </View>

                <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
                    <Controller
                        control={control}
                        name="Supplier"
                        rules={{
                            required: null
                        }}

                        render={({ field: { onChange, value, onBlur } }) => (

                            <InputField
                                label="Supplier"
                                value={value}
                                onChangeText={onChange}
                                placeholder="Sipplier"
                                placeholderTextColor={'#6B7280'}
                                onBlur={onBlur} />
                        )}
                    />

                    {
                        errors.Supplier &&
                        <Text style={styles.error}>
                            {errors.Supplier.message}
                        </Text>
                    }

                    <Controller
                        control={control}
                        name="InvoiceNumber"
                        rules={{
                            required: null
                        }}

                        render={({ field: { onChange, value, onBlur, name } }) => (

                            <InputField
                                label="Invoice Number"
                                value={value}
                                onChangeText={onChange}
                                placeholder="Invoice Number"
                                placeholderTextColor={'#6B7280'}
                                onBlur={onBlur} />
                        )}
                    />

                    {
                        errors.InvoiceNumber &&
                        <Text style={styles.error}>
                            {errors.InvoiceNumber.message}
                        </Text>
                    }

                    <Controller
                        control={control}
                        name="InvoiceDate"
                        render={({ field: { onChange, value } }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    DateTimePickerAndroid.open({
                                        value: value ? new Date(value) : new Date(),
                                        mode: 'date',
                                        is24Hour: true,
                                        onChange: (event, selectedDate) => {
                                            if (selectedDate) {
                                                onChange(selectedDate.toLocaleDateString('en-GB'));
                                            }
                                        },
                                    });
                                }}
                            >
                                <View pointerEvents="none">
                                    <InputField
                                        label="Invoice Date"
                                        value={value}
                                        placeholder="Select Invoice Date"
                                        placeholderTextColor={'#6B7280'}
                                        editable={false}
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                    />

                    {errors.InvoiceDate && (
                        <Text style={styles.error}>
                            {errors.InvoiceDate.message}
                        </Text>
                    )}
                </View>

            </View>

            <Text style={styles.productHeading}>REMARKS / PRODUCTS</Text>

            <Controller
                control={control}
                name="remarks"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        placeholder="Add a remarks about this invoice..."
                        placeholderTextColor={'#6B7280'}
                        multiline
                        value={value}
                        onChangeText={onChange}
                        style={styles.remarkInput}
                    />
                )}
            />

            {errors.remarks && (
                <Text style={styles.error}>{errors.remarks.message}</Text>
            )}


            <View style={styles.card}>

                <View style={{ flexDirection: 'row', }}>
                    <AntDesign style={styles.camraIcon}
                        name="camera"
                        size={18}
                        color="#4253C3" />

                    <Text style={styles.imageTitle}>Receipt Image</Text>
                </View>

                <TouchableOpacity style={styles.uploadBox}>
                    <Text>Click or Drag to Upload Receipt</Text>
                    <Text>PNG, JPG or PDF up to 10MB</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Invoice Summary</Text>

                <View style={styles.row}>
                    <Text>Subtotal</Text>

                    <Controller
                        control={control}
                        name="subtotal"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                                style={styles.amountInput}
                                placeholder="$"
                            />
                        )}
                    />
                </View>

                {errors.subtotal && (
                    <Text style={styles.error}>{errors.subtotal.message}</Text>
                )}

                <View style={styles.row}>
                    <Text>Tax (10%)</Text>

                    <Controller
                        control={control}
                        name="tax"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                                style={styles.amountInput}
                                placeholder="$"
                            />
                        )}
                    />
                </View>

                {errors.tax && (
                    <Text style={styles.error}>{errors.tax.message}</Text>
                )}

                <View style={{ borderColor: '#C7C5CF4D', borderWidth: 1 }}></View>
                <View style={styles.row}>
                    <Text>Grand Total</Text>

                    <Controller
                        control={control}
                        name="grandTotal"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                                style={styles.amountInput}
                                placeholder="$"
                            />
                        )}
                    />
                </View>

                {errors.grandTotal && (
                    <Text style={styles.error}>{errors.grandTotal.message}</Text>
                )}

                <TouchableOpacity style={styles.draftBtn}>
                    <Text style={{ color: "#4A5CFF", fontWeight: "600" }}>
                        Save as Draft
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.saveText}>Save Invoice</Text>
                </TouchableOpacity>
            </View>



        </KeyboardAwareScrollView>
    )
}

export default NewInvoiceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FF'
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
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F1F3FB',
        borderRadius: 8,
    },

    childHeader: {
        flex: 1,
        flexDirection: 'row',
    },

    leftArrowIcon: {
        paddingLeft: 20,
        paddingTop: 20
    },

    newInvoiceText: {
        paddingLeft: 20,
        paddingTop: 15,
        fontSize: 20,
        fontWeight: 'bold'

    },

    supplierContainer: {
        // height: ,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        borderColor: '#88878d1a',
        borderWidth: 1,
        marginHorizontal: 15,
        marginVertical: 10,
    },

    supplierText: {
        paddingLeft: 8,
        fontSize: 16,
    },

    error: {
        color: 'red',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15
    },

    productManiContainer: {
        marginHorizontal: 20,
        marginVertical: 20
    },

    productText: {
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 20
    },

    productInput: {
        borderColor: '#C7C5CF4D',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 15,
        height: 100
    },

    productHeading: {
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 10,
        marginLeft: 20,
        color: "#444",
        marginHorizontal: 20,
        marginVertical: 20
    },

    remarkInput: {
        marginHorizontal: 25,
        // backgroundColor: "#fff",
        borderRadius: 12,
        height: 100,
        padding: 15,
        textAlignVertical: "top",
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#C7C5CF4D'
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 16,
        marginTop: 18,
    },

    camraIcon: {
        marginLeft: 10,
        marginBottom: 20,
    },

    imageTitle: {
        marginLeft: 9,
        fontSize: 16,
        fontWeight: "600",
        // marginBottom: 15,
    },

    uploadBox: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 12,
        borderColor: "#bbb",
        height: 130,
        justifyContent: "center",
        alignItems: "center",
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },

    amountInput: {
        width: 90,
        height: 40,
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 6,
        textAlign: "center",
    },

    draftBtn: {
        marginHorizontal: 25,
        borderWidth: 1,
        borderColor: "#4253C333",
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    saveBtn: {
        marginHorizontal: 25,
        backgroundColor: "#363F73",
        height: 52,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },

    saveText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },

})