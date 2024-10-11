import AppAdvantage from "./AppAdvantage";
import Article from "./Article";
import Connect from "./Connect";
import Offers from "./Offers";
import PropertyType from "./PropertyType";
import TopVacation from "./TopVacation";

export default function Home(){
    return(
        <>
            <TopVacation/>
            <Offers/>
            <PropertyType/>
            <Article/>
            <Connect/>
            <AppAdvantage/>
        </>
    )
}