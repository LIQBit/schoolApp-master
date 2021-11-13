import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import DeleteStudent from '../DeleteStudent';
import deleteStudentMutation from '../../queries/index';

it('should render without errors', () => {
    TestRenderer.create(
        <MockedProvider >
            <DeleteStudent />
        </MockedProvider>
    );
});