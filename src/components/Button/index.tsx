import React from "react";
import "./button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * What theme color to render
   */
  theme: "primary" | "secondary" | "tertiary";
  /**
   * What variant to render
   */
  variant: "filled" | "outline";
  /**
   * How large should the button be?
   */
  size?: "40" | "52" | "56";
  /**
   * Should the button fill it's parent container?
   */
  block?: boolean;
  /**
   * Renders child nodes passed into Button component
   */
  children?: string | React.ReactNode;
  /**
   * Shows a loading state on Button component
   */
  isLoading?: boolean;
}

const btn = {
  sizes: {
    "40": "softButton40",
    "52": "softButton52",
    "56": "softButton56",
  },
};

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  theme,
  variant,
  size = "40",
  block,
  ...props
}: ButtonProps) => {
  const width = block ? "softButtonBlock" : "";

  return (
    <button
      type='button'
      className={[
        "softButton",
        btn.sizes[size],
        `softButton-${theme}-${variant}`,
        width,
      ]
        .join(" ")
        .trim()}
      {...props}
    >
      {props.isLoading ? <Loader className={spinner} /> : props.children}
    </button>
  );
};
