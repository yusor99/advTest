import { SimpleGrid } from "@chakra-ui/react"
const CardHome = () => {
    return (
        <div className="containerCardHome"  >
            <div className="body" >
                <SimpleGrid columns={2} spacing={1} >
                    <img src="/img/Rectangle 4767.png" alt="Rectangle" width="205px" height="118px" />
                    <div className="Description"> Description of 120 Letters , wil lbe enput in the next page</div>

                </SimpleGrid>
            </div>
            <div className="hr" />

            <div className="footer">
                <img src="/img/Rectangle 4768.png" alt="face" className="faceImg" />
                <p>High Towers for real Estate Co. Ltd.</p>
            </div>
        </div >
    )
}
export default CardHome;