import {FC} from 'react'
import classes from '../PieChartWithLebend.module.scss'
interface ILegendPie {
    title: string,
    value: number,
    isActive: boolean
}
const LegendPie: FC<ILegendPie> = ({title, value, isActive}) => {
    const classesLegend = [classes.containerLegend]
    if (isActive) classesLegend.push(classes.hover)
    return (
        <div className={classesLegend.join(' ')}>
            <div>
                {title}:
            </div>
            <div>
                {value}
            </div>
        </div>
    )
}

export default LegendPie