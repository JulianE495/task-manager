import '../Components/css/todoFilterStyles.css'
import { TareaPendiente, ReunionPendiente } from '../components/Tarea'

const TodoFilter = () => {

    return (
        <div className="todo-filter">
            <div className="filters-cont">
                <div className="todo">
                    <h3 className='filter-title'>Todo</h3>
                    <TareaPendiente
                        titulo='Reunion con el equipo de desarrollo'
                        fecha='Oct. 10, 2023'
                        hora='4:00 pm - 5:00 pm' />
                    <TareaPendiente
                        titulo='Reunion con el equipo de desarrollo'
                        fecha='Oct. 10, 2023'
                        hora='4:00 pm - 5:00 pm' />
                    <TareaPendiente
                        titulo='Reunion con el equipo de desarrollo'
                        fecha='Oct. 10, 2023'
                        hora='4:00 pm - 5:00 pm' />
                </div>
                <div className="doing">
                    <h3 className='filter-title'>En curso</h3>
                    <TareaPendiente
                        titulo='Añadir funciones a la pantalla registro'
                        fecha='Oct. 10, 2023'
                        hora=' 4:00 pm - 5:00 pm'
                    />

                </div>
                <div className="done">
                    <h3 className='filter-title'>Listo</h3>
                    <TareaPendiente
                        titulo='Añadir funciones a la pantalla registro'
                        fecha='Oct. 10, 2023'
                        hora=' 4:00 pm - 5:00 pm'
                    />
                    <TareaPendiente
                        titulo='Reunion con el equipo de desarrollo'
                        fecha='Oct. 10, 2023'
                        hora='4:00 pm - 5:00 pm' />

                </div>
            </div>
        </div>
    );
}

export default TodoFilter;