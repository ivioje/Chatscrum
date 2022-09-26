import React from 'react'

const AddTask = ({
    isOpen,
    setIsOpen,
    content,
    setContent,
    addTask }) => {

        
        
        const openModal = () => {
            setIsOpen(true)
        }
        
        const closeModal = () => {
            setIsOpen(false)
        }
        
        const handleChange = (e) => {
            setContent(e.target.value)
        }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(false)
        addTask(content);
        setContent('');
        
       // console.log(content, 'content created');
    }

    return (
        <div className='add_task'>
            <div id='modal' className={isOpen ? 'show' : 'hidden'}>
                <div className='header'>
                    <h5>Add a new task</h5>
                    <h5 id='close' onClick={() => closeModal()}>close</h5>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type='text' value={content} onChange={handleChange} />
                    <button>CONFIRM</button>
                </form>
            </div>

            <button className='add' onClick={() => openModal()}>ADD TASK</button>
        </div>
    )
}

export default AddTask