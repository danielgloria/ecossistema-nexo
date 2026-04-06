const HexBackground = () => {
  const hexPath = "M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-pattern" width="60" height="69.3" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path d={hexPath} fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.4" transform="translate(5, 5.8)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>
    </div>
  );
};

export default HexBackground;
