import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';

// Define the props for the Button component
interface ButtonProps {
    onPress: () => void;
    title: string;
    isLoading?: boolean;
    disabled?: boolean;
    containerClassName?: string; // To pass Tailwind classes for the container
    textClassName?: string; // To pass Tailwind classes for the text
}

const Button: React.FC<ButtonProps> = ({
                                           onPress,
                                           title,
                                           isLoading,
                                           containerClassName,
                                           textClassName,
                                           disabled,
                                       }) => {
    return (
        <TouchableOpacity
            onPress={onPress}

            className={`/
                bg-primary
                py-4
                px-6
                rounded-lg
                items-center
                justify-center
                w-full
                ${isLoading ? 'opacity-70' : ''}
                ${containerClassName}`
            }
            disabled={isLoading || disabled}
        >
            {isLoading ? (
                <ActivityIndicator color="#FFFFFF"/>
            ) : (
                <Text
                    className={`
                    text-white
                    font-pjsbold
                    text-lg
                    ${textClassName}`}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;