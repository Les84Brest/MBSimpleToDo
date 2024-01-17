import { render, fireEvent } from '@testing-library/react';
import TaskFilter, { Filter } from './TaskFilter';

describe('TaskFilter', () => {
    it('renders without crashing', () => {
        const { getByLabelText } = render(<TaskFilter onChange={() => {}} />);
        expect(getByLabelText('All')).toBeInTheDocument();
        expect(getByLabelText('Active')).toBeInTheDocument();
        expect(getByLabelText('Completed')).toBeInTheDocument();
    });

    it('calls onChange with the correct value when a filter is clicked', () => {
        const mockOnChange = jest.fn();
        const { getByLabelText } = render(<TaskFilter onChange={mockOnChange} />);

        fireEvent.click(getByLabelText('Active'));
        expect(mockOnChange).toHaveBeenCalledWith(expect.anything(), Filter.ACTIVE_TODOS);

        fireEvent.click(getByLabelText('Completed'));
        expect(mockOnChange).toHaveBeenCalledWith(expect.anything(), Filter.COMPLETED_TODOS);

        fireEvent.click(getByLabelText('All'));
        expect(mockOnChange).toHaveBeenCalledWith(expect.anything(), Filter.ALL_TODOS);
    });
});