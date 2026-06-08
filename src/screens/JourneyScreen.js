import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

const JourneyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MY JOURNEY</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>MAPA EXPLORADO</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>100%</Text>
      </View>

      <Text style={styles.sectionTitle}>BUILDS SALVAS</Text>
      
      <View style={styles.buildCard}>
        <Text style={styles.buildTitle}>• Dexterity Bleed Build</Text>
        <Text style={styles.buildSubtitle}>Level 142 • Rivers of Blood</Text>
      </View>

      <View style={styles.buildCard}>
        <Text style={styles.buildTitle}>• Faith Tank Build</Text>
        <Text style={styles.buildSubtitle}>Level 138 • Blasphemous Blade</Text>
      </View>

      <Text style={styles.sectionTitle}>BOSSES DERROTADOS</Text>
      <View style={styles.bossesContainer}>
        <Text style={styles.bossChecked}>✅ Malenia</Text>
        <Text style={styles.bossChecked}>✅ Radahn</Text>
        <Text style={styles.bossChecked}>✅ Morgott</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 28, color: colors.gold, fontWeight: 'bold', marginBottom: 20 },
  progressContainer: { marginBottom: 30 },
  progressLabel: { color: colors.text, fontSize: 16, marginBottom: 8 },
  progressBar: { height: 12, backgroundColor: '#333', borderRadius: 6, overflow: 'hidden' },
  progressFill: { height: '100%', width: '100%', backgroundColor: colors.gold },
  progressText: { color: colors.gold, textAlign: 'right', marginTop: 5 },
  
  sectionTitle: { color: colors.gold, fontSize: 20, marginVertical: 15, fontWeight: 'bold' },
  
  buildCard: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  buildTitle: { color: colors.text, fontSize: 17, fontWeight: 'bold' },
  buildSubtitle: { color: colors.textLight, marginTop: 4 },

  bossesContainer: { backgroundColor: colors.card, padding: 18, borderRadius: 12 },
  bossChecked: { color: '#4ade80', fontSize: 17, marginVertical: 6 },
});

export default JourneyScreen;