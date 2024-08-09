// src/components/ui/shooting-stars-and-stars-background-demo.jsx
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-full w-full absolute inset-0">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
