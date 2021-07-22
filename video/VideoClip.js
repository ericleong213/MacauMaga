import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Video } from "expo-av";

export default function VideoClip(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container1}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: props.videoUrl,
        }}
        useNativeControls={true}
        resizeMode="contain"
        isLooping={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        {/* <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    marginTop: 30,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
