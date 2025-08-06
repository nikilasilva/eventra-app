import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {useRouter} from 'expo-router';

import Screen from '@/components/common/Screen';
import RoleSelector from "@/components/common/RoleSelector";
import FormField from "@/components/common/FormField";
import Button from "@/components/common/Button";
import GoogleButton from "@/components/common/GoogleButton";

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'Attendee' | 'Organizer'>('Attendee');

    const handleSignIn = () => {
        console.log({email, password, role});
    };

    const handleRedirectSignUp = () => {
        const router = useRouter();
        router.push('/sign-up');
        console.log(`reroute sign-up`);
    };

    const handleGoogleSignIn = () => {
        console.log("Google sign in requested");
    };

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
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

                    {/*Role Selector*/}
                    <RoleSelector selectedRole={role} onSelectRole={setRole}/>

                    <Button
                        onPress={handleSignIn}
                        title="Sign In"
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
