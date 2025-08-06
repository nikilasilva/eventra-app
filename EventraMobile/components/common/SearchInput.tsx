import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onSearch?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({value, onChangeText, onSearch}) => {
    return (
        <View className="bg-darkGray flex-row items-center rounded-2xl px-4 my-3 mb-6">
            <TextInput
                className="flex-1 h-15 text-white font-pjsregular text-base py-4"
                placeholder="Search Events, Categories, Location..."
                placeholderTextColor="#888281"
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity onPress={onSearch}>
                <Icon name="search-outline" size={24} color="#CDCDE0"/>
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;
