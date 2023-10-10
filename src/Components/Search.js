import { MdSearch } from 'react-icons/md'

const search = ({ handleSearchNote }) => {
    return ( 
        <div className="search">
            <MdSearch className="search-icon" size="1.3em"></MdSearch>
            <input 
                onChange={(event)=>{handleSearchNote(event.target.value)}} 
                type="text" 
                placeholder="Type to search..."
            />
        </div>
     );
}
 
export default search;