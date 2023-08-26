import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Obtener el valor de budget y la función para actualizarlo desde el contexto
    // use context es un hook que permite acceder al contexto desde cualquier componente
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    //este código utiliza el método .reduce() para iterar a través del array expenses y sumar los valores de item.
    //cost de cada elemento. Al final de esta operación, 
    //totalExpenses contendrá la suma de todos los costos de los elementos en el array expenses.
    
    const totalExpenses=expenses.reduce((sum,item)=> {
        return (sum = sum + item.cost);

    }, 0);

    const setBudget = (event) => {

        if (event.target.value > 20000) {
            alert ('The budget value cannot exceed 20.000€!');
            setBudget('');
            return;
        }
        else if (event.target.value < totalExpenses) {
            alert("You cannot enter an amount lower than the expenses!"); //¡No puedes ingresar un monto inferior a los gastos!
            setBudget('');
            return;
        }
        dispatch ({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    };


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input 
                defaultValue={budget} // El valor inicial del campo será el valor actual de 'cost'.
                max={20000}
                min={totalExpenses}
                required='required' // Este atributo indica que el campo es obligatorio y no puede dejarse en blanco.
                step='10' // Este atributo indica que el campo se incrementará o decrementará de 100 en 100.
                style={{ marginLeft: '2rem' , size: 10}} // Este atributo permite definir estilos CSS para el campo.
                type='number' // Este atributo indica que el campo es de tipo numérico.
                onChange={(event) => setBudget(event)} // Este atributo permite definir un manejador para el evento 'change' del campo. El manejador se ejecutará cada vez que el usuario modifique el valor del campo.
                >
            </input>
            </span>
        </div>
    );
};
export default Budget;
