import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Plus(props) {
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="-1.5 0 24 24"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.5 9.75H12.75V3c0 -0.828 -0.672 -1.5 -1.5 -1.5h-1.5c-0.828 0 -1.5 0.672 -1.5 1.5v6.75H1.5c-0.828 0 -1.5 0.672 -1.5 1.5v1.5c0 0.828 0.672 1.5 1.5 1.5h6.75v6.75c0 0.828 0.672 1.5 1.5 1.5h1.5c0.828 0 1.5 -0.672 1.5 -1.5V14.25h6.75c0.828 0 1.5 -0.672 1.5 -1.5v-1.5c0 -0.828 -0.672 -1.5 -1.5 -1.5z" />
    </Svg>
  );
}

export default Plus;
