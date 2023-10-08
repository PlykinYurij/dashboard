import { useQuery} from '@apollo/client'
import {GET_DASHBOARD} from '../../apollo/appRequests.ts'
import Loader from '../../components/Loader/Loader.tsx'
import ErrorResponse from '../../components/ErrorResponse/ErrorResponse.tsx'
import PieChartWithLegend from '../../components/PieChartWithLagend/PieChartWithLegend.tsx'
import {useState} from 'react'
import classes from './Dashboard.module.scss'

interface IDashboard {
    active: number,
    inactive: number,
    completed: number,
}
interface IActualData extends IDashboard {
    title: string
}
const Dashboard = () => {
    const [actualData, setActualData] = useState<IActualData[]>([])
    const {loading, error, data} = useQuery(GET_DASHBOARD, {
        fetchPolicy: 'cache-first',
        errorPolicy: 'ignore',
        onCompleted() {
            setActualData([
                {...data.dashboard.scenarios, title: 'Сценарии'},
                {...data.dashboard.lists, title: 'Списки'},
                {...data.dashboard.dialogs, title: 'Диалоги'},
            ])
        }
    })

    return (
        <div className={classes.wrapperDashboard}>
            <div className={classes.titlePage}>Сводка</div>
            {loading && <Loader />}
            {error && <ErrorResponse message={error.message}/>}
            <div className={classes.containerPies}>
            {actualData.map((pie) => <PieChartWithLegend
                key={pie.title}
                title={pie.title}
                active={pie.active}
                noActive={pie.inactive}
                completed={pie.completed}
            />)}
            </div>
        </div>
    )
}

export default Dashboard