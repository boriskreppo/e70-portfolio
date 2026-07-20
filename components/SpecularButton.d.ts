import React from 'react';

export interface SpecularButtonProps {
  children?: string;
  size?: string;
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: string;
}

declare const SpecularButton: React.FC<SpecularButtonProps>;
export default SpecularButton;
