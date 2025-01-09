import { ReactElement } from "react";
import CardFilter from "../../components/cardFilter/CardFilter";
import CardList from "../../components/cardList/CardList";


const MainPage = (): ReactElement => {
    return (
        <>
            <CardFilter />
            <CardList />
        </>
    );
}

export default MainPage;