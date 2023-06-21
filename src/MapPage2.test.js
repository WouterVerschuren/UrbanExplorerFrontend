test('mock data should be the same as fetched data', async () => {
    const mockData = [{ id: 1, name: 'Location 1' }, { id: 2, name: 'Location 2' }];
    const [data, setLocations] = useState([]);

    useEffect(() => {
        fetch("https://urbanexplorerapi.azurewebsites.net/api/location/1")
            .then((response) => response.json())
            .then((fetchedData) => {
                setLocations(fetchedData);
            })
            .catch((err) => console.log(err));
    }, []);

    await waitFor(() => {
        expect(data).toEqual(mockData);
    });
});