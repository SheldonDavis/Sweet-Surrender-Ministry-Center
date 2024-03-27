interface Properties{
    classes:string;
}
function HowToHelp(props:Properties){
    const {classes} = props
    return(
        <article id={`HowToHelp`} className={classes}>
            <h3>How You Can Help</h3>
            <ul>
                <li><p>Tax Deductible Monetary Donations</p></li>
                <li><p>Volunteer Service Time</p></li>
                <li><p>Donation of Project Specific Goods</p></li>
                <li><p>Pray for the Ministry and Those We Serve</p></li>
            </ul>
        </article>
    )
}
export default HowToHelp