import classNames from 'classnames'
import { MessegerProps } from '../assets/types'

const Messeger: React.FC<MessegerProps> = ({children, classes}) => {

    const MessegeClass = classNames (
        "flex justify-center items-center gap-3",
        {
            [classes!] : classes
        }
    )

    return (
        <div className={MessegeClass}>
            {/* Messege  */}
            {children}
        </div>
    )
}

export default Messeger