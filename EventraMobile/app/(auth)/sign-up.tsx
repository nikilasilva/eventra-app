import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useRouter} from 'expo-router';

import Screen from '../../components/common/Screen';
import RoleSelector from '../../components/common/RoleSelector';
import FormField from '../../components/common/FormField';
import Button from "@/components/common/Button";
import GoogleButton from "@/components/common/GoogleButton";

const SignUpScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole] = useState<'Attendee' | 'Organizer'>('Attendee');

    const handleSignUp = () => {
        console.log({fullName, email, password, passwordConfirm, role});
    };

    const handleRedirectSignIn = () => {
        // Navigate to sign-in screen
        const router = useRouter();
        router.push('/sign-in');
        console.log(`signin button pressed`);
    };

    const handleGoogleSignUp = () => {
        console.log("Google sign up requested");
    };

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false} className="p-4">
                <View className="items-center mb-2 mt-safe-offset-0.5">
                    <Text className="text-primary font-lalezarregular text-6xl">Eventra</Text>
                    <Text className="text-primaryText font-pjsbold text-4xl mt-0.5">Creat Account</Text>
                </View>

                <Text className="text-primaryText font-pjssemibold text-2xl mb-4">Sign Up</Text>

                {/*Full Name*/}
                <FormField
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChangeText={setFullName}
                />

                {/*Email*/}
                <FormField
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                {/*Password*/}
                <FormField
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {/*Confirm Password*/}
                <FormField
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    secureTextEntry
                />

                {/*Role Selector*/}
                <RoleSelector selectedRole={role} onSelectRole={setRole}/>

                <Button
                    onPress={handleSignUp}
                    title="Sign Up"
                />

                <View className="flex-row justify-center items-center mt-4">
                    <Text className="text-primaryText font-pjssemibold">Already have an account? </Text>
                    <TouchableOpacity onPress={handleRedirectSignIn}>
                        <Text className="text-primary font-pjsbold">Sign In</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-primaryText font-pjssemibold my-3 text-center">OR</Text>

                <GoogleButton onPress={handleGoogleSignUp} title="Sign Up with Google"/>

            </ScrollView>
        </Screen>
);
};

export default SignUpScreen;