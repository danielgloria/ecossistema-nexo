const DotGridBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none bg-slate-50"
      aria-hidden="true"
    >
      {/* Dot grid pattern - navy dots at ~4% opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(27,42,74,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Fine crosshair lines - mint at ~3% opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(82,196,156,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(82,196,156,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
    </div>
  );
};

export default DotGridBackground;
