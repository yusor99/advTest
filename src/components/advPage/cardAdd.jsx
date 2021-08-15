import { SimpleGrid } from "@chakra-ui/react"
const CardAdd = () => {
    return (
        <div className="containerCardHome"  >
            <div className="body" >
                <SimpleGrid columns={2} spacing={1} >
                    <img src="/img/Rectangle 4767.png" alt="Rectangle" width="205px" height="118px" />
                    <div className="Description">  ( 120 Letter ) : i.e. ( We have a Good Opportunity for flats for sale in Baghdad for new married persons with a good prices you can contact us any time during the week)</div>

                </SimpleGrid>
            </div>
            <div className="hr" />

            <div className="footer">
      <div className="divfooter">        
        <img src="/img/Rectangle 5609.png" alt="face" className="faceImg" />
              <div> 
                   <p>High Towers for real Estate Co. Ltd.</p>
                   <p className="smfooter">( Agent or Owner ) Distrct - City</p>
              </div>
                </div>
                <img src="/img/Untitled-1 33.png" alt="unitled" className="img2footer"/>
            </div>
        </div >
    )
}
export default CardAdd;