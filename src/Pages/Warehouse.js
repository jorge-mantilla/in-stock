import Warehouses from "../components/Warehouses/warehouses";
import { useEffect } from "react";

function WarehousePage() {
    useEffect(() => {
        axios.get(`http://localhost:8080/videos`).then((response) => {
        setVideosArray(response.data)
        })
    }, []);
    return (
    <>
    <h1>404</h1>
    <p>Can't find what you're looking for, sorry!</p>
    </>
);
}
export default WarehousePage;