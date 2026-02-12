import {useCreateProject} from '../hooks/apis/mutations/useCreateProject.js';
import {Button, Col, Flex, Row} from 'antd';
export const CreateProject = () => {

    const { createProjectMutation, isPending } = useCreateProject();

    async function handleCreateProject() {
        try {
            await createProjectMutation();
            console.log('Project created successfully!');
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
                </Flex></Col>
        </Row>
    )
}