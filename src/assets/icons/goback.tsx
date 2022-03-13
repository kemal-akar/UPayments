import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GoBack(props) {
  return (
    <Svg
      width="24px"
      height="24px"

      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.6907 4.8866C21.5876 3.54639 20.5567 2.41237 19.1134 2.30928C17.0515 2.10309 14.1649 2 12 2C9.83505 2 6.94845 2.10309 4.8866 2.30928C4.16495 2.30928 3.54639 2.61856 3.13402 3.13402C2.72165 3.64948 2.41237 4.16495 2.30928 4.8866C2.10309 6.94845 2 9.83505 2 12C2 14.1649 2.20619 17.0515 2.30928 19.1134C2.41237 20.4536 3.4433 21.5876 4.8866 21.6907C6.94845 21.8969 9.83505 22 12 22C14.1649 22 17.0515 21.7938 19.1134 21.6907C20.4536 21.5876 21.5876 20.5567 21.6907 19.1134C21.8969 17.0515 22 14.1649 22 12C22 9.83505 21.8969 6.94845 21.6907 4.8866ZM10.1443 12.2062L13.5464 15.6082C13.8557 15.9175 13.8557 16.433 13.5464 16.7423C13.3402 16.8454 13.2371 16.9485 13.0309 16.9485C12.8247 16.9485 12.6186 16.8454 12.5155 16.7423L9.1134 13.3402C8.39175 12.6186 8.39175 11.4845 9.1134 10.7629L12.5155 7.36082C12.8247 7.05155 13.3402 7.05155 13.6495 7.36082C13.9588 7.6701 13.9588 8.18557 13.6495 8.49485L10.2474 11.8969C10.0412 11.8969 10.0412 12.1031 10.1443 12.2062Z"
        fill="#fff"
      />
    </Svg>
  );
}

export default GoBack;