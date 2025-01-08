import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const profile = { userId: "123" }; // authUserId should be equal to profile.userId

        const component = create(<ProfileStatus status="test_status" authUserId="123" profile={profile} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test_status");
    })
})