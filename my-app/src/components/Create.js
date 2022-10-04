
const   Create = () =>{
    return (
        <div className="create">
            <h1>Add a blog</h1>
            <form>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                />
                <label>Blog Body</label>
                <textarea
                required
                ></textarea> 
                <label>Blog Author</label>
                <select>
                    <option value="ronald">ronald</option>
                    <option value="dennis">dennis</option>
                </select>
                <button>Add New Blog</button>
            </form>
        </div>
    );
}

export default Create;