interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export default function SectionIntro({ eyebrow, title, description, align = 'center' }: SectionIntroProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClass} mb-10 lg:mb-14`}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200 mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
        {title}
      </h2>
      <p className="text-base md:text-lg text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
