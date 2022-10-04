import React from "react";
import { useState } from "react";

const   Create = () =>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState ("ronald")
    return (
        <div className="create">
            <h1>Blog</h1>
            <form>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea> 
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Ronald">Ronald</option>
                    <option value="Dennis">Dennis</option>
                    <option value="Tess">Tess</option>
                    <option value="Andrew">Andrew</option>
                    <option value="Amran">Amran</option>
                    <option value="Kate">Kate</option>
                </select>
                <button>Add New Blog</button>
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}

export default Create;