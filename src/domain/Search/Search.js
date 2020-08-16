import React from 'react'

const Search = ({disabled, handleSearch}) => (
    <div className="Search">
        <input 
          type="search" 
          placeholder="Digite o nome do usuário no GitHub"
          disabled={disabled}
          onKeyDown={handleSearch} />
      </div>
)

export default Search