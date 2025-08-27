import {Header} from "./Header.tsx";
import {Container, CssBaseline} from "@mui/material";
import {Outlet} from "react-router"

function App() {

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Container>
                <Outlet />
            </Container>
            
        </>
    )
}


export default App
