import { Filters } from "./Filters";

export function Header (){
    return(
    <header className="main-header">
      <div className="header-content">
        <h1 className='title'>
          <span className="title-top">Express</span>
          Shop 
        </h1>
      </div>
      <Filters setFilters/>
    </header>
    )
}
