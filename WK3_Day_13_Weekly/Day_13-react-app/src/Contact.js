function Contact(){

    return(
        <div className="component_margins">
            <p>Got any fishing-related questions? </p> 
            <form className="question-form">
                <input type="text" placeholder="Name"></input><br/>
                <input type="text" placeholder="Email"></input><br/>
                <textarea rows="10" placeholder="Type here..."></textarea><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;