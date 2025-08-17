import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useRouter} from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';

import Screen from '@/components/common/Screen';
import FormField from "@/components/common/FormField";
import Button from "@/components/common/Button";
import GoogleButton from "@/components/common/GoogleButton";
import api from "@/lib/api";

const SignInScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async () => {

        setIsLoading(true);

        try {
            const response = await api.post('/login', {email, password});
            const {token, user} = response.data;

            console.log("Logged in successs:", response.data);

            // Store the token securely
            await AsyncStorage.setItem('userToken', token);

            Toast.show({
                type: 'success',
                text1: `Welcome back! ${user.firstName}`,
            });

            // Navigate based on user type
            if (user.userType === 'organizer') {
                router.replace('/(organizer)/dashboard');
            } else {
                router.replace('/(tabs)/home');
            }
        } catch (error: any) {
            console.error(error.response?.data || error.message);

            Toast.show({
                type: 'error',
                text1: 'Sign-In Failed',
                text2: error.response?.data?.message || "Invalid credentials."
            });

        } finally {
            setIsLoading(false);
        }
    };

    const handleRedirectSignUp = () => {
        router.push('/sign-up');
        console.log(`reroute sign-up`);
    };

    const handleGoogleSignIn = () => {
        console.log("Google sign in requested");
    };

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false} className="p-4">
                <View className="items-center mb-2 mt-safe-offset-0.5">
                    <Text className="text-primary font-lalezarregular text-6xl">Eventra</Text>
                    <Text className="text-primaryText font-pjsbold text-4xl mt-0.5">Welcome Back!</Text>
                </View>

                <Text className="text-primaryText font-pjssemibold text-2xl mb-4">Sign In</Text>

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

                <Button
                    onPress={handleSignIn}
                    title="Sign In"
                    isLoading={isLoading}
                />

                <View className="flex-row justify-center items-center mt-4">
                    <Text className="text-primaryText font-pjssemibold">Don't have an account? </Text>
                    <TouchableOpacity onPress={handleRedirectSignUp}>
                        <Text className="text-primary font-pjsbold">Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-primaryText font-pjssemibold my-6 text-center">OR</Text>

                <GoogleButton onPress={handleGoogleSignIn} title="Sign In with Google"/>


            </ScrollView>
        </Screen>
    );
};

export default SignInScreen;
