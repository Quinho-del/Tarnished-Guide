import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BuildPlannerScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header com botão voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color={colors.gold} />
        </TouchableOpacity>
        <Text style={styles.title}>BUILD PLANNER</Text>
      </View>

      {/* Área do Personagem */}
      <View style={styles.characterContainer}>
        <View style={styles.characterBox}>
          {/* Imagem grande do personagem */}
          <Image 
            source={{ uri: 'data:image/jpeg;base64,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' }} 
            style={styles.characterImage} 
          />
        </View>

        {/* Stats */}
        <View style={styles.statsBox}>
          <Text style={styles.stat}>LVL <Text style={styles.statValue}>150</Text></Text>
          <Text style={styles.stat}>VIGOR <Text style={styles.statValue}>60</Text></Text>
          <Text style={styles.stat}>FORÇA <Text style={styles.statValue}>80</Text></Text>
        </View>
      </View>

      {/* Equipamento */}
      <View style={styles.equipmentSection}>
        <Text style={styles.sectionTitle}>EQUIPAMENTO</Text>
        <Text style={styles.subTitle}>ELDEN RING</Text>

        <View style={styles.equipmentGrid}>
          {Array.from({ length: 8 }).map((_, i) => (
            <View key={i} style={styles.equipSlot}>
              <Text style={styles.shield}>🛡️</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Botão Salvar */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SALVAR BUILD</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1a1a1a',
  },
  backButton: { padding: 8 },
  title: {
    fontSize: 24,
    color: colors.gold,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  characterContainer: {
    alignItems: 'center',
    padding: 15,
    position: 'relative',
  },
  characterBox: {
    borderWidth: 3,
    borderColor: colors.gold,
    borderRadius: 12,
    overflow: 'hidden',
  },
  characterImage: {
    width: 340,
    height: 420,
  },
  statsBox: {
    position: 'absolute',
    right: 30,
    top: 50,
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.gold,
  },
  stat: { color: colors.text, fontSize: 16, marginVertical: 4 },
  statValue: { color: colors.gold, fontWeight: 'bold', fontSize: 20 },

  equipmentSection: { padding: 20 },
  sectionTitle: { color: colors.gold, fontSize: 20, fontWeight: 'bold' },
  subTitle: { color: colors.textLight, marginBottom: 15 },

  equipmentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  equipSlot: {
    width: 68,
    height: 68,
    backgroundColor: colors.card,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.gold,
  },
  shield: { fontSize: 34 },

  saveButton: {
    backgroundColor: colors.gold,
    margin: 20,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BuildPlannerScreen;