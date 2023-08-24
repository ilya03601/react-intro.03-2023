import React from 'react';

const WrappedButton = ({name}: {name: string}) => (<div className="wrapper" style={{ margin: "5px" }}>
    <button onClick={() => alert("Click")} className="btn">
        {name}
    </button>
</div>);

export default WrappedButton;