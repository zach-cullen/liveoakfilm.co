const PlayIconSVG = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill={props.fill}>
    <defs>
      <filter id='f3' x='0' y='0' width='200%' height='200%'>
        <feOffset result='offOut' in='SourceAlpha' dx='20' dy='20' />
        <feGaussianBlur result='blurOut' in='offOut' stdDeviation='10' />
        <feBlend in='SourceGraphic' in2='blurOut' mode='normal' />
      </filter>
    </defs>
    <path d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z' />
  </svg>
)

export default PlayIconSVG
