import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient} from 'expo-linear-gradient';

interface GradientTextProps {
    text: string;
    className?: string; // To pass Tailwind classes
}

const GradientText: React.FC<GradientTextProps> = ({text, className}) => {
    return (
        <MaskedView
            maskElement={
                <Text className={className} style={{backgroundColor: 'transparent'}}>
                    {text}
                </Text>
            }
        >
            <LinearGradient
                colors={['#9D7FEA', '#7041D3']} // Using the gradient colors from our theme
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
            >
                {/* The text here is invisible but provides the size for the gradient */}
                <Text className={className} style={{opacity: 0}}>
                    {text}
                </Text>
            </LinearGradient>
        </MaskedView>
    );
};

export default GradientText;