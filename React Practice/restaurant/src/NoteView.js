import './NoteView.css'
function NoteView(props) {

    return (
        <>
        <table>
            <tr>
                    <td>{props.title}</td>
                    <td>{props.desc}</td>
            </tr>
        </table>
        </>
    )
}
export default NoteView