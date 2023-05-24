import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import { api } from "../src/lib/api";
import * as SecureStore from "expo-secure-store";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

import NLWLogo from "../src/assets/nlw-spacetime-logo.svg";

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/43a1aa4d5b1d05a899e7",
};

export default function App() {
  const router = useRouter();

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: "43a1aa4d5b1d05a899e7",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "nlwspacetime",
      }),
    },
    discovery
  );

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post("/register", {
      code,
    });

    const { token } = response.data;

    await SecureStore.setItemAsync("token", token);

    router.push("/memories");
  }

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;

      handleGithubOAuthCode(code);
    }
  }, [response]);

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <View className="items-center flex-1 px-8 py-10">
      <View className="items-center justify-center flex-1 gap-6">
        <NLWLogo />
        <View className="space-y-2">
          <Text className="text-2xl leading-tight text-center font-title text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-base font-bold leading-relaxed text-center text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="px-5 py-2 bg-green-500 rounded-full"
          onPress={() => signInWithGithub()}
        >
          <Text className="text-sm text-black uppercase font-alt">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-sm leading-relaxed text-center text-gray-200 font-body">
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style="light" translucent />
    </View>
  );
}
