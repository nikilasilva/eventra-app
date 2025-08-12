import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardTypeOptions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface FormFieldProps {
    label: string,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    secureTextEntry?: boolean,
    keyboardType?: KeyboardTypeOptions,
    error?: string,
}

const FormField: React.FC<FormFieldProps> = ({
                                                 label,
                                                 placeholder,
                                                 value,
                                                 onChangeText,
                                                 secureTextEntry = false,
                                                 keyboardType = 'default' as KeyboardTypeOptions,
                                                 error = 'please enter a valid value',
                                             }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

    return (
        <View className="mb-4">
            <Text className="text-secondaryText font-pjsmedium text-base mb-2">{label}</Text>
            <View className="bg-darkGray flex-row items-center rounded-lg px-4 border">
                <TextInput
                    className="flex-1 h-14 text-gray-100 font-pjsregular text-base"
                    placeholder={placeholder}
                    placeholderTextColor="#A0A0A0"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={!isPasswordVisible}
                    keyboardType={keyboardType}/>
                {secureTextEntry && (
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icon name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={24} color="#A0A0A0"/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;