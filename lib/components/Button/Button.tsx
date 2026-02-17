import * as React from "react";
import clsx from "clsx";
import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.base, styles[variant], styles[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
