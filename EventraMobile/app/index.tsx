import {Text, View} from "react-native";
import {useRouter} from "expo-router";

// Import our reusable components
import Screen from "../components/common/Screen";
import Button from "../components/common/Button";
import GradientText from "../components/common/GradientText";

export default function GetStartedScreen() {

    // Function to handle button press
    const handleGetStarted = () => {
        const router = useRouter();
        // Navigate to the next screen or perform any action
        router.push('/sign-up');
        console.log("Get Started button pressed");
    };

    return (
        <Screen>
            {/* Main container for the whole screen */}
            <View className="flex-1 p-4">

                {/* Top Section: Logo */}
                <View>
                    <Text className="text-primary font-lalezarregular text-8xl text-center pt-24">
                        Eventra
                    </Text>
                </View>

                {/* Middle Section: Takes up remaining space to center its content */}
                <View className="flex-1 justify-center items-center">
                    <View className="items-center">
                        <Text className="text-white font-pjssemibold text-4xl text-center leading-tight">
                            Create your account
                        </Text>
                        {/* This View wrapper fixes the alignment */}
                        <View className="flex-row items-center">
                            <Text className="text-white font-pjssemibold text-4xl leading-tight">and </Text>
                            <GradientText text="explore events" className="font-pjssemibold text-4xl"/>
                        </View>
                        {/* This View wrapper also fixes the alignment */}
                        <View className="flex-row items-center">
                            <Text className="text-white font-pjssemibold text-4xl leading-tight">that  your </Text>
                            <GradientText text="vibe." className="font-pjssemibold text-4xl"/>
                        </View>
                    </View>
                </View>

                {/* Bottom Section: Button */}
                <View className="mb-5">
                    <Button
                        onPress={handleGetStarted}
                        title="Get Started"
                    />
                </View>
            </View>
        </Screen>
    );
};
