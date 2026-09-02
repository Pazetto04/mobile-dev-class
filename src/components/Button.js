import {Text, TouchableOpacity, StyleSheet} from 'react-native';

/**
 * 
 * @param {string} title - The title of the button.
 * @param {function} onPress
 * @param {boolean} disabled - If true, the button will be disabled.
 * @example
 * <Button title="Atualizar" onPress={submitForm} disabled={true}/> 
 * @returns A JSX Button
 */
export default function Button({title, onPress, disabled}) {
    return (
        <TouchableOpacity 
        style={[styles.btnSubmit, disabled && styles.btnDisabled]} 
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
        >
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   btnSubmit: {
    width: '90%',
    height: 56,
    backgroundColor: '#317c44',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  btnDisabled: {
    backgroundColor: '#555555', //Disabled button color
    opacity: 0.6,
  },
});