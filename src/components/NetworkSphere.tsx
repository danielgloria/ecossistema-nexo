const NetworkSphere = () => {
  const nodes = [
    { x: 75, y: 20 }, { x: 45, y: 35 }, { x: 105, y: 35 },
    { x: 30, y: 60 }, { x: 75, y: 55 }, { x: 120, y: 60 },
    { x: 50, y: 80 }, { x: 100, y: 80 }, { x: 75, y: 95 },
    { x: 60, y: 50 }, { x: 90, y: 50 }, { x: 75, y: 70 },
    { x: 40, y: 70 }, { x: 110, y: 70 },
  ];

  const edges: [number, number][] = [
    [0, 1], [0, 2], [1, 3], [1, 4], [1, 9], [2, 4], [2, 5], [2, 10],
    [3, 6], [3, 9], [3, 12], [4, 9], [4, 10], [4, 11],
    [5, 7], [5, 10], [5, 13], [6, 8], [6, 11], [6, 12],
    [7, 8], [7, 11], [7, 13], [8, 11], [9, 11], [9, 12],
    [10, 11], [10, 13], [0, 4], [11, 12], [11, 13],
  ];

  return (
    <svg viewBox="0 0 150 115" className="w-32 h-28 md:w-40 md:h-36">
      <defs>
        <radialGradient id="sphere-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="hsl(156, 40%, 56%)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="hsl(156, 40%, 56%)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="75" cy="57" rx="55" ry="48" fill="url(#sphere-glow)" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="hsl(220, 43%, 20%)"
          strokeWidth="0.6"
          opacity="0.3"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y}
          r={i % 3 === 0 ? 3.5 : 2.5}
          fill={i % 3 === 0 ? "hsl(156, 40%, 56%)" : "hsl(220, 43%, 20%)"}
        />
      ))}
    </svg>
  );
};

export default NetworkSphere;
