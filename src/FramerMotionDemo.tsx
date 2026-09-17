import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { motion } from "framer-motion";

// framer-motion calcule normalement ses animations avec son propre chrono
// (initial/animate/transition). Remotion doit pouvoir figer n'importe quelle
// frame indépendamment des autres pour le rendu : on n'utilise donc jamais
// ces props, seulement `style`, qu'on recalcule à chaque frame avec
// useCurrentFrame + interpolate.
export const FramerMotionDemo: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 20], [0.8, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [20, 50], [40, 0], {
    easing: Easing.out(Easing.back(1.5)),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rotate = interpolate(frame, [30, 90], [0, 360], {
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill className="items-center justify-center bg-slate-950">
      <motion.div
        style={{ opacity, scale, y }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          style={{ rotate }}
          className="h-24 w-24 rounded-2xl bg-emerald-400"
        />
        <p className="text-2xl font-medium text-white">Frame-driven motion</p>
      </motion.div>
    </AbsoluteFill>
  );
};
