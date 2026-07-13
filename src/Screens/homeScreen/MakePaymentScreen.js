import React from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity,} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AntDesign from "@react-native-vector-icons/ant-design";

const paymentSchema = z.object({
  paymentAmount: z
    .string()
    .min(1, "Payment Amount is required")
    .refine((value) => Number(value) > 0, {
      message: "Enter valid amount",
    }),

  transactionId: z
    .string()
    .min(3, "Transaction ID is required"),

  notes: z.string().optional(),
});

const MakePaymentScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentAmount: "",
      transactionId: "",
      notes: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView style={styles.container}>

          <View style={styles.header}>

                <TouchableOpacity>
                    {/* onPress={() => navigation.goBack('Suppliers')} */}
                    <View style={styles.childHeader}>

                        <AntDesign style={styles.leftArrowIcon}
                            name="arrow-left"
                            size={18}
                            color="#000" />
                        <Text style={styles.viewText}
                        >View Details</Text>

                    </View>
                </TouchableOpacity>
            </View>

      <View style={styles.card}>
        <Text style={styles.label}>SUPPLIER</Text>
        <Text style={styles.name}>Fresh{'\n'}Farms</Text>
        
<View style={{flexDirection:'row'}}>
        <Text style={styles.balanceTitle}>Total Balance Due</Text>
        <Text style={styles.balance}>₹1,240.00</Text>
      </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Payment Amount</Text>

        <Controller
          control={control}
          name="paymentAmount"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="0.00"
              keyboardType="numeric"
              placeholderTextColor={"#46464E66"}
              value={value} 
              onChangeText={onChange}
              style={styles.input}
            />
          )}
        />

        {errors.paymentAmount && (
          <Text style={styles.error}>
            {errors.paymentAmount.message}
          </Text>
        )}

        <TouchableOpacity style={styles.payBtn}>
          <Text>Pay Full Balance</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Transaction ID</Text>

        <Controller
          control={control}
          name="transactionId"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Enter manual ID or receipt number"
              placeholderTextColor={'#46464E66'}
              value={value}
              onChangeText={onChange}
              style={styles.input}
            />
          )}
        />

        {errors.transactionId && (
          <Text style={styles.error}>
            {errors.transactionId.message}
          </Text>
        )}

        <Text style={[styles.title, { marginTop: 15 }]}>
          Notes (Optional)
        </Text>

        <Controller
          control={control}
          name="notes"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Add internal reference note..."
              placeholderTextColor={'#46464E66'}
              value={value}
              onChangeText={onChange}
              multiline
              style={[styles.input, { height: 90 }]}
            />
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.updateBtn}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.updateText}>
          Update Balance Due
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MakePaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    padding: 15,
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

    viewText: {
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
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    // flexDirection:'row',
    // marginBottom: 20,
    marginVertical:20,
    marginHorizontal:20

  },

  label: {
    color: "#888",
    fontSize: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,
    flexDirection:'row'
  },

  balanceTitle: {
    marginTop: 10,
    color: "#666",
  },

  balance: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },

  box: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    
  },

  title: {
    fontSize: 14,
    marginBottom: 8,
    color: "#444",
  },

  input: {
    backgroundColor: "#EEF0F7",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 60,
    fontSize: 16,
  },

  error: {
    color: "red",
    marginTop: 5,
    fontSize: 12,
  },

  payBtn: {
    marginTop: 12,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },

  updateBtn: {
    backgroundColor: "#3F4673",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 30,
  },

  updateText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});