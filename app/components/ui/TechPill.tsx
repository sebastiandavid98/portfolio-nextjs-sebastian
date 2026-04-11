// Reusable technology/skill pill badge
type Props = { label: string; className?: string };

export default function TechPill({ label, className = "" }: Props) {
  return (
    <span
      className={`bg-gray-100 dark:bg-slate-700/60 text-gray-600 dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-200 dark:border-slate-600/40 hover:border-blue-300 dark:hover:border-blue-500/40 transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
