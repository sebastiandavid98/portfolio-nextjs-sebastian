// Reusable section header: accent line + label + title with gradient accent
type Props = {
  label: string;
  title: string;
  titleAccent: string;
  className?: string;
};

export default function SectionHeader({ label, title, titleAccent, className = "" }: Props) {
  return (
    <div className={className}>
      <div className="animate-slide-right flex items-center gap-3 mb-3">
        <span className="h-px w-8 bg-blue-600" />
        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">
          {label}
        </span>
      </div>
      <h2 className="animate-fade-up text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
          {titleAccent}
        </span>
      </h2>
    </div>
  );
}
