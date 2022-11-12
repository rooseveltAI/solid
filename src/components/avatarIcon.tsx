import * as React from 'react'
import { SVGProps } from 'react'

const IconAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={112}
    height={114}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M56.099 114.074c22.957 0 43.297-11.173 55.901-28.372-2.342-3.356-11.554-13.162-42.56-20.623 0-7.04-.7-11.256-.7-11.256s9.145-12.669 9.848-30.26c0-2.796 1.374-22.635-22.514-23.533V0c-.06 0-.112.013-.176.013-.061 0-.113-.013-.174-.013v.03C31.841.926 33.21 20.767 33.21 23.563c.701 17.59 9.849 30.259 9.849 30.259s-.707 4.217-.707 11.256C12.166 72.342 2.642 81.828 0 85.418c12.587 17.358 33.019 28.656 56.099 28.656Z"
      fill="#fff"
      fillOpacity={0.16}
    />
  </svg>
)

export default IconAvatar
