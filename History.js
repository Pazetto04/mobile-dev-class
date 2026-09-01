import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function History() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View>
                <Text style={styles.profile}> História </Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.label}> 26.08.2026</Text>
                <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={1}>
                    <View style={styles.content}>
                        <Text style={styles.muscleGroup}> Costas </Text>
                        <Text style={styles.exerciseName}> Remada Baixa </Text>
                    </View>
                    <Text style={styles.time}> 8:56 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={1}>
                    <View style={styles.content}>
                        <Text style={styles.muscleGroup}> Costas </Text>
                        <Text style={styles.exerciseName}> Remada Unilateral </Text>
                    </View>
                    <Text style={styles.time}> 8:46 </Text>
                </TouchableOpacity>
                <Text style={styles.label}> 25.08.2026</Text>
                <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={1}>
                    <View style={styles.content}>
                        <Text style={styles.muscleGroup}> Peito </Text>
                        <Text style={styles.exerciseName}> Supino </Text>
                    </View>
                    <Text style={styles.time}> 7:36 </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerdivLine}></View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>  </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202024',
    },
    profile: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 24,
        color: '#fff',
        paddingTop: 25,
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: '6%',
        fontSize: 16,
        color: '#fff',
        marginTop: 16,
        fontWeight: 'bold',
    },
    main: {
        flex: 1,
        backgroundColor: '#121214',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    card: {
        backgroundColor: '#202024',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginTop: 16,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    muscleGroup: {
        fontSize: 15,
        fontWeight: 600,
        color: '#fff',
        paddingBottom: 5,
    },
    exerciseName: {
        fontSize: 14,
        color: '#fff'
    },
    time: {
        fontSize: 14,
        color: '#6b6b6b'
    },
    footer: {
        backgroundColor: '#202024',
        paddingVertical: 37,
    },
    footerdivLine: {
        backgroundColor: '#14b953',
        height: 3,
    },
});