import {useCreateProject} from '../hooks/apis/mutations/useCreateProject.js';
import {Button, Col, Flex, Row} from 'antd';
import {useNavigate} from 'react-router-dom';
export const CreateProject = () => {

    const { createProjectMutation, isPending } = useCreateProject();
    const navigate = useNavigate();

    async function handleCreateProject() {
        try {
            const response = await createProjectMutation();
            console.log('Project created successfully!');
            navigate(`/project/${response.data}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Row>
            <Col span={24}>
                <Flex justify="center" align="center">
                <Button type="primary" onClick={handleCreateProject}>
                Create Playground
                </Button>
                </Flex>
            </Col>
        </Row>
    )
}