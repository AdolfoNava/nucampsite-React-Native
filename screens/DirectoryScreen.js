import { FlatList } from "react-native";
import { Tile  } from "react-native-elements"; // Avatar, ListItem
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
// import { useState } from "react";
// import { CAMPSITES } from "../shared/campsites";
const DirectoryScreen = ({ navigation }) => {
    // const [campsites, setCampsites] = useState(CAMPSITES);
    const campsites = useSelector((state) => state.campsites);
    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Tile 
            onPress={() => navigation.navigate("CampsiteInfo", { campsite })}
            title={campsite.name}
            caption={campsite.description}
            featured
            imageSrc={{ uri: baseUrl + campsite.image }}
            />
            // <ListItem onPress={() => navigation.navigate("CampsiteInfo", { campsite })}>
            //     <Avatar source={campsite.image} rounded />
            //     <ListItem.Content>
            //         <ListItem.Title>{campsite.name}</ListItem.Title>
            //         <ListItem.Subtitle>
            //             {campsite.description}
            //         </ListItem.Subtitle>
            //     </ListItem.Content>
            // </ListItem>
        );
    };
    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};
export default DirectoryScreen;