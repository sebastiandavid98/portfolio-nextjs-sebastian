"use client";

export default function CV() {
  const handleDownload = () => {
    // Trigger download via API route — works on all browsers
    window.open("/api/cv", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4"
      style={{ background: "var(--gradient-hero)" }}>

      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-[#0D1F12] dark:text-[#F0FDF4] mb-2">
          Sebastián David Marcillo
        </h1>
        <p className="text-[#4A7C59] dark:text-[#6EE7A0] font-medium">
          Estudiante de Ingeniería de Software · 5° semestre
        </p>
      </div>

      <button
        onClick={handleDownload}
        className="flex items-center gap-3 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-green-700/30 hover:-translate-y-1 active:scale-95 text-base"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
        </svg>
        Descargar CV en PDF
      </button>

      <p className="text-[#4A7C59] dark:text-[#6EE7A0] text-sm">
        El PDF se generará automáticamente con tu información actualizada.
      </p>

      <a href="/" className="text-[#6b4f3b] dark:text-[#A07850] text-sm underline underline-offset-2 hover:opacity-70 transition-opacity">
        ← Volver al portafolio
      </a>
    </div>
  );
}
