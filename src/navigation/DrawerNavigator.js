import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';
import BuildPlannerScreen from '../screens/BuildPlannerScreen';
import { colors } from '../theme/colors';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { navigation } = props;

  const bosses = [
    { name: 'MALENIA', key: 'Malenia' },
    { name: 'RADAHN', key: 'Radahn' },
    { name: 'MARGITT', key: 'Margitt' },
  ];

  const handleBossPress = (boss) => {
    navigation.navigate('BossDetail', { bossName: boss.key });
    navigation.closeDrawer();
  };

  return (
    <ScrollView style={styles.drawerContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>TARNISHED GUIDE</Text>
      </View>

      <Image 
        source={{ uri: 'https://via.placeholder.com/400x180/1a1a1a/8b5a2b?text=ELDEN+RING' }} 
        style={styles.bigImage} 
      />

      {/* Bosses da Semana */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BOSS DA SEMANA</Text>
        <View style={styles.bossContainer}>
          {bosses.map((boss, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.bossCard}
              onPress={() => handleBossPress(boss)}
            >
              <Text style={styles.bossName}>{boss.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Link para Build Planner */}
      <TouchableOpacity 
        style={styles.buildPlannerButton}
        onPress={() => {
          navigation.navigate('Build Planner');
          navigation.closeDrawer();
        }}
      >
        <Text style={styles.buildPlannerText}>⚔️ BUILD PLANNER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#0f0f0f' },
        headerTintColor: '#f5c400',
        headerTitle: 'Tarnished Guide',
        headerLeft: () => (
          <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="menu" size={30} color="#f5c400" />
          </TouchableOpacity>
        ),
        drawerStyle: { backgroundColor: '#0a0a0a', width: 320 },
      })}
    >
      <Drawer.Screen name="Tarnished Guide" component={TabNavigator} />
      <Drawer.Screen 
        name="Build Planner" 
        component={BuildPlannerScreen}
        options={{ headerTitle: 'Build Planner' }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: { flex: 1, backgroundColor: '#0a0a0a' },
  header: { 
    padding: 25, 
    backgroundColor: '#1a1a1a', 
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#f5c400'
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#f5c400' },
  bigImage: { width: '100%', height: 190, resizeMode: 'cover' },
  section: { padding: 20 },
  sectionTitle: { color: '#f5c400', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  bossContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  bossCard: { 
    backgroundColor: '#1a1a1a', 
    padding: 14, 
    borderRadius: 8, 
    width: '31%', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f5c400'
  },
  bossName: { color: '#fff', fontSize: 13, fontWeight: 'bold' },

  // Botão Build Planner destacado
  buildPlannerButton: {
    margin: 20,
    backgroundColor: '#f5c400',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buildPlannerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DrawerNavigator;