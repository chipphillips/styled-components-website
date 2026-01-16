# TICKET-005: Install React Testing Library

## Priority
P1 - High

## Prerequisites
- TICKET-003: Add ESLint (for clean codebase)

## Description

Install React Testing Library (RTL) to enable migration away from the deprecated Enzyme library. RTL encourages testing user behavior rather than implementation details.

## Acceptance Criteria

- [ ] @testing-library/react installed
- [ ] @testing-library/jest-dom installed
- [ ] Jest configured for RTL
- [ ] Test setup file updated
- [ ] Example test written with RTL
- [ ] Both Enzyme and RTL work during migration

## Files to Modify

- `package.json` - Add dependencies
- `test/setup.ts` - Update test setup
- `.jest.config.js` - Update if needed

## Implementation

### 1. Install Dependencies

```bash
yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### 2. Update test/setup.ts

```typescript
// Enzyme setup (keep during migration)
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

// RTL setup (add this)
import '@testing-library/jest-dom';
```

### 3. Example RTL Test

Create `test/examples/rtl-example.spec.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Example component test
describe('RTL Example', () => {
  it('renders correctly', () => {
    render(<button>Click me</button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('handles click', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<button onClick={onClick}>Click me</button>);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

## RTL vs Enzyme Comparison

### Enzyme Approach (current)
```typescript
import { shallow } from 'enzyme';

const wrapper = shallow(<Component prop="value" />);
expect(wrapper.find('.class-name').text()).toBe('text');
expect(wrapper.state('isOpen')).toBe(true);
```

### RTL Approach (new)
```typescript
import { render, screen } from '@testing-library/react';

render(<Component prop="value" />);
expect(screen.getByText('text')).toBeInTheDocument();
expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument();
```

## Migration Strategy

1. Install RTL alongside Enzyme
2. Write new tests in RTL
3. Migrate existing tests incrementally
4. Remove Enzyme when all tests migrated

## Test Notes

1. Run `yarn test` to verify both work
2. Run the example RTL test
3. Verify no conflicts between libraries

## Estimated Effort
Small (1-2 hours)
