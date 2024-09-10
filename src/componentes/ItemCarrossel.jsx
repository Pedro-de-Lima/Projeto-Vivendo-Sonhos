export default function ItemCarrossel({cargo, texto, img}) {

    return(
        <>
            <div className="content" style={{width: '70%', height:'75vh', backgroundColor:'white', display: 'flex', margin: 'auto', borderRadius: '10px'}}>
                <div className="imagem" style={{width:'50%', display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor: 'grey', borderRadius: '10px 0 0 10px'}}>
                    <img src={img} style={{width: '100%'}}></img>
                </div>
                <div className="texto" style={{width:'50%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
                    <h1>{cargo}</h1>
                    <p>{texto}</p>
                </div>
            </div>
        </>
    )
}