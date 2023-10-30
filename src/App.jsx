import { MoviesGrid } from "./MoviesGrid";
import AppStyle from "./App.module.css";
export function App(){
    return <div>
        <header className={AppStyle.title}>
            <h1>Movies</h1>
        </header>
        <main>
           <MoviesGrid/>
        </main>
        </div>
}

