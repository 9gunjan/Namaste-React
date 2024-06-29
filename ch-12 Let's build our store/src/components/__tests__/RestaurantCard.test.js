import RestrauntCard from "../RestrauntCard";
import { render , screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

test('should render Restaurant Card component with props data', () => {
    render(<RestrauntCard resData = {MOCK_DATA}/>);

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
    
    expect(name).toBeInTheDocument();
});