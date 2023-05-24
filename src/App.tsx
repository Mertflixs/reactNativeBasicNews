import React from "react";
import { SafeAreaView, Text, View, FlatList, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import news_data from "./news_data.json";
import news_banner from "./news_banner_data.json";
import Card from "./components/Card";

export default function App() {
	const renderNews = ({ item }: any) => <Card news={item} />

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.news_header}>NEWS</Text>
			<View>
				<FlatList
					ListHeaderComponent={() => (
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							{
								news_banner.map(bannerNews => (
									<Image style={styles.banner_image} source={{ uri: bannerNews.imageUrl }} />
								))
							}
						</ScrollView>
					)}
					keyExtractor={item => item.u_id.toString()}
					data={news_data}
					renderItem={renderNews}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eceff1",
	},
	banner_image: {
		height: Dimensions.get("window").height / 6,
		width: Dimensions.get("window").width / 2,

	},
	news_header: {
		fontWeight: "bold",
		fontStyle: "italic",
		fontSize: 50,
		textAlign: "center",
	}
})
