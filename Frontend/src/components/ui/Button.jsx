import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Button({ children, onClick, type = "button", variant = "primary", className = "", disabled = false }) {
    const baseStyle = "px-6 py-2 rounded-xl font-bold transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed tracking-tight flex items-center justify-center";

    const variants = {
        primary: "bg-petal-rose text-white hover:opacity-90 shadow-xl shadow-petal-rose/20",
        secondary: "bg-petal-leaf text-white hover:opacity-90 shadow-md",
        outline: "bg-transparent border-2 border-petal-rose text-petal-rose hover:bg-petal-rose hover:text-white",
        ghost: "bg-transparent text-gray-500 hover:text-petal-moss dark:hover:text-white hover:bg-gray-100 dark:hover:bg-petal-muted/30",
        danger: "bg-red-500 text-white hover:bg-red-600 shadow-md",
        none: "" // For complete custom styling
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(baseStyle, variants[variant], className)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    );
}

