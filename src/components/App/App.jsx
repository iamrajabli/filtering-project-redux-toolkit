import { Filter } from '../Filter'
import { Products } from '../Products';

const App = _ => {
    return (
        <>
            <div className='container'>
                <h2 className='title'>Find what you need</h2>
            </div>
            <div className='container'>
                <Filter />
                <Products />
            </div>
        </>
    )
}

export default App;