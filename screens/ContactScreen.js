import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from 'react-native-animatable'

const ContactScreen = () => {
    return (
        <ScrollView
            animation='fadeInDown'
            duration={2000}
            delay={1000}
        >
            <Animatable.View>
                <Card wrapperStyle={{ margin: 20 }}>
                    <Card.Title>Contact Information</Card.Title>
                    <Card.Divider />
                    <Text style={{ marginBottom: 10 }}>
                        1 Nucamp Way{'\n'}
                        Seattle, WA 98001{'\n'}
                        U.S.A.
                    </Text>
                    <Text>
                        Phone: 1-206-555-1234{'\n'}
                        Email: campsites@nucamp.co
                    </Text>
                </Card>
            </Animatable.View >
        </ScrollView>

    )
}
export default ContactScreen;