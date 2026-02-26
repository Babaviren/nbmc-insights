// components/Avatar.tsx
import React from "react";

interface AvatarProps {
  name: string;
  size?: number; // optional size control
}

/**
 * Generate initials from name
 */
const getInitials = (name: string): string => {
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (
    words[0][0].toUpperCase() +
    words[words.length - 1][0].toUpperCase()
  );
};

/**
 * Generate consistent color based on name
 */
const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = hash % 360;
  return `hsl(${hue}, 65%, 55%)`;
};

const Avatar: React.FC<AvatarProps> = ({ name, size = 40 }) => {
  const initials = getInitials(name);
  const bgColor = stringToColor(name);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
      }}
      className="flex items-center justify-center rounded-full text-white font-semibold select-none"
    >
      {initials}
    </div>
  );
};

export default Avatar;      