import TestRenderer from 'react-test-renderer';
import StudentList from '../StudentList';
import { MockedProvider } from "@apollo/client/testing";
import { getStudents } from '../../queries/index';

const mocks = {
    request: {
        query: getStudents,
    },
    result: {
        data: {
            students:
                {
                    name: "Bob Test",
                    age: "13",
                    test1: "58",
                    id: "12345",
                    class:
                        {
                            name: "1FE1"
                        }
                }
        }
    }
}

it("renders StudentList", () => {
    const component = TestRenderer.create(
        <MockedProvider addTypename={false}>
            <StudentList />
        </MockedProvider>,
    );

    const tree = component.toJSON();
    console.log(tree)
    expect(tree.children).toContain('Loading...');
});