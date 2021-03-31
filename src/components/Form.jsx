import React from 'react';
import { Link } from 'react-router-dom';


function Form({handleSubmit, handleChange, item}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>Title: </label> 
                <br />
                <input 
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={handleChange}
                />
                <br />
                <br />

                <label>Description: </label>
                <br />
                <textarea
                    name="description"
                    value={item.description}
                    onChange={handleChange}
                />
                <br />
                <br />

                <label>Price: </label>
                <br />
                <input
                    name="price"
                    type="number"
                    value={item.price}
                    onChange={handleChange}
                /> 
                <br />
                <br />

                <label>Stock: </label>
                <br />
                <input 
                    name="stock"
                    type="number"
                    value={item.stock}
                    onChange={handleChange}
                /> 
                <br />
                <br />

                <label>Category: </label>
                <br />
                <select name="category" value={item.category} onChange={handleChange}>
                    <option value="PC" >PC</option>
                    <option value="Laptops" >Laptops</option>
                    <option value="Monitors" >Monitors</option>
                    <option value="Mice" >Mice</option>
                    <option value="Keybords" >Keybords</option>
                </select>
                <br />
                <br />

                <button>Create</button>
                <br/>
                <Link to='/admin/ManageItems'><button className={'backButton'} >Back</button></Link>

            </form>
                            
        </div>
    )
}

export default Form