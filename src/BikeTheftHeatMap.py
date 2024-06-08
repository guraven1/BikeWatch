import csv
from geopy.geocoders import Nominatim
import pandas as pd
import folium
from folium.plugins import HeatMap

# Define the function to load bike theft data from a CSV file
def load_bike_theft_data(file_path):
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        next(reader)
        bike_theft_data = []
        for row in reader:
            bike_theft_data.append({
                'latitude': float(row[0]),
                'longitude': float(row[1]),
                'address': row[2],
                'date': row[3]
            })
        return bike_theft_data

# Define the function to geocode addresses to coordinates
def geocode_address(address):
    geolocator = Nominatim(user_agent="bike-theft-app")
    location = geolocator.geocode(address)
    if location:
        return location.latitude, location.longitude
    else:
        return None, None

# Define the main function
def main():
    # Load bike theft data from a CSV file
    bike_theft_data = load_bike_theft_data('Jerusalem/Jerusalem_delta.csv')

    # Geocode addresses to obtain missing coordinates
    for theft in bike_theft_data:
        if theft['latitude'] == 0.0 and theft['longitude'] == 0.0:
            latitude, longitude = geocode_address(theft['address'])
            theft['latitude'] = latitude
            theft['longitude'] = longitude

    # Convert bike theft data to a pandas DataFrame for analysis and visualization
    df = pd.DataFrame(bike_theft_data)

    # Create a map centered around Tel Aviv
    map_center = [32.0767, 34.7716]  # Coordinates of Tel Aviv University
    bike_theft_map = folium.Map(location=map_center, zoom_start=20)

    # Generate a heatmap layer based on bike theft coordinates
    heat_data = df[['latitude', 'longitude']].values
    HeatMap(heat_data).add_to(bike_theft_map)

    # Add "You are here!" marker at Tel Aviv University
    folium.Marker(
        location=map_center,
        tooltip="You are here!",
        icon=folium.Icon(color='green')
    ).add_to(bike_theft_map)

    # Save the map as an HTML file
    bike_theft_map.save('bike_theft_heatmap.html')

    print("Heatmap generated and saved as 'bike_theft_heatmap.html'.")

if __name__ == '__main__':
    main()
