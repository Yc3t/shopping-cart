import { Filters } from "./Filters";

export function Header (){
    return(
    <header className="main-header">
      <div className="header-content">
        <h1 className='title'>
          <span className="title-top">Shopping</span>
          Cart
        </h1>
      </div>
      <Filters setFilters/>
    </header>
    )
}
