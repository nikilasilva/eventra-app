import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Toast from 'react-native-toast-message';
import {useRouter} from 'expo-router';

import Screen from '../../components/common/Screen';
import RoleSelector from '../../components/common/RoleSelector';
import FormField from '../../components/common/FormField';
import Button from "@/components/common/Button";
import GoogleButton from "@/components/common/GoogleButton";
import api from "@/lib/api";

const SignUpScreen = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole] = useState<'attendee' | 'organizer'>('attendee');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
        if (password !== passwordConfirm) {

            Toast.show({
                type: 'error',
                text1: 'Passwords do not match',
            });

            return
        }

        setIsLoading(true);

        try {
            const response = await api.post('/register', {
                fullName,
                email,
                password,
                userType: role,
            });

            Toast.show({
                type: 'success',
                text1: 'Welcome!',
                text2: 'You have successfully signed up.'
            });

            console.log(`Sign up success: ${response}`)
            router.push('/home');
        } catch (error: any) {
            console.log(error.response?.data || error.message);
            Toast.show({
                type: 'error',
                text1: 'Sign-Up Failed',
                text2: error.response?.data?.message || "Invalid credentials."
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleRedirectSignIn = () => {
        // Navigate to sign-in screen
        router.push('/sign-in');
        console.log(`signin button pressed`);
    };

    const handleGoogleSignUp = () => {
        console.log("Google sign up requested");
    };

    const handleRoleSelect = (selectedRole: 'Attendee' | 'Organizer') => {
        setRole(selectedRole.toLowerCase() as 'attendee' | 'organizer');
    }

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
                <RoleSelector selectedRole={role.charAt(0).toUpperCase() + role.slice(1) as 'Attendee' | 'Organizer'}
                              onSelectRole={handleRoleSelect}/>

                <Button
                    onPress={handleSignUp}
                    title="Sign Up"
                    isLoading={isLoading}
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