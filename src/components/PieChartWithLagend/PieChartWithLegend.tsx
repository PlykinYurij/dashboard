import {FC, useState} from 'react'
import {PieChart} from 'react-minimal-pie-chart'
import LegendPie from './components/LegendPie.tsx'
import classes from './PieChartWithLebend.module.scss'

interface IPieChart {
    title: string,
    active: number,
    noActive: number,
    completed: number
}

const PieChartWithLegend: FC<IPieChart> = ({title, active, noActive, completed}) => {
    const [activeHover, setActiveHover] = useState<number | null>(null)
    const [focusComponent, setFocusComponent] = useState<boolean>(false)
    const onMouseOverHover = (segmentIndex: number) => {
        setActiveHover(segmentIndex)
    }
    const onMouseOutHover = () => {
        setActiveHover(null)
    }

    const onMouseOverTotal = () => {
        setFocusComponent(true)
    }
    const onMouseOutTotal = () => {
        setFocusComponent(false)
    }

    const checkActiveSector = (index: number): boolean => {
        return focusComponent || activeHover === index
    }

    const totalCount = active + noActive + completed
    const dataPie = [
        {title: 'Активных', value: active, color: checkActiveSector(0) ? '#f9a752' : '#b9b1c0'},
        {title: 'Неактивных', value: noActive, color: checkActiveSector(1) ? '#fccf82' : '#d0cbd6'},
        {title: 'Завершенных', value: completed, color: checkActiveSector(2) ? '#fef4a8' : '#f2f0f5'}
    ]
    return (
        <div
            className={classes.wrapperPieChartWithLegend}
        >
            <div className={classes.containerPieChartWithLegend}>
                <PieChart data={dataPie}
                          lineWidth={10}
                          rounded={true}
                          startAngle={-90}
                          onMouseOver={(_, index) => onMouseOverHover(index)}
                          onMouseOut={onMouseOutHover}
                />
            </div>
            <div className={classes.containerContentInScheme}>
                <div className={classes.title}>{title}</div>
                <div className={classes.value}>
                    {activeHover === null ? totalCount : dataPie[activeHover].value}
                </div>
            </div>
            <div>
                <div onMouseOut={onMouseOutTotal} onMouseOver={onMouseOverTotal}>
                    <LegendPie
                        title={'Всего'}
                        value={totalCount}
                        isActive={false}

                    />
                </div>
                {dataPie.map((legend, index) => {
                    return <div
                        key={legend.title}
                        onMouseOver={() => onMouseOverHover(index)}
                        onMouseOut={onMouseOutHover}>
                        <LegendPie
                            title={legend.title}
                            value={legend.value}
                            isActive={activeHover === index}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default PieChartWithLegend