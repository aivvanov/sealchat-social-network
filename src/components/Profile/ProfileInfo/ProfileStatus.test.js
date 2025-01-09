import React from 'react';
import { create, render } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

const profile = { userId: "123" }; // authUserId should be equal to profile.userId

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status="test_status" authUserId="123" profile={profile} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test_status");
    });

    test('<input> should not be displayed after creation', () => {
        const component = create(<ProfileStatus status="test_status" authUserId="123" profile={profile} />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="test_status" authUserId="123" profile={profile} updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})