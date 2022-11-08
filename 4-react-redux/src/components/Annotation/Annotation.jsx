import './Annotation.css'

 
export const Annotation = ({ annotation }) => {
    return <div className='annotation'>
        <h3 className='annotation-title'>Аннотация</h3>
        <span className='annotation-text'>{annotation}</span>
    </div>
}