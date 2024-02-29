import React from 'react';

const InputDefault = React.forwardRef((props, ref) => {
     return(<input type="number" value={props.valueinput} ref={ref} onChange={e=>props.changevalue(e)}/>)

})

InputDefault.displayName = "InputDefault-forwardRef"
export default InputDefault