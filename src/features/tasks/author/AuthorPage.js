import Header from "../../../common/Header";
import Section from "../../../common/Section"
import { MainContainer } from "../../../common/Container";

function AuthorPage() {
    return (
        <MainContainer>
            <Header
                title="O autorze"
            />
            <Section
                title="Aleksandra Niedziałkowska"
                body={
                    <>
                        <p>
                            Jestem osobą, która z pasją odkrywa świat poprzez podróże, zawsze szukając nowych miejsc, które poszerzają moje horyzonty.
                            Sport to dla mnie nie tylko forma aktywności, ale także sposób na utrzymanie równowagi i dobrej kondycji.
                        </p>
                        <p>
                            Z wykształcenia jestem <strong>dietetykiem i psychologiem</strong>, co pozwala mi lepiej rozumieć potrzeby ciała i umysłu oraz pomagać innym w osiąganiu ich celów zdrowotnych.
                            Jednak to, co mnie naprawdę napędza, to wyzwania – uwielbiam uczyć się nowych rzeczy, rozwijać swoje umiejętności i stale poszukiwać nowych obszarów wiedzy, które pozwalają mi rosnąć zarówno zawodowo, jak i osobiście.
                            Nie boję się wychodzić poza strefę komfortu, ponieważ wierzę, że każda nowa umiejętność i doświadczenie wzbogacają nasze życie. 😍
                        </p>
                    </>
                }
            />
        </MainContainer>
    );
}

export default AuthorPage;