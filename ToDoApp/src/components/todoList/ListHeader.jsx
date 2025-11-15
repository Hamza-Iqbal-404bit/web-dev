
function ListHeader({ filter, setFilter, searchTerm, setSearchTerm }) {
    return (
        <div className='list-header'>
            <h2 className='title'>Your Tasks</h2>
            <div className='search-container'>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Search tasks...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>
            <div className='sort-container'>
                <select
                    className='sort-dropdown'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">
                        All
                    </option>
                    <option value="completed">
                        Completed
                    </option>
                    <option value="not-completed">
                        Pending
                    </option>
                </select>
            </div>
        </div>
    );
}

export default ListHeader;