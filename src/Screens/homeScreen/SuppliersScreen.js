import { StyleSheet, ScrollView, Text, View, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'
import AntDesign from '@react-native-vector-icons/ant-design';
import Ionicons from '@react-native-vector-icons/ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const data = [
    {
        id: 1,
        name: 'Freash Farms',
        email: 'Contact@freshfarms.com'
    },

    {
        id: 2,
        name: 'Freash Farms',
        email: 'Contact@freshfarms.com'
    },

    {
        id: 3,
        name: 'Freash Farms',
        email: 'Contact@freshfarms.com'
    },

     {
        id: 4,
        name: 'Freash Farms',
        email: 'Contact@freshfarms.com'
    },

    {
        id: 5,
        name: 'Freash Farms',
        email: 'Contact@freshfarms.com'
    },

    {
        id: 6,
        name: 'Freash Farms',
        email: 'Contact@freshfarms.com'
    },

]

const SuppliersScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            
                <View style={styles.header}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack('Suppliers')}>
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

                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity style={styles.searchIcon}>
                            <Ionicons
                                name="search"
                                size={24}
                                color="gray"
                            />
                        </TouchableOpacity>

                        <Text style={styles.serachText}
                        >Search Supplier</Text>
                    </View>
                </View>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.mainContainer}>
                            <TouchableOpacity style={styles.card}>
                                <Text style={styles.itemTextNum}>{item.id}</Text>

                                <View style={styles.textItem}>
                                    <Text style={styles.itemTextName}>{item.name}</Text>
                                    <Text style={styles.itemTextEmail}>{item.email}</Text>
                                </View>

                                <Ionicons
                                    name="chevron-forward"
                                    size={18}
                                    color="#C7CCD6"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            
        </SafeAreaView>
    )
}

export default SuppliersScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F8F9FF"
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

    searchBar: {
        height: 50,
        backgroundColor: '#F1F3FB',
        marginHorizontal: 15,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 14,
    },

    searchIcon: {
        paddingtop: 20,
        paddingLeft: 15,
        marginTop: 14,
    },

    serachText: {
        paddingLeft: 10,
        paddingVertical: 10,
        color: 'gray',
        paddingTop: 15,
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: '#F1F3FB',
        borderRadius: 8,
    },

    itemTextNum: {
        width: 25,
        fontSize: 15,
        color: '#777',
    },

    textItem: {
        flex: 1,
        marginLeft: 15,
    },

    itemTextName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
    },

    itemTextEmail: {
        fontSize: 13,
        color: '#777',
        marginTop: 4,
    },

    mainContainer: {
        marginHorizontal: 15,
        marginTop: 12,
    },

})