import React from 'react';

const svgProps = {
   width: 20,
   height: 20,
   viewBox: '0 0 24 24',
   fill: 'none',
   xmlns: 'http://www.w3.org/2000/svg',
};

export function ReactIcon({ color = '#61DAFB' }) {
   return (
      <svg {...svgProps}>
         <circle cx="12" cy="12" r="2.5" fill={color} />
         <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1.2" />
         <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke={color}
            strokeWidth="1.2"
            transform="rotate(60 12 12)"
         />
         <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke={color}
            strokeWidth="1.2"
            transform="rotate(120 12 12)"
         />
      </svg>
   );
}

export function ViteIcon({ color = '#646CFF' }) {
   return (
      <svg {...svgProps}>
         <path
            d="M21.805 3.23L12.356 20.17c-.182.33-.672.33-.854 0L2.195 3.23c-.2-.36.148-.78.564-.63L12 8.46l9.24-5.86c.415-.15.764.27.565.63z"
            fill={color}
         />
         <path
            d="M12 8.46l-6.8 4.28 4.66 8.43h4.28l4.66-8.43L12 8.46z"
            fill={color}
            opacity="0.6"
         />
      </svg>
   );
}

export function ReactRouterIcon({ color = '#CA4245' }) {
   return (
      <svg {...svgProps}>
         <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
         <circle cx="12" cy="12" r="3" fill={color} />
         <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="1.2" />
      </svg>
   );
}

export function MUIIcon({ color = '#007FFF' }) {
   return (
      <svg {...svgProps}>
         <rect x="3" y="3" width="18" height="18" rx="3" fill={color} />
         <text
            x="12"
            y="16"
            textAnchor="middle"
            fill="#fff"
            fontWeight="bold"
            fontSize="10"
            fontFamily="sans-serif">
            M
         </text>
      </svg>
   );
}

export function EmotionIcon({ color = '#D26AC2' }) {
   return (
      <svg {...svgProps}>
         <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
         <text
            x="12"
            y="16"
            textAnchor="middle"
            fill={color}
            fontWeight="bold"
            fontSize="10"
            fontFamily="sans-serif">
            E
         </text>
      </svg>
   );
}

export function FramerIcon({ color = '#0055FF' }) {
   return (
      <svg {...svgProps}>
         <path d="M4 2h16v8h-8l8 8H4v-8h8L4 2z" fill={color} />
      </svg>
   );
}

export function I18NextIcon({ color = '#2684FC' }) {
   return (
      <svg {...svgProps}>
         <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
         <path
            d="M2 12h20M12 2c3 3.5 3 14.5 0 20M12 2c-3 3.5-3 14.5 0 20"
            stroke={color}
            strokeWidth="1"
         />
      </svg>
   );
}

export function ReactI18NextIcon({ color = '#61DAFB' }) {
   return (
      <svg {...svgProps}>
         <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
         <circle cx="12" cy="12" r="2.5" fill={color} />
         <ellipse cx="12" cy="12" rx="7" ry="2.8" stroke={color} strokeWidth="0.8" />
      </svg>
   );
}

export function LangDetectIcon({ color = '#F59E0B' }) {
   return (
      <svg {...svgProps}>
         <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
         <path d="M8 9c1 2 2 3 4 3s3-1 4-3" stroke={color} strokeWidth="1.2" fill="none" />
         <circle cx="8" cy="8" r="1" fill={color} />
         <circle cx="16" cy="8" r="1" fill={color} />
      </svg>
   );
}

export function CSSIcon({ color = '#1572B6' }) {
   return (
      <svg {...svgProps}>
         <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="3"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
         />
         <text
            x="12"
            y="16"
            textAnchor="middle"
            fill={color}
            fontWeight="bold"
            fontSize="8"
            fontFamily="monospace">
            {'{}'}
         </text>
      </svg>
   );
}

export function ScrambleIcon({ color = '#8B5CF6' }) {
   return (
      <svg {...svgProps}>
         <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="3"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
         />
         <text
            x="12"
            y="15"
            textAnchor="middle"
            fill={color}
            fontWeight="bold"
            fontSize="7"
            fontFamily="monospace">
            ABC
         </text>
      </svg>
   );
}

export function RolldownIcon({ color = '#EF4444' }) {
   return (
      <svg {...svgProps}>
         <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
         <path d="M12 4l5 8H7l5-8z" fill={color} />
      </svg>
   );
}

export function OxlintIcon({ color = '#FB923C' }) {
   return (
      <svg {...svgProps}>
         <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
         <path d="M7 12l3 3 7-7" stroke={color} strokeWidth="2" fill="none" />
      </svg>
   );
}

export function GitHubActionsIcon({ color = '#2088FF' }) {
   return (
      <svg {...svgProps}>
         <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="4"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
         />
         <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" />
         <circle cx="12" cy="4" r="1.5" fill={color} />
         <circle cx="12" cy="20" r="1.5" fill={color} />
         <circle cx="4" cy="12" r="1.5" fill={color} />
         <circle cx="20" cy="12" r="1.5" fill={color} />
      </svg>
   );
}

export function PoppinsIcon({ color = '#333' }) {
   return (
      <svg {...svgProps}>
         <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="4"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
         />
         <text
            x="12"
            y="16"
            textAnchor="middle"
            fill={color}
            fontWeight="bold"
            fontSize="10"
            fontFamily="sans-serif">
            P
         </text>
      </svg>
   );
}

export function NotoThaiIcon({ color = '#333' }) {
   return (
      <svg {...svgProps}>
         <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="4"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
         />
         <text
            x="12"
            y="16"
            textAnchor="middle"
            fill={color}
            fontWeight="bold"
            fontSize="10"
            fontFamily="sans-serif">
            ก
         </text>
      </svg>
   );
}

export function NotoSCIcon({ color = '#333' }) {
   return (
      <svg {...svgProps}>
         <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="4"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
         />
         <text
            x="12"
            y="16"
            textAnchor="middle"
            fill={color}
            fontWeight="bold"
            fontSize="10"
            fontFamily="sans-serif">
            字
         </text>
      </svg>
   );
}
