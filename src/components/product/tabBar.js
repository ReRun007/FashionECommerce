import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/colors';

const TabBar = ({ tabs, selectedTab, onTabPress }) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.selectedTab]}
            onPress={() => onTabPress(tab)}
          >
            <Text 
              style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 12,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8, // เพิ่ม margin ระหว่าง tab
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  selectedTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  selectedTabText: {
    color: COLORS.textInverse,
  },
});

export default TabBar;