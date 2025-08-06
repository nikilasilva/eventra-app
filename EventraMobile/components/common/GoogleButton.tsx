import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

interface GoogleButtonProps {
    onPress: () => void;
    title: string;
    containerClassName?: string;
    textClassName?: string;
}

const GoogleButton = ({
                          onPress,
                          title,
                          containerClassName,
                          textClassName
                      }: GoogleButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`
        bg-white
        py-4
        px-6
        rounded-lg
        items-center
        justify-center
        w-full
        ${containerClassName}
      `}
        >
            <View className="flex-row items-center justify-center">
                <Image
                    source={require('@/assets/images/google-icon.png')}
                    className="w-8 h-8 mr-3"
                />
                <Text
                    className={`
            text-black
            font-pjsbold
            text-lg
            ${textClassName}
          `}
                >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoogleButton;
