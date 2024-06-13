export default function ItemCarrossel({cargo, texto}) {

    return(
        <>
            <div style={{width: '70%', height:'75vh', backgroundColor:'white', display: 'flex'}}>
                <div className="imagem" style={{width:'50%', display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor: 'blue'}}>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"></img>
                </div>
                <div className="texto" style={{width:'50%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
                    <h1>{cargo}</h1>
                    <p>{texto}</p>
                </div>
            </div>
        </>
    )
}