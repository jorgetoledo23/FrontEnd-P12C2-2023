export default function Carro({visible}) {
    
    const style = {
        width : visible ? "400px": "0px"
    }

    return <div className="carro" style={style}>
        <div className="carroProduct">
            <div>
                <img width={100} src="https://d3tctca4ed2xlu.cloudfront.net/images/spree/images/1815931/attachments/large/Apple_iPhone_14_Pro_Max_Negro_Espacial_1.jpg" alt="" />
            </div>
            <div>
                <p>Desc</p>
                <p>12312312</p>
                <p>1</p>
            </div>

        </div>
    </div>

};
