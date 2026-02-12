import {useParams} from 'react-router-dom';
import {EditorComponent} from '../components/molecules/EditorComponent/EditorComponent.jsx';
import {EditorButton} from '../components/atoms/EditorButton/EditorButton.jsx';

export const ProjectPlayground = () => {
    const {projectId} = useParams();
    return (
        <>
            <h1>Project Playground: {projectId}</h1>
            <EditorComponent/>
            <EditorButton/>
            <EditorButton isActive={true}/>
        </>
    )
}