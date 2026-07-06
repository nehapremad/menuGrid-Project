import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import MaterialCommunityIcons from "@react-native-vector-icons/material-design-icons";
import Ionicons from "@react-native-vector-icons/ionicons";
import AntDesign from "@react-native-vector-icons/ant-design";
import { useNavigation } from "@react-navigation/native";

const DrawerItemData = [
    { label: "Dashboard", icon: "view-dashboard-outline", },
    { label: "Inventory", icon: "archive-outline", },
    { label: "Staff", icon: "account-group-outline" },
    { label: "POS", icon: "desktop-classic", },
    { label: "Orders", icon: "clipboard-list-outline", },
    { label: "Kitchen Kot", icon: "chef-hat", },
    { label: "Customers", icon: "account-multiple-outline", },
    { label: "Settings", icon: "cog-outline", },
];

const childItem = [
    {label: "InventroyItems"},
    {label: "InventroyItemsCategoties" },
    {label: "Inventroy stocks"},
    {label: "InventroyMovements"},
    {label: "PurchaseOrders"},
    {label: "Recipes"},
    {label: "Suppliers"}
];

const CustomDrawer = () => {
    const navigation = useNavigation();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <DrawerContentScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >

            <View style={styles.header}>
                <Image
                    source={require("../../assets/Image/women.jpg")}
                    style={styles.image}
                />

                <View style={{ marginLeft: 12 }}>
                    <Text style={styles.name}>Restaurant</Text>
                    <Text style={styles.name}>Manager</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.branchBox}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                        name="location-outline"
                        color="#3446eb"
                        size={20}
                    />

                    <Text style={styles.branchText}>Main Branch</Text>
                </View>

                <Ionicons
                    name="chevron-down"
                    size={18}
                    color="#555"
                />
            </TouchableOpacity>


            {DrawerItemData.map((item, index) => (
                <View key={index}>
                    <Pressable
                        style={[
                            styles.menuItem,
                            selectedIndex === index && styles.activeMenu,
                        ]}
                        onPress={() => {
                            setSelectedIndex(index);

                            // navigation.navigate(item.path);

                            if (item.label === "Inventory") {
                                if (expandedIndex === index) {
                                    setExpandedIndex(null);
                                } else {
                                    setExpandedIndex(index);
                                }
                            }
                        }}
                    >
                        <View style={styles.left}>
                            <MaterialCommunityIcons
                                name={item.icon}
                                size={22}
                                color={selectedIndex === index ? "#fff" : "#555"}
                            />

                            <Text
                                style={[
                                    styles.menuText,
                                    {
                                        color:
                                            selectedIndex === index ? "#fff" : "#555",
                                    },
                                ]}
                            >
                                {item.label}
                            </Text>
                        </View>


                            {item.label === "Inventory" ? (
                                <Ionicons
                                    name={
                                        expandedIndex === index
                                            ? "chevron-down"
                                            : "chevron-forward"
                                    }
                                    size={20}
                                    color={selectedIndex === index ? "#fff" : "#555"}
                                />
                            ) : (
                                <Ionicons
                                    name="chevron-forward"
                                    size={18}
                                    color={selectedIndex === index ? "#fff" : "#777"}
                                />
                            )}
                    </Pressable>


                    {item.label === "Inventory" &&
                        expandedIndex === index && (

                            <View style={styles.childContainer}>
                                {childItem.map((child) => (
                                    <TouchableOpacity
                                        key={child.value}
                                        style={styles.childItem}
                                        onPress={() => {
                                            console.log(child.label);
                                        }}
                                    >
                                        <Text style={styles.childText}>
                                            {child.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                </View>

    ))
}

{/* Logout */ }

<TouchableOpacity style={styles.logout}>
    <AntDesign
        name="logout"
        size={22}
        color="#881d1b"
    />

    <Text style={styles.logoutText}>Logout</Text>
</TouchableOpacity>
    </DrawerContentScrollView >
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 12,
        paddingTop: 50,
        backgroundColor: "#fff",
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
        paddingLeft: 30,
    },

    image: {
        width: 55,
        height: 55,
        borderRadius: 14,
    },

    name: {
        fontSize: 24,
        color: "#222",
        fontWeight: "600",
    },

    branchBox: {
        height: 45,
        borderRadius: 30,
        backgroundColor: "#F4F5FB",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginBottom: 18,
    },

    branchText: {
        marginLeft: 10,
        color: "#444",
        fontSize: 15,
        fontWeight: "500",
    },

    menuItem: {
        height: 52,
        borderRadius: 14,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },

    activeMenu: {
        backgroundColor: "#353A6D",
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
    },

    menuText: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: "600",
    },

    childContainer: {
        marginLeft: 55,
        marginBottom: 10,
    },

    childItem: {
        paddingVertical: 8,
    },

    childText: {
        fontSize: 15,
        color: "#555",
    },

    logout: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal: 15,
    },

    logoutText: {
        marginLeft: 12,
        color: "#691614",
        fontWeight: "600",
        fontSize: 16,
    },
});