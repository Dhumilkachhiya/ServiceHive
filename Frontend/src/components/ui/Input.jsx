export default function Input({ label, type = "text", name, value, onChange, placeholder, required = false, min, max, className = "", inputClassName = "" }) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label && <label className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider ml-1">{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                min={min}
                max={max}
                className={`px-4 py-3 rounded-2xl bg-gray-50 dark:bg-petal-muted/30 border border-gray-100 dark:border-petal-leaf/10 text-petal-moss dark:text-white focus:outline-none focus:border-petal-rose focus:ring-2 focus:ring-petal-rose/20 transition-all duration-300 placeholder-gray-400 text-sm shadow-inner ${inputClassName}`}
            />
        </div>
    );
}

