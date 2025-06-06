
interface DecorativeLinesProps {
  variant?: 'flowing' | 'minimal' | 'curved';
  position?: 'top' | 'bottom' | 'center';
  color?: 'black' | 'sage';
  className?: string;
}

const DecorativeLines = ({ 
  variant = 'flowing', 
  position = 'center', 
  color = 'sage',
  className = '' 
}: DecorativeLinesProps) => {
  const strokeColor = color === 'sage' ? 'rgb(132, 140, 114)' : 'rgb(41, 37, 36)';
  
  if (variant === 'flowing') {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg 
          viewBox="0 0 800 200" 
          className="w-full h-16 md:h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C200,60 300,140 500,100 C600,80 700,120 800,100"
            stroke={strokeColor}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M0,120 C150,80 250,160 450,120 C550,100 650,140 800,120"
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M0,80 C100,120 200,40 400,80 C500,100 600,60 800,80"
            stroke={strokeColor}
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`w-full flex justify-center ${className}`}>
        <svg width="200" height="60" viewBox="0 0 200 60">
          <path
            d="M20,30 C60,10 140,50 180,30"
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M30,35 C70,15 130,45 170,35"
            stroke={strokeColor}
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>
    );
  }

  // curved variant
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg 
        className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48" 
        viewBox="0 0 200 200"
      >
        <path
          d="M50,20 C100,40 120,80 150,120 C180,160 160,180 140,170"
          stroke={strokeColor}
          strokeWidth="1"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M70,30 C110,50 130,90 160,130 C190,170 170,190 150,180"
          stroke={strokeColor}
          strokeWidth="0.8"
          fill="none"
          opacity="0.15"
        />
      </svg>
    </div>
  );
};

export default DecorativeLines;
