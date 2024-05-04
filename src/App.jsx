// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// // Import Icon component and all icons from '@wordpress/icons'
// import { Icon } from '@wordpress/icons';
// import * as icons from '@wordpress/icons';

// function App() {
//   return (
//     <div className="icon-gallery">
//       {Object.entries(icons).map(([iconName, iconComponent]) => {
//         // Filter to render only icon components (ignoring the Icon container component)
//         if (iconName !== 'Icon') {
//           return (
            
//               <Icon icon={iconComponent} />
            
//           );
//         }
//         return null;
//       })}
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import Icon component and all icons from '@wordpress/icons'
import { Icon } from '@wordpress/icons';
import * as icons from '@wordpress/icons';

function App() {
  // Filter out the 'Icon' key and count the remaining icons
  const iconCount = Object.keys(icons).filter(iconName => iconName !== 'Icon').length;

  return (
    <div className="icon-gallery">
      <h1>Total Icons: {iconCount}</h1>
      {Object.entries(icons).map(([iconName, iconComponent]) => {
        if (iconName !== 'Icon') {
          return (
            <div key={iconName}>
              <Icon icon={iconComponent} />
              <p>{iconName}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default App;
