import { render } from '@testing-library/react';

import MentorCard from '../components/MentorCard';

describe('MentorCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MentorCard />);
    expect(baseElement).toBeTruthy();
  });
});
