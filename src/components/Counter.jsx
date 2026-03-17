import { useState } from 'react'
import Button from './Button'
import Text from './Text'

function Counter() {

    const [count, setCount] = useState(0) // camelCase
    // const { state: count, setState: setCount } = useState(0)

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <Text as="h2" text="Contador" className="counter-title" />
            <div className='counter-container'>
                <Button label="-" handleClick={handleDecrement} />
                <Text as="p" text={count} />
                <Button label="+" handleClick={handleIncrement} />
            </div>
        </div>
    )
}

export default Counter