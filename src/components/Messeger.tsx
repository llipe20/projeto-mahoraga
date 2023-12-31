import classNames from 'classnames'
import { Messeger } from '../assets/types'

const Messeger: React.FC<Messeger> = ({children, classes}) => {

    const MessegeClass = classNames (
        "flex justify-center items-center gap-3 w-auto h-10 pl-3 pr-3",
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