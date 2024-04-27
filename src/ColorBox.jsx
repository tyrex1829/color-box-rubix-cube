function ColorBox () {
    const randColor = Math.floor(Math.random() * 16);

    return (
        <div style={{ backgroundColor: "red", height: "50px", width: "50px", borderRadius: "5px" }}></div>
    )
}

export default ColorBox;