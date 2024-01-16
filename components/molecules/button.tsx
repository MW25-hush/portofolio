import { cva, cx, VariantProps } from "class-variance-authority";
import { IconType } from "react-icons";

const buttonCVA = cva(["rounded", "font-bold", "capitalize"], {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "text-white",
        "rounded-[0.5rem]",
        "hover:bg-secondary",
        "hover:text-primary",
      ],
      secondary: [
        "border",
        "border-primary",
        "hover:bg-secondary",
        "hover:text-primary",
        "hover:border-0",
      ],
      tertiary: ["hover:underline"],
    },
    size: {
      small: "text-sm px-2 py-[6px]",
      medium: "text-base px-[10px] py-2",
      large: "text-[18px] px-4 py-[12px] ",
    },

    width: {
      full: "w-full",
      half: "w-20",
      sm: "w-16",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

interface ButtonProps extends VariantProps<typeof buttonCVA> {
  /**
   * Button contents
   */
  label?: string;

  /**
   * button type
   */

  type?: "submit" | "reset" | "button";

  /**
   * to manage button
   * */
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** Loading state  */
  loading?: boolean;

  Icon?: IconType;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  loading,
  type,
  intent,
  size,
  label,
  width,
  handleClick,
  Icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cx(buttonCVA({ intent, size, width }), {
        "bg-gray-400": loading,
      })}
      {...props}
      onClick={handleClick}
      disabled={loading}
    >
      <span className="flex gap-2 justify-center items-center">
        {label}
        {Icon && <Icon size={intent === "tertiary" ? 32 : 16}/>}
      </span>
    </button>
  );
};
