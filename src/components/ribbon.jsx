import "./ribbon.css"
function Ribbon(props){
    return(
        <div style={{ fontFamily: "'Montserrat', serif" }} className="ribbon">
<div className="ribbon-stitches-top"></div>
<div className="ribbon-content"><p><b>{props.text}</b></p></div>
<div className="ribbon-stitches-bottom"></div>
</div>

    )
}

export default Ribbon