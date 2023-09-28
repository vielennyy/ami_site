import { Banner } from '../../components/HomePageContent/Banner'
import { Profecions } from '../../components/HomePageContent/Profecions'
import { Technologies } from '../../components/HomePageContent/Technologies'
import { Companies } from '../../components/HomePageContent/Companies'
import { Questions } from '../../components/HomePageContent/Questions'
import { Projects } from '../../components/HomePageContent/Projects'

export const HomePage = () => {
    return (
        <>
            <Banner/>
            <Profecions/>
            <Technologies/>
            <Companies/>
            <Projects/>
            <Questions/>
        </>
    )
}