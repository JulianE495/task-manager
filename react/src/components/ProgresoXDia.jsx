import './css/ProgresoXDia.css'

const ProgesoDia = ({ progText }) => {
    return (
        <>
            <div className='progreso-tareas-container'>
                <h2>{progText}</h2>
                <div class="container">
                    <div class="progress">
                        <span class="title timer" data-from="0" data-to="95" data-speed="1800">95</span>
                        <div class="overlay"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgesoDia;