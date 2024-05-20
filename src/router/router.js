import {useRoutes} from "react-router-dom"
import Home from "../pages/home/home"
import Login from "../pages/login/login"
import Clock from "../pages/home/clock/clock"
import Search from "../pages/home/search/search"
import Result from "../pages/home/result/result"
import Detail from "../pages/home/detail/detail"
import Calendar1 from "../pages/home/calendar/calendar"
import Pickpacking from "../pages/home/pickpacking/pickpacking"
import Save from "../pages/save/save"
import Book from "../pages/book/book/book"
import Profile from "../pages/profile/profile"
export default function RouterView(){
    const rootlist = useRoutes(
        [
            {path:'home1',element:<Home></Home>},
            {path:'/',element:<Login></Login>},
            {path:'clock',element:<Clock></Clock>},
            {path:'search',element:<Search></Search>},
            {path:'result',element:<Result></Result>},
            {path:'detail',element:<Detail></Detail>},
            {path:'calendar',element:<Calendar1></Calendar1>},
            {path:'pickpacking',element:<Pickpacking></Pickpacking>},
            {path:'save2',element:<Save></Save>},
            {path:'book3',element:<Book></Book>},
            {path:'profile4',element:<Profile></Profile>}
        

        ]
    )
    return <>{rootlist}</>
}