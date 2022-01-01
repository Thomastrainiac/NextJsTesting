import blogStyles from '../styles/Blog.module.css'

export function getEditorImg(editorName) {
    if (editorName == 'Thomastrainiac') {
        return(
            <>
                <img className={blogStyles.editor} src='/thomas.png' height='25px' width='25px;'></img>
            </>
        )
    }
}