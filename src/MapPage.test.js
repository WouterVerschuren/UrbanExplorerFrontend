import { render, screen, cleanup } from "@testing-library/react";
import MapPage from "./pages/MapPage";

test('should render MapPage component', () => {
    render(<MapPage />)
    const MapPageElement = screen.getByText(/map/);

    expect(MapPageElement).toBeInTheDocument();
})