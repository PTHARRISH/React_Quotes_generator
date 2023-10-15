import { useState,useEffect } from "react"
import { Spinner } from "react-bootstrap";

export default function Quotes(){
    const[quote,setQuotes]=useState(null);
    const getQuote=async()=>{
        try{
            const apiResponse=await fetch('https://api.quotable.io/random');
            const apiData=await apiResponse.json();
            const {content,author}=apiData;
            setQuotes({content,author});

        }catch(error){
            console.error('Error',error);
        }
    }

    useEffect(() =>{
        getQuote();
    },[])


    return(<>
        {/* add image url */}
        <img style={{width:"100vw",heigth:"100vh"}} alt="background" src="https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"/>
        {/* Positioning the Image */}
        <div className="d-flex justify-content-center align-items-center" style={{position:'absolute',top:'0',left:'0', width:"100vw",heigth:"100vh",backdropfilter:'blur(3px)',backgroundColor:'rgba(0,0,0,0.3)'}}>
            {
                quote
                ?
                <div className="w-75">
                    <h3 className="display-1 text-white fst-italic fw-bold">{quote.content} </h3>
                    <p className="text-white lead">~{quote.author}</p>
                    <button onClick={()=>getQuote()}className="btn btn-primary"> New Quotes</button>
                </div>
                :
                <Spinner/>
            }

        </div>
        </>
        )
}