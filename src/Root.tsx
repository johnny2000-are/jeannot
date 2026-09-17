import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { FramerMotionDemo } from "./FramerMotionDemo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <Composition
        id="FramerMotionDemo"
        component={FramerMotionDemo}
        durationInFrames={90}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
