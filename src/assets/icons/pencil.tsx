import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Pencil(props) {
  return (
    <Svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 1.833C5.938 1.833 1.833 5.938 1.833 11C1.833 16.062 5.938 20.167 11 20.167C16.062 20.167 20.167 16.062 20.167 11C20.167 5.938 16.062 1.833 11 1.833Z"
        stroke="currentColor"
        strokeWidth={1.375}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.333 19.404V12.833L11 6.417L14.667 12.833V19.404"
        stroke="currentColor"
        strokeWidth={1.375}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.333 12.833C7.333 12.833 8.366 13.75 9.167 13.75C9.967 13.75 11 12.833 11 12.833C11 12.833 12.033 13.75 12.833 13.75C13.634 13.75 14.667 12.833 14.667 12.833"
        stroke="currentColor"
        strokeWidth={1.375}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Pencil
