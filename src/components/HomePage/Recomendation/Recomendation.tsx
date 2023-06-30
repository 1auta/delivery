import { Container2 } from "@/common/Container2"
import CardList from "@/common/Card"

export function Recomendation(){
    return (
<section>
    <Container2>
        <div className="mt-32 xs:mt-5 ">
            <p className="text-2xl mb-6 xs:text-center ">Personalized recommendations</p>
            <CardList/>
        </div>
    </Container2>
</section>
    )
}