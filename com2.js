import React, { useState } from 'react';

function Test2() {
  return <div>99992</div>
}

function Test(props) {
  return <Test2 data-if={props.vis} />
}

const Com2 = () => {
  const [vis, setVis] = useState(false);

  return (
    <div>
      <div onClick={() => setVis(!vis)}>click</div>
      <Test vis={vis} />
    </div>
  );
}

export default Com2;
