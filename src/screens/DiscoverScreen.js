import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

const DiscoverScreen = () => {
  const [activeTab, setActiveTab] = useState('ARMAS');

  const tabs = ['ARMAS', 'ARMADURAS', 'BOSSES'];

  // Mock de itens (pode expandir depois)
  const items = {
    ARMAS: [
      {
        id: 1,
        name: 'RIVERS OF BLOOD',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQit5pgrsOcYINJN0oofjeEMbwxnmXAi8DlVA&s',
        description: 'Katana lendária'
      },
      {
        id: 2,
        name: 'BLASPHEMOUS BLADE',
        image: 'data:image/jpeg;base64,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',
        description: 'Espada de fé'
      }
    ],
    ARMADURAS: [],
    BOSSES: []
  };

  const currentItems = items[activeTab] || [];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>DISCOVER</Text>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar armas, bosses, builds..."
          placeholderTextColor="#666"
        />
      </View>

      {/* Abas (Tabs) */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.tabButtonActive
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.tabTextActive
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Resultados */}
      <Text style={styles.sectionTitle}>RESULTADOS</Text>

      <View style={styles.resultsContainer}>
        {currentItems.length > 0 ? (
          currentItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDesc}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyText}>Nenhum item encontrado nesta categoria ainda.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 15,
  },
  title: {
    fontSize: 28,
    color: colors.gold,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 15,
    color: colors.text,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  tabButton: {
    backgroundColor: colors.card,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: colors.gold,
  },
  tabText: {
    color: colors.textLight,
    fontWeight: 'bold',
  },
  tabTextActive: {
    color: '#000',
  },
  sectionTitle: {
    color: colors.gold,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  resultsContainer: {
    gap: 15,
  },
  itemCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  itemInfo: {
    flex: 1,
    padding: 15,
  },
  itemName: {
    color: colors.text,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDesc: {
    color: colors.textLight,
    fontSize: 14,
  },
  emptyText: {
    color: colors.textLight,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});

export default DiscoverScreen;