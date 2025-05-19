interface WaveDividerProps {
  from: string
  to: string
  className?: string
}

export function WaveDivider({ from, to, className = "" }: WaveDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ backgroundColor: from }}>
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: "100px" }}
      >
        <path
          fill={to}
          fillOpacity="1"
          d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,42.7C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
        ></path>
      </svg>
    </div>
  )
}
