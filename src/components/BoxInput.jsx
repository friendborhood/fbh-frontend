

function BoxInput(props){
    const def = "border-solid border-2 border-green-700 rounded-md"
    const focus = "focus:outline-none focus:border-green-800 focus:shadow-inner focus:shadow-green-900"
    const hover = "hover:border-green-700";
    const hoverShadow = "hover:shadow-inner hover:shadow-green-800";
    return (
        <div className={`flex justify-between w-80 my-3 mx-8 ${props.margin}`}>
            <label>{props.label}: </label>
            <input id={props.id} className={`${def} ${hover} ${focus} ${hoverShadow}`}/>
        </div>
    );
}

export default BoxInput;