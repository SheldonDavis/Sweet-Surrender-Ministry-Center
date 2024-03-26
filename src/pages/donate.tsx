
function Donate(){
    return(
        <>
            <h1>~Donate~</h1>

            <article>
                <p className={`notes`}>text to tell the user where their donations would go and what it would be used for.</p>
            </article>
            <article className="coloredBG light">
                <h3>Donation form</h3>
                <p className={`notes`}>tell the user about SSMC and Zeffy working together and why Zeffy was chosen.</p>
                <form>
                    <p>donation form from zeffy<br/> <input type="text"/></p>
                </form>
            </article>
            <article>
                <h3>Other ways to contribute</h3>
                <p className={`notes`}>tell the user of other ways to donate to SSMC. (list of amazon lists, where to mail in check?, etc )</p>
            </article>
        </>
    )
}

export default Donate