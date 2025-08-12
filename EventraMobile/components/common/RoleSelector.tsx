import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type Role = 'Attendee' | 'Organizer';

interface RoleSelectorProps {
    selectedRole: Role;
    onSelectRole: (role: Role) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({selectedRole, onSelectRole}) => {
    return (
        <View className="mb-6">
            <Text className="text-primaryText font-pjsmedium text-2xl mb-2">I am an</Text>
            <View className="flex-row rounded-lg p-1 gap-x-2">

                {/*Attendee*/}
                <TouchableOpacity
                    className={`flex-1 py-3 rounded-md items-center justify-center ${selectedRole === 'Attendee' ? 'bg-primary' : 'bg-gray-700'}`}
                    onPress={() => onSelectRole('Attendee')}
                >
                    <Text
                        className={`font-pjssemibold text-base ${selectedRole === 'Attendee' ? 'text-white' : 'text-gray-300'}`}>
                        Attendee
                    </Text>
                </TouchableOpacity>

                {/*Organizer*/}
                <TouchableOpacity
                    className={`flex-1 py-3 rounded-md items-center justify-center ${selectedRole === 'Organizer' ? 'bg-primary' : 'bg-gray-700'}`}
                    onPress={() => onSelectRole('Organizer')}
                >
                    <Text
                        className={`font-pjssemibold text-base ${selectedRole === 'Organizer' ? 'text-white' : 'text-gray-300'}`}>
                        Organizer
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default RoleSelector;