import {useMutation} from '@tanstack/react-query';
import {createProjectAPI} from '../../../apis/projects.js';

export const useCreateProject = () => {
    const {mutateAsync, isPending, isSuccess, error} = useMutation({
        mutationFn: createProjectAPI,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: () => {
            console.log('Error creating project');
        }
    });

    return {
        createProjectMutation: mutateAsync,
        isPending,
        isSuccess,
        error
    }
};