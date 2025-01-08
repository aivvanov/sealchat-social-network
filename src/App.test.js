import SealChatApp from './App';
import { createRoot } from 'react-dom/client';

test('render without crushing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<SealChatApp />);
    root.unmount();
});