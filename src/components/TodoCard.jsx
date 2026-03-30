import Text from './Text'

function TodoCard({
    title,
    body,
    dueDate,
}) {
    return (
        <div className='todo__card-container'>
            <Text as="h4" text={title} />
            <Text as="p" text={body} />
            <Text as="p" className="todo__card-date" text={dueDate} />
        </div>
    )
}

export default TodoCard