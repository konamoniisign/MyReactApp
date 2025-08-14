 
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
};

const FilterChip = ({ label, active, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chip, active && styles.activeChip]}
    >
      <Text style={[styles.text, active && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default FilterChip;

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },
  activeChip: {
    backgroundColor: '#3b2e2e',
  },
  text: {
    color: '#333',
    fontSize: 14,
  },
  activeText: {
    color: '#fff',
  },
});
