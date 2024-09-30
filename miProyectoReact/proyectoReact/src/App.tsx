import { AppProduct } from "./components/AppProduct/AppProduct"
import { FormComponent } from "./components/FormComponent/FormComponent"

export const App = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
            {/* <MiPrimerComponente 
                text={"Texto desde propiedades"}    
                color="red" 
                fontSize={5}
                />
            <ComponentCounter/>
            <ComponentUseEffect/> */}
            {/* <FormComponent/> */}
            <AppProduct/>
        </div>
  )
}
