function Tags({ tags }) {
    return (
        <div className="tagsContainer">
            {tags.map((item) => (
                <div key={item} className="tagsContainer__tag">
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Tags;
