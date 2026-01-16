// Enzyme setup (keep during migration to RTL)
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

// React Testing Library setup
import '@testing-library/jest-dom';
