import axios from "axios";
import { useEffect, useState } from "react";
import  url from "../Constants/Constants";
import { useHistory } from "react-router";



export const useGetTrip = () => {

    const [tripsList, setTripsList] = useState([])

    const getTrips = () => {
        axios.get(`${url}/trips`)
            .then((res) => {
                setTripsList(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTrips()
    }, []);

    return ([tripsList, getTrips])
}


export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token === null) {
            console.log('Não está logado!')
            history.push("/login")
        }
    }, [])
}

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const {name, value}  = event.target;
        setForm({ ...form, [name]: value })
    };

    const cleanFields = () => { 
        setForm(initialState)
    }

    return { form, onChange, cleanFields };
}



export default { useGetTrip, useProtectedPage, useForm };