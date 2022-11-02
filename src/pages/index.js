import { useState, useEffect } from "react";
import breedsService from "../services/requests/breedsService";
import "../style/global.css";

export function Home(){

    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        breedsService.getBreeds().then(res =>{
            setBreeds(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>API - DOGS</h1>
        <div className="box-high">
            {
                breeds.map(res => {
                    return (
                        <>
                            <div className="box">
                                <img  src={res.image.url}/>
                                <span>{res.name}</span>
                            </div>
                        </>
                    )
                })
            }
        </div>
        </div>
    )
}