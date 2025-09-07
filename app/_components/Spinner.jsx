import { ImSpinner2 } from "react-icons/im"

function Spinner({size = 'text-lg'}) {
    return (
        <ImSpinner2 className={`${size} absolute top-1/2 left-1/2 -translate-1/2`}/>
    )
}

export default Spinner
