import React from 'react';
import ReactDOM from 'react-dom';

import Handle from './src/Handle.jsx';
import Slider from './src/Slider.jsx';

ReactDOM.render(
	<Slider div1color="blue" div2color="green" div3color="yellow" div4color="red" div1zindex='4' div2zindex='3' div3zindex='2' div4zindex='1' />,
	document.getElementById('Slider')
);