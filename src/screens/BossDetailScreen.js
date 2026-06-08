import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

const BossDetailScreen = ({ route, navigation }) => {
  const { bossName = "MALENIA" } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← VOLTAR</Text>
      </TouchableOpacity>

      <Image 
        source={{ uri: 'https://via.placeholder.com/400x220/1a1a1a/990000?text=Malenia' }} 
        style={styles.bossImage} 
      />

      <Text style={styles.bossName}>{bossName}</Text>

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabTextActive}>LORE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>ESTRATÉGIA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>DROPS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>DICAS DE COMBATE</Text>
        <Text style={styles.text}>• Use Fire ou Bleed</Text>
        <Text style={styles.text}>• Waterfowl Dance é mortal</Text>
        <Text style={styles.text}>• Recomendado: Mimic Tear +10</Text>
      </View>

      <TouchableOpacity style={styles.buildButton}>
        <Text style={styles.buildButtonText}>+ BUILD PLANNER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  backButton: { padding: 20 },
  backText: { color: colors.gold, fontSize: 16 },
  bossImage: { width: '100%', height: 240 },
  bossName: { fontSize: 32, color: colors.gold, textAlign: 'center', marginVertical: 15, fontWeight: 'bold' },
  tabs: { flexDirection: 'row', backgroundColor: '#111', padding: 10 },
  tab: { flex: 1, padding: 12, alignItems: 'center' },
  activeTab: { borderBottomWidth: 3, borderBottomColor: colors.gold },
  tabText: { color: colors.textLight },
  tabTextActive: { color: colors.gold, fontWeight: 'bold' },
  content: { padding: 20 },
  sectionTitle: { color: colors.gold, fontSize: 20, marginBottom: 15 },
  text: { color: colors.text, fontSize: 16, marginVertical: 6 },
  buildButton: {
    margin: 20,
    backgroundColor: colors.gold,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buildButtonText: { color: '#000', fontSize: 18, fontWeight: 'bold' },
});

export default BossDetailScreen;