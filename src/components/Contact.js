const Contact = ()=>{
    return(
        <div className="flex flex-col p-6 justify-between w-64 gap-6"> 
        <h1 className="font-bold "> This is my contact</h1>
        <form className="flex flex-col gap-4" >
            <input className="border-2 rounded-lg pl-4 border-black" type="text"placeholder="Name" />
            <input className="border-2 rounded-lg pl-4 border-black" type="text"placeholder="Message" />
            <button className="border-2 rounded-lg border-black px-5">Submit</button>
        </form>
        </div>
    )
}
export default Contact;